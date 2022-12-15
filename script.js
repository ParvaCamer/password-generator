const display = document.getElementById('range-value');
let array = [];

let iValue = Math.floor(display.value / 4);

const characters = {
    lowerCase : 'abcdefghijklmnopqrstuvwxyz'.split(''),
    upperCase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    symbols : '&~"#{([-|`_\^@)]=}*+.,?;:!§µ%¨£$¤€'.split(''),
    numbers : '0123456789'.split('')
};

const isChecked = {
    uppercase : false,
    symbols : false,
    numbers : false
}

function rangeSlide(value) {
    display.value = value;
    iValue = Math.floor(display.value / 4);
};

function check(value) {
    if (!isChecked[value]) {
        isChecked[value] = true;
    } else {
        isChecked[value] = false;
    }
};

function includeUppercases(checkbox) {

    // if (checkbox.checked == true) {
    //     let i = iValue;
    //     while (i != 0) {
    //         let randomNumber = Math.floor(Math.random() * alphabet.length);
    //         array.push(alphabet[randomNumber].toUpperCase());
    //         i--;
    //     }
    // } else {
    //     for (let i = 0; i <= iValue; i++) {
    //         array.pop()
    //         i++
    //     }
    // }
    console.log(array)
};

function includeSymbols(checkbox) {

    // if (checkbox.checked == true) {
    //     let i = iValue;
    //     while (i != 0) {
    //         let randomNumber = Math.floor(Math.random() * symbols.length);
    //         array.push(symbols[randomNumber]);
    //         i--;
    //     }
    // } else {
    //     for (let i = 0; i <= iValue; i++) {
    //         array.pop()
    //         i++
    //     }
    // }
    console.log('test')
};

function includeNumbers() {

    // if (checkbox.checked == true) {
    //     let i = iValue;
        
    //     while (i != 0) {
    //         let randomNumber = Math.floor(Math.random() * numbers.length);
    //         array.push(numbers[randomNumber]);
    //         i--;
    //     }
    // } else {
    //     for (let i = 0; i <= iValue; i++) {
    //         array.pop()
    //         i++
    //     }
    // }
    console.log('array')
};

function generatePassword() {
    // while (array.length < display.value) {
    //     let randomNumber = Math.floor(Math.random() * alphabet.length);
    //     array.push(alphabet[randomNumber]);
    // }
    // console.log(array);
    for (const value in isChecked) {
        // console.log(value)
        // console.log(isChecked[value])
        if (value === 'uppercase' && isChecked[value]) {
            includeUppercases();
        } else if (value === 'symbols' && isChecked[value]) {
            includeSymbols();
        } else if (value === 'numbers' && isChecked[value]) {
            includeNumbers();
        }
    }
}
