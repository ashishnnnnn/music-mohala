import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    name: "Adarsh Balika",
    email: "adarshbalika@gmail.com",
    username: "adarshbalika",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg:
      "https://camo.githubusercontent.com/e6f31db76aa258d4e26be8464f2dff9796d5cf59185976df02dd80ae6a60cc9e/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f7075672e737667",
  },
  {
    _id: uuid(),
    name: "Ashish Kumar",
    email: "ashish@gmail.com",
    username: "ashishkumar",
    password: "ashishkumar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: "https://avatars.githubusercontent.com/u/40332678?v=4",
  },
];
