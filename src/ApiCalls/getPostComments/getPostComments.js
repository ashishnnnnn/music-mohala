import axios from "axios";

export const getPostComments = async ({ post_id }) => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/comments/${post_id}/`,
    });
    console.log(response);
  } catch (e) {
    console.log(e.message);
  }
};
