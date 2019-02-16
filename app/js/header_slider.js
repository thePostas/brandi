var headerButtons = document.getElementsByClassName('header-slider-controls-button');
var headerBlocks = document.getElementsByClassName('header-slider-content-box');
var scrolledContainer = document.getElementsByClassName('header-slider-content-wrapper')[0];
var autoScrollPosition = 0;

for (var i = 0; i < headerButtons.length; i++) ((buttonNumber) => {
    headerButtons[i].addEventListener('click', function () {
        slide(buttonNumber);
    })
})(i);

function slide(buttonPosition) {
    for (var i = 0; i < headerButtons.length; i++) {
        headerButtons[i].classList.remove('header-slider-controls-button_active');
        headerBlocks[i].classList.remove('header-slider-content-box_active');
    };
    autoScrollPosition = buttonPosition;
    headerBlocks[autoScrollPosition].classList.add('header-slider-content-box_active');
    headerButtons[autoScrollPosition].classList.add('header-slider-controls-button_active');
    scrolledContainer.style.bottom = 300*(autoScrollPosition) + 'px';
    autoScrollPosition++;
        if (autoScrollPosition === 3 ) {
            autoScrollPosition = 0;
        }
}

function autoScroll() {
    setTimeout(function () {
        slide(autoScrollPosition);
        autoScroll();
    }, 5000);
}
autoScroll();
