var featuresBoxes = document.getElementsByClassName('features-slider__content-box');
var featuresSliderContent = document.getElementsByClassName('features-slider__inner-content')[0];
var featuresButtons = document.getElementsByClassName('features-slider__controls-button');
var featuresScrolledContainer = document.getElementsByClassName('features-slider__inner-content')[0];
var featuresButtonPosition = 0;

featuresSliderContent.style.width = 100 * featuresBoxes.length + '%';

for (var i = 0; i < featuresButtons.length; i++) ((buttonNumber) => {
    featuresButtons[i].addEventListener('click', function () {
        featuresSlide(buttonNumber);
    })
})(i);

function featuresSlide(buttonPosition) {
    for (var i = 0; i < headerButtons.length; i++) {
        featuresButtons[i].classList.remove('features-slider__controls-button_active');
        featuresBoxes[i].classList.remove('features-slider__content-box_active');
    };
    featuresButtonPosition = buttonPosition;
    featuresBoxes[featuresButtonPosition].classList.add('features-slider__content-box_active');
    featuresButtons[featuresButtonPosition].classList.add('features-slider__controls-button_active');
    featuresScrolledContainer.style.left = '-' + 100 *(featuresButtonPosition) + '%';
    featuresButtonPosition++;
    if (featuresButtonPosition === 3 ) {
        featuresButtonPosition = 0;
    }
}

function featuresAutoScroll() {
    setTimeout(function () {
        featuresSlide(featuresButtonPosition);
        featuresAutoScroll();
    }, 6000);
}
featuresAutoScroll();