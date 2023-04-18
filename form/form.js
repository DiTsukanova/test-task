const dataContainer = document.querySelector('.data-container');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form));
    dataContainer.innerHTML = JSON.stringify(formData);

    const params = Object.entries(formData).map((elem) => {
        return `${elem[0]}=${elem[1]}`;
    }).join('&');

    fetch('/form?' + params).then(res => {
        if (res.status !== 200) {
            alert('Ошибка');
            return;
        }

        res.json().then(res => alert('RESPONSE: ' + res));
    });
});