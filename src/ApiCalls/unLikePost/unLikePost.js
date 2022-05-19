import axios from "axios";

export const unLikePost = async (post_id) => {
  const loginToken = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "POST",
      url: `/api/posts/unlike/${post_id}`,
      headers: {
        authorization: loginToken,
      },
    });
    return response.data.posts;
  } catch (e) {
    console.log(e);
  }
};
