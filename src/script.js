const imageCarouselElement = document.getElementById("projectImages");
const textCarouselElement = document.getElementById("projectText");

const imageCarousel = new bootstrap.Carousel(imageCarouselElement);
const textCarousel = new bootstrap.Carousel(textCarouselElement);


// Next button
document.getElementById("nextProject").addEventListener("click", function () {

    imageCarousel.next();
    textCarousel.next();

});


// Previous button
document.getElementById("previousProject").addEventListener("click", function () {

    imageCarousel.prev();
    textCarousel.prev();

});