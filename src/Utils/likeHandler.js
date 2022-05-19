import { likePost, unLikePost } from "../ApiCalls";

export const likeHandler = async ({ post, setPosts, handleaddtoast }) => {
  if (post.likes.likeCount === 0) {
    let new_post = await likePost(post?._id);
    if (new_post && new_post.length > 0) {
      setPosts(new_post);
      handleaddtoast({
        message: "Liked The Post",
        type: "alert-success",
      });
    }
  } else {
    let new_post = await unLikePost(post?._id);
    if (new_post && new_post.length > 0) {
      setPosts(new_post);
      handleaddtoast({
        message: "UnLiked The Post",
        type: "alert-success",
      });
    }
  }
};
