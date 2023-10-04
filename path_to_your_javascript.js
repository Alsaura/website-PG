document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".content2 img");
    let content2Position = document.querySelector(".content2").offsetTop;
    let windowHeight = window.innerHeight;

    function showImages() {
        let scrollPosition = window.scrollY;

        if (scrollPosition + windowHeight >= content2Position) {
            images.forEach((image, index) => {
                setTimeout(() => {
                    image.classList.add('show');
                }, index * 150); // setiap gambar muncul dengan jeda 150ms
            });
        } else {
            images.forEach(image => {
                image.classList.remove('show');
            });
        }
    }

    window.addEventListener('scroll', showImages);
});
