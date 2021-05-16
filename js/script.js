const RegBtn = document.querySelector('button#reg');
const LogBtn = document.querySelector('button#log');

const Overlay = document.querySelector('.overlay-block');

const RegBlock = document.querySelector('.authorization-block#reg');
const LogBlock = document.querySelector('.authorization-block#log');


LogBtn.addEventListener('click', () => {
    Overlay.classList.add('login');
    Overlay.classList.remove('register');
    
    RegBlock.classList.add('hidden');
    LogBlock.classList.remove('hidden');
});

RegBtn.addEventListener('click', () => {
    Overlay.classList.add('register');
    Overlay.classList.remove('login');

    LogBlock.classList.add('hidden');
    RegBlock.classList.remove('hidden');
});