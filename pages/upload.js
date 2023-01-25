import { Fragment, useState } from "react";

// For the search function I got inspierd by: https://www.youtube.com/watch?v=Jd7s7egjt30&ab_channel=ReactwithMasoud

const initialCategories = [
  "mountain",
  "forest",
  "sunset",
  "bw",
  "landscape",
  "long exposure",
  "night",
  "moon",
  "portrait",
  "city",
  "people",
];

export default function UploadPage() {
  const [categories, setCategories] = useState(initialCategories);
  const [inputCategoryValue, setInputCategoryValue] = useState("");
  const [isCategoryFound, setIsCategoryFound] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  function onChangeInput(event) {
    setInputCategoryValue(event.target.value);
    if (event.target.value < 1) {
      setIsCategoryFound(false);
      return;
    }
    setIsCategoryFound(true);
  }

  function handleAddSelectedCategory(selectedCategory) {
    setSelectedCategories([...selectedCategories, selectedCategory]); // adds the category to the selected categories
    setCategories(
      categories.filter((category) => category !== selectedCategory) // removes the category from all categories so that I cant choose it again
    );
    setInputCategoryValue(""); // sets the Value of the Input to zero
  }

  function handleDeleteSelectedCategory(selectedCategory) {
    setSelectedCategories(
      selectedCategories.filter((category) => category !== selectedCategory) // removes the category from selected categories
    );
    setCategories([...categories, selectedCategory]); // adds the category to the all categories
  }

  // creates the array that shows the search results
  const filterdCategories = categories.filter((category) => {
    const searchTerm = inputCategoryValue.toLowerCase();
    const categoryLower = category.toLowerCase();

    return searchTerm && categoryLower.startsWith(searchTerm);
  });

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  }

  console.log("selectedCategories", selectedCategories);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">upload image</label>
      <input type="text" id="image" name="image" />
      <br />
      <label htmlFor="describtion">describtion</label>
      <textarea type="text" id="describtion" name="describtion" />

      <fieldset>
        <h2>Add categories</h2>
        <input
          type="text"
          value={inputCategoryValue}
          onChange={onChangeInput}
          onBlur={() => setIsCategoryFound(false)}
        />
        <div>
          {filterdCategories.length >= 1
            ? filterdCategories.map((category) => {
                return (
                  <p
                    key={category}
                    onClick={() => {
                      handleAddSelectedCategory(category);
                    }}
                  >
                    {category}
                  </p>
                );
              })
            : isCategoryFound && <p>no categories found</p>}
        </div>

        <section>
          <h3>selected categories</h3>
          {selectedCategories < 1 ? (
            <p>no categories selected</p>
          ) : (
            selectedCategories.map((category) => {
              return (
                <Fragment key={category}>
                  <p>{category}</p>
                  <button
                    onClick={() => {
                      handleDeleteSelectedCategory(category);
                    }}
                  >
                    delete
                  </button>
                </Fragment>
              );
            })
          )}
        </section>
      </fieldset>

      <fieldset>
        <h2>Settings</h2>
        <label htmlFor="film">film</label>
        <input type="text" id="film" name="film" />
        <br />
        <label htmlFor="aperture">aperture</label>
        <input type="text" id="aperture" name="aperture" />
        <br />
        <label htmlFor="time">time</label>
        <input type="text" id="time" name="time" />
        <br />
        <label htmlFor="lens">lens</label>
        <input type="text" id="lens" name="lens" />
        <br />
        <label htmlFor="camera">camera</label>
        <input type="text" id="camera" name="camera" />
      </fieldset>
      <button type="submit">upload</button>
    </form>
  );
}
