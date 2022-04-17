console.log("hello carousel");
let carouselIndex = 1;
function onCarouselLeft() {
    carouselIndex--;
    if (carouselIndex < 0) {
        carouselIndex = 0;
    }
    renderCarousel();
}

function onCarouselRight() {
    carouselIndex++;
    if (carouselIndex > 6) {
        carouselIndex = 6;
    }
    renderCarousel();
}

function onCarouselNav(newCarouselIndex) {
    carouselIndex = newCarouselIndex;
    renderCarousel();
}

function renderCarousel() {
    let images = document.querySelectorAll('#section-works #carousel > img');
    for (let i = 0; i < images.length; i++) {
        if (i === carouselIndex) {
            images[i].className = 'carousel-main';
        } else if (i === carouselIndex - 1) {
            images[i].className = 'carousel-prev';
        } else if (i < carouselIndex - 1) {
            images[i].className = 'carousel-hidden-left';
        } else if (i === carouselIndex + 1) {
            images[i].className = 'carousel-next';
        } else if (i > carouselIndex + 1) {
            images[i].className = 'carousel-hidden-right';
        }
    }
}