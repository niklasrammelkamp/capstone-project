import Filter from "@/components/Filter";
import PostingList from "@/components/PostingList";
import { globalActiveFilters } from "@/store";
import { useAtom } from "jotai";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import LogIn from "@/components/LogIn";

// sort array function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function sortArray(array) {
  array.sort((a, b) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return array;
}

// ###################################################################################################################
// ###################################################################################################################

export default function HomePage() {
  const { data: session } = useSession();
  const [activeFilters, setActiveFilters] = useAtom(globalActiveFilters);
  const {
    data,
    isLoading: postsAreLoading,
    error: postsError,
    mutate,
  } = useSWR(session ? "api/posts" : null);

  const {
    data: loggedInUser,
    isLoading: userIsLoading,
    error: userError,
  } = useSWR(session ? `/api/user` : null);

  if (postsAreLoading) return <p>Posts are loading</p>;
  if (postsError) return <p>error posts</p>;

  if (userIsLoading) return <p>User is loading</p>;
  if (userError) return <p>error user</p>;

  if (data) {
    // reverse the posts so the latest is always on top
    const posts = [...data].reverse();

    // getting all used categories
    const usedCategories = posts
      .map((post) => {
        return post.categories;
      })
      .flatMap((category) => category); // makes a single array from nested arrays

    //removing duplicates
    const possibleFilters = [...new Set(usedCategories)]; // https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
    sortArray(possibleFilters);

    // adding or removing filters from activteFilters
    function handleFilterClick(clickedFilter) {
      if (!activeFilters.includes(clickedFilter)) {
        setActiveFilters([...activeFilters, clickedFilter]);
      } else {
        setActiveFilters(
          activeFilters.filter((filter) => filter !== clickedFilter)
        );
      }
    }

    // test if categories fit to the active filters
    function areCategoriesInFilter(categories) {
      const array = categories.filter((category) => {
        return activeFilters.includes(category);
      });
      sortArray(array); // sort Array alphabetical
      sortArray(activeFilters); // sort activeFilters alphabetical

      return array.toString() === activeFilters.toString(); // https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/
    }

    // create Array with all post objects compare to the active filters
    const filteredPosts = posts.filter((post) => {
      return areCategoriesInFilter(post.categories);
    });

    // --------------------------------------------------------------------------------
    if (session) {
      return (
        <>
          <Filter
            filter={possibleFilters}
            activeFilters={activeFilters}
            onFilterClick={handleFilterClick}
          />
          {filteredPosts.length >= 1 ? (
            <PostingList
              posts={filteredPosts}
              loggedInUserID={loggedInUser._id}
              reload={mutate}
            />
          ) : (
            <p>there are no posts, fitting to your filters</p>
          )}
        </>
      );
    }
  }
  return <LogIn />;
}
