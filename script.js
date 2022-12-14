function rangeSlide(value) {
    document.getElementById('range-value').innerHTML = value;
}

function generatePassword() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let valueInput = document.getElementById('length').value;
    let array = [];
    while (array.length < valueInput) {
        let randomNumber = Math.floor(Math.random() * 26);
        array.push(alphabet[randomNumber]);
    }
    console.log(array);
}
