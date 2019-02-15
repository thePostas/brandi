var buttons = document.querySelectorAll('.header__lower-header-slider-controls-button');
var blocks = document.getElementsByClassName('header__lower-header-slider-content-box');
var scrolledContainer = document.getElementsByClassName('header__lower-header-slider-content-wrapper')[0];
var buttonPosition = 0;
for (var i = 0; i < buttons.length; i++) ((buttonNumber) => {
    buttons[i].addEventListener('click', function () {
        clear();
        buttonPosition = buttonNumber;
        buttons[buttonNumber].classList.add('header__lower-header-slider-controls-button_active');
        scrolledContainer.style.bottom = 300*(buttonNumber) + 'px';
    })
})(i);

function clear() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('header__lower-header-slider-controls-button_active');
    };
}


function autoScroll() {
    setTimeout(function () {
        clear();
        buttons[buttonPosition].classList.add('header__lower-header-slider-controls-button_active');
        console.log(buttonPosition);
        scrolledContainer.style.bottom = 300*(buttonPosition) + 'px';
        buttonPosition++;
        if (buttonPosition === 3 ) {
            buttonPosition = 0;
        }
        autoScroll();
    }, 5000)
}

autoScroll();
