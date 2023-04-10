window.addEventListener('load', function () {
    const modal = new bootstrap.Modal(document.getElementById('modal'));
    modal.show();
});

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const header = document.getElementById('header');
const middleBlock = document.querySelector('.middle');

button1.addEventListener('click', () => {
    header.classList.toggle('visible');
});

button2.addEventListener('click', () => {
     middleBlock.classList.toggle('active-block');
});