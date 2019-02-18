var teamBoxes = document.getElementsByClassName('team-slider__content-box');
var teamButtons = document.getElementsByClassName('team-slider__controls-button');
var teamScrolledContainer = document.getElementsByClassName('team-slider__content-wrapper')[0];
var teamButtonPosition = 0;


for (var i = 0; i < teamButtons.length; i++) ((buttonNumber) => {
    teamButtons[i].addEventListener('click', function () {
        teamSlide(buttonNumber);
    })
})(i);

function teamSlide(buttonPosition) {
    for (var i = 0; i < teamButtons.length; i++) {
        teamButtons[i].classList.remove('team-slider__controls-button_active');
        teamBoxes[i].classList.remove('team-slider__content-box_active');
    };
    teamButtonPosition = buttonPosition;
    teamBoxes[teamButtonPosition].classList.add('team-slider__content-box_active');
    teamButtons[teamButtonPosition].classList.add('team-slider__controls-button_active');
    teamScrolledContainer.style.transform =  'translateX(-' + 33.333*(teamButtonPosition) + '%)';
    teamButtonPosition++;
    if (teamButtonPosition === 3 ) {
        teamButtonPosition = 0;
    }
}

function teamAutoScroll() {
    setTimeout(function () {
        teamSlide(teamButtonPosition);
        teamAutoScroll();
    }, 10000);
}
 teamAutoScroll();