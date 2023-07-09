const sliderItems = document.querySelectorAll('.slider__item');
const itemWidth = sliderItems[0].clientWidth;
console.dir(sliderItems[0]);
const sliderContainer = document.querySelector('.slider__container');
const toLeft = document.querySelector('.slider__prev');
const toRight = document.querySelector('.slider__next');
let currentSlide = 0;
let currentPosition = 0;

toLeft.dataset.direction = 'left';
toLeft.addEventListener('click', move);
toRight.dataset.direction = 'right';
toRight.addEventListener('click', move);

function move(event){
    const direction = event.target.dataset.direction;
    switch (direction){
        case 'left':
            currentPosition -= itemWidth;
            currentSlide++;
            toRight.style.display = 'inline-block';
            break;
        case 'right':
            currentPosition += itemWidth;
            currentSlide--;
            toLeft.style.display = 'inline-block';
            break;
    }
    sliderContainer.style = `transform: translateX(${currentPosition}px)`;
    if (currentSlide == sliderItems.length-1){
        event.target.style.display = 'none';
    }
    if (currentSlide == 0){
        event.target.style.display = 'none';
    }
}

