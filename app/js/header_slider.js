var headerButtons = document.getElementsByClassName('header-slider-controls-button');
var headerBlocks = document.getElementsByClassName('header-slider-content-box');
var scrolledContainer = document.getElementsByClassName('header-slider-content-wrapper')[0];
var autoScrollPosition = 0;

for (var i = 0; i < headerButtons.length; i++) {
    headerButtons[i].addEventListener('click', function () {
        slide();
    })
};

function slide(buttonPosition) {
    for (var i = 0; i < headerButtons.length; i++) {
        headerButtons[i].classList.remove('header-slider-controls-button_active');
        headerBlocks[i].classList.remove('header-slider-content-box_active');
    };
    autoScrollPosition = buttonPosition;
    headerBlocks[autoScrollPosition].classList.add('header-slider-content-box_active');
    headerButtons[autoScrollPosition].classList.add('header-slider-controls-button_active');
    scrolledContainer.style.transform =  'translateY(-' + 100*(autoScrollPosition) + '%)';
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


var mobileMenuButton = document.getElementsByClassName('mobile-menu__button')[0];
var mobileMenu = document.getElementsByClassName('mobile-menu__list')[0];

mobileMenuButton.addEventListener('click', function () {
   if (mobileMenu.classList.contains('mobile-menu__list_active')) {
       mobileMenu.classList.remove('mobile-menu__list_active');
       mobileMenuButton.classList.remove('mobile-menu__button_active');
   } else {
       mobileMenu.classList.add('mobile-menu__list_active');
       mobileMenuButton.classList.add('mobile-menu__button_active');
   }
});