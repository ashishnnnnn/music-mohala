import axios from "axios";

export const removeBookMark = async (
  post_id,
  setBookMarkList,
  handleaddtoast
) => {
  const loginToken = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "POST",
      url: `/api/users/remove-bookmark/${post_id}`,
      headers: {
        authorization: loginToken,
      },
    });
    console.log(response.data);
    setBookMarkList(response.data.bookmarks);
    handleaddtoast({
      message: "Removed from BookMark",
      type: "alert-success",
    });
  } catch (e) {
    console.log(e);
  }
};
