import { Fragment, useState } from "react";
import SVGIcon from "@/components/SVGIcon";
import { StyledUpload } from "./StyledUpload";
import { StyledDescription } from "./StyledDescription";
import { StyledFieldset } from "./StyledFieldset";
import { StyledSuggestions } from "./StyledSuggestions";
import { StyledParagraphWrapper } from "./StyledParagraphWrapper";
import {
  StyledSettings,
  StyledSetting,
  StyledSettingsHeadline,
} from "./StyledSettings";
import Button from "../Button";
import { StyledH2 } from "../StyledHeadlines";
import Textarea from "../Textarea";
import Input from "./Input";
import UploadingSVG from "../AnimatedSVG/UploadingSVG";
import dotsloading from "@/public/icons/dots-loading.json";

export default function UploadForm({ initialCategories, onSubmit }) {
  const [categories, setCategories] = useState(initialCategories); // a list of all possible categories depending on users selection
  const [inputCategoryValue, setInputCategoryValue] = useState(""); // using for controlled Inputs
  const [selectedCategories, setSelectedCategories] = useState([]); // a list of all selected categories
  const [noCategoriesSelected, setNoCategoriesSelected] = useState(false); // letting the user know that there must be atleast one category selected

  const [imageUploadValue, setImageUploadValue] = useState(""); // for upload field
  const [descriptionFocus, setDescriptionFocus] = useState(""); // for description field
  const [showSettings, setShowSettings] = useState(true);

  const [uploading, setUploading] = useState(false);

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

    setUploading(true);

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

    onSubmit(uploadObject);
    event.target.reset();
    setSelectedCategories([]);
  }

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
          onChange={
            !uploading
              ? (event) => {
                  const file = event.target.files[0];

                  if (file.size > 7340032) {
                    alert(
                      "File size is too large, please select a file less than 7 MB."
                    );
                    return;
                  }
                  setImageUploadValue(true);
                }
              : undefined
          }
        />
      </StyledUpload>

      {/* ------- description ------- */}
      <StyledH2>Add description</StyledH2>
      <StyledDescription focus={descriptionFocus}>
        <label htmlFor="description">write description here</label>
        <textarea
          type="text"
          id="description"
          name="description"
          maxLength={250}
          required
          onFocus={(event) => {
            event.target.scrollHeight > 128
              ? setDescriptionFocus("leave")
              : setDescriptionFocus("top");
          }}
          onBlur={(event) => {
            if (event.target.scrollHeight > 128) {
              setDescriptionFocus("leave");
            } else if (event.target.value) {
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
                    variant="roundButton"
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

      {/* ------- Settings ------- */}
      <StyledFieldset>
        <StyledSettingsHeadline>
          <StyledH2> Add Settings</StyledH2>
          <Button
            variant="suggestion"
            isActive={true}
            type="button"
            onClick={() => {
              setShowSettings(!showSettings);
            }}
          >
            {showSettings ? "show" : "hide"}
          </Button>
        </StyledSettingsHeadline>

        <StyledSettings show={showSettings}>
          <StyledSetting>
            <SVGIcon variant="film" width="16" />
            <Input name="film" label="film e.g. Gold 200 …" maxLength={30} />
          </StyledSetting>

          <StyledSetting>
            <SVGIcon variant="aperture" width="13" />

            <Input
              name="aperture"
              label="aperture e.g. f/1,4, f/8 …"
              maxLength={5}
              pattern="[0-9.,]+"
              title="Only numbers, dots, and commas are allowed."
            />
          </StyledSetting>

          <StyledSetting>
            <SVGIcon variant="time" width="13" />
            <Input
              name="time"
              label="time e.g. 1/200, 3 …"
              maxLength={7}
              pattern="[0-9/]+"
              title="Only numbers and slash are allowed."
            />
          </StyledSetting>

          <StyledSetting>
            <SVGIcon variant="lens" width="13" />
            <Input
              name="lens"
              label="lens e.g. 20, 30-50 …"
              maxLength={10}
              pattern="[0-9-]+"
              title="Only numbers and minus are allowed."
            />
          </StyledSetting>

          <StyledSetting>
            <SVGIcon variant="camera" width="15" />
            <Input
              name="camera"
              label="camera e.g. Fujifilm XT100 …"
              maxLength={30}
            />
          </StyledSetting>
        </StyledSettings>
      </StyledFieldset>

      {selectedCategories < 1 ? (
        <Button
          variant="submit"
          type="button"
          onClick={() => {
            setNoCategoriesSelected(true);
          }}
        >
          <SVGIcon variant="send" width={24} color="var(--white)" />
          Upload
        </Button>
      ) : (
        <Button
          variant="submit"
          type="submit"
          disabled={uploading ? true : false}
        >
          {uploading ? (
            <>
              <UploadingSVG animationData={dotsloading} />
            </>
          ) : (
            <>
              <SVGIcon variant="send" width={24} color="var(--white)" />
              Upload
            </>
          )}
        </Button>
      )}
    </form>
  );
}
