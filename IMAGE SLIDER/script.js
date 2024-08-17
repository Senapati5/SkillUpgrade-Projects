// script.js
let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlidePosition();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlidePosition();
}

function updateSlidePosition() {
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(moveToNextSlide, 3000);
