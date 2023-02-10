import { Fragment, useState } from "react";
import SVGIcon from "@/components/SVGIcon";
import { StyledUpload } from "./StyledUploadForm";
import Button from "../Button";

export default function UploadForm({ initialCategories, onSubmit }) {
  const [categories, setCategories] = useState(initialCategories); // a list of all possible categories depending on users selection
  const [inputCategoryValue, setInputCategoryValue] = useState(""); // using for controlled Inputs
  const [selectedCategories, setSelectedCategories] = useState([]); // a list of all selected categories
  const [noCategoriesSelected, setNoCategoriesSelected] = useState(false); // letting the user know that there must be atleast one category selected

  const [inputVal, setInputVal] = useState("");

  const [statusIcon, setStatusIcon] = useState("");

  function onChangeInput(event) {
    setNoCategoriesSelected(false);
    setInputCategoryValue(event.target.value);
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

  // ----------- HANDLESUBMIT ----------------------------------
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setStatusIcon("... uploading image ⏳");

    // uploading the image file
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    // getting the uplaoded file
    const imageData = await response.json();

    // getting the actual date
    const currentDate = new Date().toLocaleDateString("us-US", {
      dateStyle: "medium",
    });

    // creating the new Picture Object
    const uploadObject = {
      image: imageData.secure_url,
      description: data.description,
      date: currentDate,
      categories: selectedCategories,
      settings: {
        film: data.film,
        aperture: data.aperture,
        time: data.time,
        lens: data.lens,
        camera: data.camera,
      },
      comments: [],
    };

    event.target.reset();
    setSelectedCategories([]);

    onSubmit(uploadObject);
  }

  // --------------------------------------------------------------------------------
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* {inputVal ? (
          <Button
            onClick={() => {
              setInputVal("");
            }}
          >
            x
          </Button>
        ) : (
          <></>
        )} */}
        <StyledUpload htmlFor="image" isActive={inputVal}>
          <SVGIcon variant="upload" width={31} />
          {inputVal ? "choose different image" : "upload image"}
          <input
            type="file"
            id="image"
            name="imageFile"
            required
            onChange={(event) => setInputVal(event.target.value)}
          />
        </StyledUpload>
      </div>

      <br />
      <label htmlFor="description">description</label>
      <textarea
        type="text"
        id="description"
        name="description"
        maxLength={250}
        required
      />

      {/* ------- search function + suggestions ------- */}
      <fieldset>
        <h2>Add categories</h2>
        <SVGIcon variant="search" width="13" />
        <input
          type="text"
          value={inputCategoryValue}
          onChange={onChangeInput}
          style={{
            outline: noCategoriesSelected && "red 2px solid",
          }}
        />
        {noCategoriesSelected && <span>required</span>}
        <div>
          {filterdCategories.length >= 1 ? (
            filterdCategories.map((category) => {
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
          ) : inputCategoryValue.length ? (
            <p>no categories found</p>
          ) : (
            <></>
          )}
        </div>

        {/* ------- listing all selected categories ------- */}
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
        <SVGIcon variant="film" width="16" />
        <label htmlFor="film">film</label>
        <input type="text" id="film" name="film" maxLength={30} />
        <br />
        <SVGIcon variant="aperture" width="13" />
        <label htmlFor="aperture">aperture</label>
        <span> f1/</span>
        <input
          type="number"
          id="aperture"
          name="aperture"
          step=".01"
          maxLength={5}
        />
        <br />
        <SVGIcon variant="time" width="13" />
        <label htmlFor="time">time</label>
        <input type="text" id="time" name="time" maxLength={7} />
        <span>s</span>
        <br />
        <SVGIcon variant="lens" width="13" />
        <label htmlFor="lens">lens</label>
        <input type="text" id="lens" name="lens" maxLength={10} />
        <span>mm</span>
        <br />
        <SVGIcon variant="camera" width="15" />
        <label htmlFor="camera">camera</label>
        <input type="text" id="camera" name="camera" maxLength={10} />
      </fieldset>
      {selectedCategories < 1 ? (
        <button
          type="button"
          onClick={() => {
            setNoCategoriesSelected(true);
          }}
        >
          upload
        </button>
      ) : (
        <button
          type="submit"
          disabled={statusIcon === "... uploading image ⏳" ? true : false}
        >
          upload
        </button>
      )}
      <div>
        <p>{statusIcon}</p>
      </div>
    </form>
  );
}
