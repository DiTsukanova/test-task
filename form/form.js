const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const list1 = document.getElementById('select1')
const list2 = document.getElementById('select2')
const list3 = document.getElementById('select3')
const list4 = document.getElementById('select4')
const list5 = document.getElementById('select5')
const dataContainer = document.querySelector('.data-container')


const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    console.log('Форма отправлена')
    e.preventDefault();

    const formData = {
        'Input1': input1.value,
        'Input2': input2.value,
        'list1': list1.value,
        'list2': list2.value,
        'list3': list3.value,
        'list4': list4.value,
        'list5': list5.value
    };
    dataContainer.innerHTML = JSON.stringify(formData);

    const params = new URLSearchParams(formData).toString()
    console.log(params, 'PARAMS')
    fetch('http://127.0.0.1:8080/form?' + params).then(res => {
        if (res.status !== 200) {
            alert('Ошибка')
            return;
        }
        res.json().then(res => alert('RESPONSE:  ' + res.queryString))
    })
})