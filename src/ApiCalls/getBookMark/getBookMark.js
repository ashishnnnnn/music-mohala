import axios from "axios";

export const getBookMark = async () => {
  const loginToken = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "GET",
      url: "/api/users/bookmark",
      headers: {
        authorization: loginToken,
      },
    });
    return response.data.bookmarks;
  } catch (e) {
    console.log(e);
  }
};
