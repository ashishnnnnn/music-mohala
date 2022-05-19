import axios from "axios";

export const addBookMark = async (post_id, setBookMarkList, handleaddtoast) => {
  const loginToken = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "POST",
      url: `/api/users/bookmark/${post_id}`,
      headers: {
        authorization: loginToken,
      },
    });

    setBookMarkList(response.data.bookmarks);
    handleaddtoast({
      message: "Added To BookMark",
      type: "alert-success",
    });
  } catch (e) {
    console.log(e);
  }
};
