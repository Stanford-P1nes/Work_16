const button = document.querySelector('.btn-js');
const buttonBox = document.querySelector('.button-box');

button.addEventListener( 'mousedown', () => {
    buttonBox.classList.add('active')
    button.classList.add('active')
} )