const wordLength = document.getElementById('range-value');
const display = document.querySelector('#password');
let inputValue = wordLength.value;
let array = [];

const characters = {
    lowerCase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    symbols: '&~"#{([-|`_\^@)]=}*+.,?;:!§µ%¨£$¤€'.split(''),
    numbers: '0123456789'.split('')
};

const isChecked = {
    uppercase: false,
    symbols: false,
    numbers: false
};

function rangeSlide(value) {
    wordLength.value = value;
    inputValue = value;
};

function check(value) {
    if (!isChecked[value]) {
        isChecked[value] = true;
    } else {
        isChecked[value] = false;
    }
};

function includeCharacters(charactersArray) {
    let iValue = Math.floor(wordLength.value / 4);
    while (iValue > 0) {
        let randomNumber = Math.floor(Math.random() * charactersArray.length);
        array.push(charactersArray[randomNumber]);
        iValue--;
    }
};

function generatePassword() {
    array = [];
    for (const value in isChecked) {
        if (value === 'uppercase' && isChecked[value]) {
            includeCharacters(characters.upperCase);
        } else if (value === 'symbols' && isChecked[value]) {
            includeCharacters(characters.symbols);
        } else if (value === 'numbers' && isChecked[value]) {
            includeCharacters(characters.numbers);
        }
    }
    while ( array.length < inputValue) {
        let randomNumber = Math.floor(Math.random() * characters.lowerCase.length);
        array.push(characters.lowerCase[randomNumber]);
    }
    display.value = array.sort(() =>Math.random() - 0.5).join('');
    if (inputValue >= 22) {
        display.style.fontSize = "0.8rem";
    } else {
        display.style.fontSize = "1rem";
    }
};