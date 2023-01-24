import PostingList from "@/components/PostingList";
import initialPictures from "@/store";
import { atom, useAtom } from "jotai";

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

// getting all used categories
const usedCategories = initialPictures
  .map((picture) => {
    return picture.categories;
  })
  .flatMap((category) => category); // makes a single array from nested arrays

//removing duplicates
const filtersStrings = [...new Set(usedCategories)]; // https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
sortArray(filtersStrings);

//create objects for each filter
const filters = filtersStrings.map((filter) => {
  return { filterName: filter, isClicked: false };
});

const globalFilters = atom(filters);

// ###################################################################################################################
// ###################################################################################################################

export default function HomePage() {
  const [possibleFilters, setPossibleFilters] = useAtom(globalFilters);

  function handleFilterClick(clickedFilter) {
    setPossibleFilters(
      possibleFilters.map((filter) => {
        if (filter.filterName === clickedFilter.filterName) {
          return { ...filter, isClicked: !filter.isClicked };
        }
        return filter;
      })
    );
  }

  // create Array containing all active Filters
  const filterActive = possibleFilters
    .filter((filter) => filter.isClicked)
    .map((filter) => filter.filterName);

  // test if categories fit to the active filters
  function areCategoriesInFilter(categories) {
    const array = categories.filter((category) => {
      return filterActive.includes(category);
    });
    sortArray(array); // sort Array alphabetical
    return array.toString() === filterActive.toString(); // https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/
  }

  // create Array with all picture objects compare to the active filters
  const filteredPictures = initialPictures.filter((picture) => {
    return areCategoriesInFilter(picture.categories);
  });

  // console.log("actualFilter", actualFilter);
  console.log("filterActive", filterActive);
  console.log("filteredPictures", filteredPictures);

  // --------------------------------------------------------------------------------
  return (
    <>
      <h1>Foto App</h1>
      {possibleFilters.map((filter) => {
        return (
          <button
            key={filter.filterName}
            onClick={() => {
              handleFilterClick(filter);
            }}
            style={{
              backgroundColor: filter.isClicked ? "black" : "",
              color: filter.isClicked ? "white" : "black",
            }}
          >
            {filter.filterName}
          </button>
        );
      })}
      <PostingList pictures={filteredPictures} />
    </>
  );
}
