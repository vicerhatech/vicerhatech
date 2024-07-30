document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll(".post");
    const recentPosts = document.querySelectorAll(".right-sidebar ul li a");
  
    recentPosts.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        posts.forEach(post => post.style.display = "none");
        posts[index].style.display = "block";
      });
    });
  
    posts.forEach(post => post.style.display = "none");
    if (posts.length > 0) {
      posts[0].style.display = "block";
    }
  });
  