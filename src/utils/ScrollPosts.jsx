export const scrollPostDown = () => {
  const post = document.getElementById("post");
  if (post) {
    post.scrollTop = post.scrollHeight;
  }
};
