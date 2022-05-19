import axios from "axios";

export const likePost = async (post_id) => {
  const loginToken = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "POST",
      url: `/api/posts/like/${post_id}`,
      headers: {
        authorization: loginToken,
      },
    });
    return response.data.posts;
  } catch (e) {
    console.log(e);
  }
};
