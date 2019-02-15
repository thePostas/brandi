var buttons = document.getElementsByClassName('slider-controls-button');
var blocks = document.getElementsByClassName('slider-content-box');
var scrolledContainer = document.getElementsByClassName('slider-content-wrapper')[0];
var autoScrollPosition = 0;

for (var i = 0; i < buttons.length; i++) ((buttonNumber) => {
    buttons[i].addEventListener('click', function () {
        slide(buttonNumber);
    })
})(i);

function slide(buttonPosition) {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('slider-controls-button_active');
        blocks[i].classList.remove('slider-content-box_active');
    };
    autoScrollPosition = buttonPosition;
    blocks[autoScrollPosition].classList.add('slider-content-box_active');
    buttons[autoScrollPosition].classList.add('slider-controls-button_active');
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
