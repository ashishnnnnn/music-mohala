import axios from "axios";

export const addPostComment = async ({
  post_id,
  handleaddtoast,
  commentData,
  setCommentArray,
}) => {
  const loginToken = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "POST",
      url: `/api/comments/add/${post_id}`,
      data: { commentData: commentData },
      headers: {
        authorization: loginToken,
      },
    });
    handleaddtoast({
      message: "Comment Added Successfully",
      type: "alert-success",
    });
    return response.data.comments;
  } catch (e) {
    console.log(e);
  }
};
