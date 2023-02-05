import { atom } from "jotai";

export const globalActiveFilters = atom([]);

const users = [
  {
    id: "rainerzufall@mail.com",
    name: "Rainer Zufall",
    regestrationYear: "2021",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    uploadedPosts: ["post1", "post2"],
    likedPosts: ["post4"],
    comments: ["comment1", "comment4", "comment5"],
  },
  {
    id: "peterlustig@mail.com",
    name: "Peter Lustig",
    regestrationYear: "2020",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1600",
    uploadedPosts: ["post3", "post4"],
    likedPosts: ["post2"],
    comments: ["comment2", "comment3"],
  },
];

export const globalUsers = atom(users);

const posts = [
  {
    id: "post1",
    user: "rainerzufall@mail.com",
    image: "https://source.unsplash.com/random/?forrest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2022.06.06",
    categories: ["landscape"],
    settings: {
      film: "Kodak Gold 200",
      aperture: "f 1/4",
      time: "1/200",
      lens: "50",
      camera: "Canon AE-1",
    },
    likes: ["peterlustig@mail.com"],
    comments: ["comment1"],
  },
  {
    id: "post2",
    user: "rainerzufall@mail.com",
    image: "https://source.unsplash.com/random/?forrest,mountain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2022.06.06",
    categories: ["forrest", "mountain"],
    settings: {
      film: "Kodak Gold 200",
      aperture: "f 1/4",
      time: "1/200",
      lens: "50",
      camera: "Canon AE-1",
    },
    likes: ["peterlustig@mail.com"],
    comments: ["comment4", "comment5"],
  },
  {
    id: "post3",
    user: "peterlustig@mail.com",
    image: "https://source.unsplash.com/random/?mountain,portrait",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2022.06.06",
    categories: [, "portrait", "mountain"],
    settings: {
      film: "Kodak Gold 200",
      aperture: "f 1/4",
      time: "1/200",
      lens: "50",
      camera: "Canon AE-1",
    },
    likes: [],
    comments: ["comment2"],
  },
  {
    id: "post4",
    user: "peterlustig@mail.com",
    image: "https://source.unsplash.com/random/?portrait,sunset",
    description:
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
    likes: ["rainerzufall@mail.com"],
    comments: ["comment3"],
  },
];

export const globalPosts = atom(posts);

const comments = [
  {
    id: "comment1",
    post: "post1",
    user: "rainerzufall@mail.com",
    content: "Lorem ipsum dolor sit amet comment1",
    date: "2022.06.10",
  },
  {
    id: "comment2",
    post: "post3",
    user: "peterlustig@mail.com",
    content: "Lorem ipsum dolor sit amet comment2",
    date: "2022.06.09",
  },
  {
    id: "comment3",
    post: "post4",
    user: "rainerzufall@mail.com",
    content: "TLorem ipsum dolor sit amet comment3",
    date: "2022.06.08",
  },
  {
    id: "comment4",
    post: "post2",
    user: "peterlustig@mail.com",
    content: "TLorem ipsum dolor sit amet comment4",
    date: "2022.06.07",
  },
  {
    id: "comment5",
    post: "post2",
    user: "rainerzufall@mail.com",
    content: "TLorem ipsum dolor sit amet comment5",
    date: "2022.05.06",
  },
];

export const globalComments = atom(comments);

// const initialPictures = [
//   {
//     id: "1",
//     image: "https://source.unsplash.com/random/?forrest",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     date: "2022.05.06",
//     categories: ["forest"],
//     settings: {
//       film: "Kodak Gold 200",
//       aperture: "f 1/4",
//       time: "1/200",
//       lens: "50",
//       camera: "Canon AE-1",
//     },
//     comments: [{ id: "1", content: "voll schön" }],
//   },
//   {
//     id: "4",
//     image: "https://source.unsplash.com/random/?portrait,sunset",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     date: "2022.06.06",
//     categories: ["portrait", "sunset"],
//     settings: {
//       film: "Kodak Gold 200",
//       aperture: "f 1/4",
//       time: "1/200",
//       lens: "50",
//       camera: "Canon AE-1",
//     },
//     comments: [],
//   },
//   {
//     id: "2",
//     image: "https://source.unsplash.com/random/?mountain",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     date: "2022.05.26",
//     categories: ["landscape", "mountain"],
//     settings: {
//       film: "Kodak Gold 200",
//       aperture: "f 1/4",
//       time: "1/200",
//       lens: "50",
//       camera: "Canon AE-1",
//     },
//     comments: [],
//   },
//   {
//     id: "3",
//     image: "https://source.unsplash.com/random/?forrest,mountain",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     date: "2022.06.06",
//     categories: ["landscape", "portrait", "mountain"],
//     settings: {
//       film: "Kodak Gold 200",
//       aperture: "f 1/4",
//       time: "1/200",
//       lens: "50",
//       camera: "Canon AE-1",
//     },
//     comments: [],
//   },
//   {
//     id: "5",
//     image: "https://source.unsplash.com/random/?mountain,portrait",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     date: "2022.06.06",
//     categories: ["landscape", "portrait", "mountain"],
//     settings: {
//       film: "Kodak Gold 200",
//       aperture: "f 1/4",
//       time: "1/200",
//       lens: "50",
//       camera: "Canon AE-1",
//     },
//     comments: [],
//   },
// ];
