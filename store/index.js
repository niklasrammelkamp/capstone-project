import { atom } from "jotai";

const initialPictures = [
  {
    id: "1",
    image: "https://source.unsplash.com/random/?forrest",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2022.05.06",
    categories: ["forest"],
    settings: {
      film: "Kodak Gold 200",
      aperture: "f 1/4",
      time: "1/200",
      lens: "50",
      camera: "Canon AE-1",
    },
    comments: [{ id: "1", content: "voll schön" }],
  },
  {
    id: "4",
    image: "https://source.unsplash.com/random/?portrait,sunset",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2022.06.06",
    categories: ["portrait", "sunset"],
    settings: {
      film: "Kodak Gold 200",
      aperture: "f 1/4",
      time: "1/200",
      lens: "50",
      camera: "Canon AE-1",
    },
    comments: [],
  },
  {
    id: "2",
    image: "https://source.unsplash.com/random/?mountain",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2022.05.26",
    categories: ["landscape", "mountain"],
    settings: {
      film: "Kodak Gold 200",
      aperture: "f 1/4",
      time: "1/200",
      lens: "50",
      camera: "Canon AE-1",
    },
    comments: [],
  },
  {
    id: "3",
    image: "https://source.unsplash.com/random/?forrest,mountain",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2022.06.06",
    categories: ["landscape", "portrait", "mountain"],
    settings: {
      film: "Kodak Gold 200",
      aperture: "f 1/4",
      time: "1/200",
      lens: "50",
      camera: "Canon AE-1",
    },
    comments: [],
  },
  {
    id: "5",
    image: "https://source.unsplash.com/random/?mountain,portrait",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2022.06.06",
    categories: ["landscape", "portrait", "mountain"],
    settings: {
      film: "Kodak Gold 200",
      aperture: "f 1/4",
      time: "1/200",
      lens: "50",
      camera: "Canon AE-1",
    },
    comments: [],
  },
];

export const globalPictures = atom(initialPictures);

export const globalActiveFilters = atom([]);
