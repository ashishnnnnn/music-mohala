import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "I Like To Sing and Sing",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    name: "Adarsh Balika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg:
      "https://camo.githubusercontent.com/e6f31db76aa258d4e26be8464f2dff9796d5cf59185976df02dd80ae6a60cc9e/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f7075672e737667",
  },
  {
    _id: uuid(),
    content: "I also Like To Sing and Sing",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    name: "Adarsh Balika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg:
      "https://camo.githubusercontent.com/e6f31db76aa258d4e26be8464f2dff9796d5cf59185976df02dd80ae6a60cc9e/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f7075672e737667",
  },
  {
    _id: uuid(),
    content: "I Like To Dance and Dance...",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "iamashish",
    name: "Ashish Kumar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: "https://avatars.githubusercontent.com/u/40332678?v=4",
  },
];
