var worksButtons = document.getElementsByClassName('photography__sort-buttons-item');
var activeButton = document.getElementsByClassName('photography__sort-buttons-item_active')[0];
var worksPhotos = document.getElementsByClassName('photography__photo-container');
var currentCategory = 'All';

for (var i = 0; i < worksButtons.length; i++) {
    worksButtons[i].addEventListener('click', addCategory);
}

function addCategory(event) {
    if (event.target.textContent !== currentCategory){
        currentCategory = event.target.textContent;
        activeButton.classList.remove('photography__sort-buttons-item_active');
        event.target.classList.add('photography__sort-buttons-item_active');
        activeButton = event.target;
        var currentButton = event.target.classList.toString().split(' ')[1].split('-');
        var buttonClass = 'photography__photo-container-' + currentButton[currentButton.length-1];
        for (var i = 0; i < worksPhotos.length; i++) {
            worksPhotos[i].classList.remove('photography__photo-container_active');
        }
        for (var i = 0; i < worksPhotos.length; i++) {
            if (buttonClass === 'photography__photo-container-all') {
                worksPhotos[i].classList.add('photography__photo-container_active');
            } else if (worksPhotos[i].classList.contains(buttonClass)) {
                worksPhotos[i].classList.add('photography__photo-container_active');
            }
        }
    }
}