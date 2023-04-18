const modal = new bootstrap.Modal(document.getElementById('modal'));
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const header = document.getElementById('header');
const middleBlock = document.querySelector('.middle');

function toggleClass(elem, classElem) {
    elem.classList.toggle(classElem);
}

window.addEventListener('load', () => {
    modal.show();
});

button1.addEventListener('click', () => {
    toggleClass(header, 'visible')
});

button2.addEventListener('click', () => {
    toggleClass(middleBlock, 'active-block')
});