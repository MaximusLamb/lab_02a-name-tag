const pTag2 = document.getElementById('hello');
myName.textContent = 'Max Lamb';
myName.style.fontFamily = 'Fantasy';
hello.textContent = 'Howdy';

const myButton = document.getElementById('button');
const myInput = document.getElementById('nameInput')

function changeName () {
    const pTag = document.getElementById('myName');

    const thePlaceWhereNamesAreTyped = myInput.value;

    pTag.textContent = thePlaceWhereNamesAreTyped;
}
myButton.addEventListener('click', changeName); 