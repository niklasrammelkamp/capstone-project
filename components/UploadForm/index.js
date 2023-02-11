import { Fragment, useState } from "react";
import SVGIcon from "@/components/SVGIcon";
import { StyledUpload } from "./StyledUpload";
import { StyledDescription } from "./StyledDescription";
import { StyledFieldset } from "./StyledFieldset";
import { StyledSuggestions } from "./StyledSuggestions";
import { StyledParagraphWrapper } from "./StyledParagraphWrapper";
import Button from "../Button";
import { StyledH2 } from "../StyledHeadlines";
import Textarea from "../Textarea";
import Input from "./Input";

export default function UploadForm({ initialCategories, onSubmit }) {
  const [categories, setCategories] = useState(initialCategories); // a list of all possible categories depending on users selection
  const [inputCategoryValue, setInputCategoryValue] = useState(""); // using for controlled Inputs
  const [selectedCategories, setSelectedCategories] = useState([]); // a list of all selected categories
  const [noCategoriesSelected, setNoCategoriesSelected] = useState(false); // letting the user know that there must be atleast one category selected

  const [imageUploadValue, setImageUploadValue] = useState(""); // for upload field
  const [descriptionFocus, setDescriptionFocus] = useState(""); // for description field

  const [statusIcon, setStatusIcon] = useState(false);

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

    return searchTerm && categoryLower.includes(searchTerm);
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

  console.log(inputCategoryValue);

  // --------------------------------------------------------------------------------
  return (
    <form onSubmit={handleSubmit}>
      {/* ------- image upload ------- */}
      <StyledUpload htmlFor="image" isActive={imageUploadValue}>
        <SVGIcon variant="upload" width={31} />
        {imageUploadValue ? "choose different image" : "upload image"}
        <input
          type="file"
          id="image"
          name="imageFile"
          required
          onChange={() => setImageUploadValue(true)}
        />
      </StyledUpload>

      {/* ------- description ------- */}
      <StyledH2>Add description</StyledH2>
      <StyledDescription focus={descriptionFocus}>
        <label htmlFor="description">write description heres</label>
        <textarea
          type="text"
          id="description"
          name="description"
          maxLength={250}
          required
          onFocus={() => setDescriptionFocus("top")}
          onBlur={(event) => {
            if (event.target.value) {
              setDescriptionFocus("top");
            } else {
              setDescriptionFocus("");
            }
          }}
          onInput={(event) => {
            if (event.target.scrollHeight > 128) {
              setDescriptionFocus("leave");
            } else {
              setDescriptionFocus("top");
            }
          }}
        />
      </StyledDescription>

      {/* ------- search function + suggestions ------- */}
      <StyledFieldset>
        <StyledH2>Add categories</StyledH2>

        {/* ------- Search Input ------- */}
        {selectedCategories.length === 3 ? (
          <StyledParagraphWrapper>
            <p>You reached the maximum of 3</p>
          </StyledParagraphWrapper>
        ) : (
          <Input
            name="searchField"
            value={inputCategoryValue}
            onChange={onChangeInput}
            noCategoriesSelected={noCategoriesSelected}
            svg="search"
            label={noCategoriesSelected ? "required" : "search for category"}
          />
        )}

        {/* ------- Search Suggestion ------- */}
        <StyledSuggestions>
          {filterdCategories.length >= 1 ? (
            filterdCategories.map((category) => {
              return (
                <div key={category}>
                  <Button
                    variant="suggestion"
                    onClick={() => {
                      handleAddSelectedCategory(category);
                    }}
                  >
                    {category}
                  </Button>
                  <Button
                    variant="suggestion"
                    isActive={true}
                    onClick={() => {
                      handleAddSelectedCategory(category);
                    }}
                  >
                    add +
                  </Button>
                </div>
              );
            })
          ) : inputCategoryValue.length ? (
            <p>no categories found</p>
          ) : (
            <></>
          )}
        </StyledSuggestions>

        {/* ------- listing all selected categories ------- */}
        <section>
          {selectedCategories &&
            selectedCategories.map((category) => {
              return (
                <StyledParagraphWrapper key={category} green={true}>
                  <p>{category}</p>
                  <Button
                    variant="navButtonUpload"
                    onClick={() => {
                      handleDeleteSelectedCategory(category);
                    }}
                  >
                    <SVGIcon variant="minus" width={20} color="var(--white)" />
                  </Button>
                </StyledParagraphWrapper>
              );
            })}
        </section>
      </StyledFieldset>

      <StyledFieldset>
        <StyledH2> Add Settings</StyledH2>
        <SVGIcon variant="film" width="16" />
        <Input name="film" label="film" maxLength={30} />

        <br />
        <SVGIcon variant="aperture" width="13" />
        <Input name="aperture" label="aperture" maxLength={30} />
        {/* <label htmlFor="aperture">aperture</label> */}
        <span> f1/</span>
        {/* <input
          type="number"
          id="aperture"
          name="aperture"
          step=".01"
          maxLength={5}
        /> */}
        <br />
        <SVGIcon variant="time" width="13" />
        <Input name="time" label="time" maxLength={30} />
        {/* <label htmlFor="time">time</label>
        <input type="text" id="time" name="time" maxLength={7} /> */}
        <span>s</span>
        <br />
        <SVGIcon variant="lens" width="13" />
        <Input name="lens" label="lens" maxLength={30} />
        {/* <label htmlFor="lens">lens</label>
        <input type="text" id="lens" name="lens" maxLength={10} /> */}
        <span>mm</span>
        <br />
        <SVGIcon variant="camera" width="15" />
        <Input name="camera" label="camera" maxLength={30} />
        {/* <label htmlFor="camera">camera</label>
        <input type="text" id="camera" name="camera" maxLength={10} /> */}
      </StyledFieldset>
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
