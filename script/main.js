const elCat = document.querySelector('.cat');
const elCatleft = document.querySelector('.catleft');
const elCatright = document.querySelector('.catright');

let positionCat = 0;
elCat.style.left = positionCat + 'px';

elCatleft.addEventListener('mouseover', e => {
    if (positionCat < 300) {
        positionCat = positionCat + 10;
        elCat.style.left = positionCat + 'px';
    } else {
        positionCat = 200;
        elCat.style.left = positionCat + 'px';
    }
})

elCatright.addEventListener('mouseover', e => {
    if (positionCat > 0) {
        positionCat = positionCat - 10;
        elCat.style.left = positionCat + 'px';
    } else {
        positionCat = 100;
        elCat.style.left = positionCat + 'px';
    }
})