import axios from "axios";

export const getPostComments = async ({ post_id }) => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/comments/${post_id}/`,
    });
  } catch (e) {
    console.log(e.message);
  }
};
