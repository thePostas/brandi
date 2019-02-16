var worksButtons = document.getElementsByClassName('photography__sort-buttons-item');
var activeButton = document.getElementsByClassName('photography__sort-buttons-item_active')[0];
var currentCategory = 'All';

for (var i = 0; i < worksButtons.length; i++) {
    worksButtons[i].addEventListener('click', addCategory);
}

function addCategory(event) {
    if (event.target.textContent !== currentCategory){
        currentCategory = event.target.textContent;
        console.log(event.target.classList.toString());
        activeButton.classList.remove('photography__sort-buttons-item_active');
        event.target.classList.add('photography__sort-buttons-item_active');
        activeButton = event.target;
        console.log(activeButton);
    }
}