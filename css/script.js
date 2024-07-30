document.addEventListener('DOMContentLoaded', function() {
    const postLinks = document.querySelectorAll('.post-link');

    postLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const postId = this.getAttribute('href').substring(1);
            document.getElementById(postId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
