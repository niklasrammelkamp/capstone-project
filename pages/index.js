import Filter from "@/components/Filter";
import PostingList from "@/components/PostingList";
import { globalPictures, globalActiveFilters } from "@/store";
import { useAtom } from "jotai";
import useSWR from "swr";

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
  const [pictures] = useAtom(globalPictures);
  const [activeFilters, setActiveFilters] = useAtom(globalActiveFilters);
  const { data, isLoading, error } = useSWR("api/posts");

  // getting all used categories
  const usedCategories = pictures
    .map((picture) => {
      return picture.categories;
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

  // create Array with all picture objects compare to the active filters
  const filteredPictures = pictures.filter((picture) => {
    return areCategoriesInFilter(picture.categories);
  });

  // --------------------------------------------------------------------------------
  return (
    <>
      <h1>Foto App</h1>
      <Filter
        filter={possibleFilters}
        activeFilters={activeFilters}
        onFilterClick={handleFilterClick}
      />
      {filteredPictures.length >= 1 ? (
        <PostingList pictures={filteredPictures} />
      ) : (
        <p>there are no pictures, fitting to your filters</p>
      )}
    </>
  );
}
