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
  },
  {
    _id: uuid(),
    name: "Ashish Kumar",
    email: "ashish@gmail.com",
    username: "ashishkumar",
    password: "ashishkumar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
