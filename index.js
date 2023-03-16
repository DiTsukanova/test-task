window.addEventListener('load', function () {
    const modal = new bootstrap.Modal(document.getElementById('modal'));
    modal.show();
});

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const header = document.getElementById('header')

const leftBlock = document.querySelector('.left')
const middleBlock = document.querySelector('.middle')
const middleRow = document.getElementById('middle-row')

button1.addEventListener('click', () => {
    header.classList.toggle('visible')
})

button2.addEventListener('click', () => {
    if (middleRow.children[0].classList.contains('middle')) {
        leftBlock.after(middleBlock)
    } else {
        middleBlock.after(leftBlock)
    }

})