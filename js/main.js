const body = document.body;
let validInput;

function hitLuas() {
    const sisi = document.getElementById('luas-input').value;
    const selectInput = document.getElementById('luas-input');

    // Convert input value to integer
    const convertSisi = parseInt(sisi);

    // Check is the input is number or not
    const isNumber = Number.isInteger(convertSisi);


    if(sisi) {
        if(isNumber) {
            validInput = true;

            const result = sisi * sisi;
        
            const showExplanation = document.getElementById('luas-explanation');
            const showResult = document.getElementById('luas-final-result');
            
            showExplanation.textContent = `L = ${sisi} x ${sisi}`
            showResult.textContent = `L = ${result}`;
        } else {
            validInput = false;
            selectInput.value = "";
            selectInput.setAttribute('placeholder', "Harap masukan angka kedalam input!");
        }

    } else {
        validInput = false;
        selectInput.setAttribute('placeholder', "Harap masukan angka kedalam input!");
    }
}

function hitKeliling() {

    const sisi = document.getElementById('keliling-input').value;
    const selectInput = document.getElementById('keliling-input');
    // Convert the input value to integer
    const convertSisi = parseInt(sisi);

    // Checking is the input is number or not
    const isNumber = Number.isInteger(convertSisi);

    if(sisi) {
        if(isNumber) {
            const result = 4 * sisi;
    
            const showExplanation = document.getElementById('keliling-explanation');
            const showResult = document.getElementById('keliling-final-result');
    
            showExplanation.textContent = `K = 4 x ${sisi}`;
            showResult.textContent = `K = ${result}`;
        } else {
            validInput = false;
            selectInput.value = "";
            selectInput.setAttribute('placeholder', "Harap masukan angka kedalam input!");
        }
    } else {
        validInput = false;
        selectInput.value = "";
        selectInput.setAttribute('placeholder', "Harap masukan angka kedalam input!");
    }
}

function resetLuas() {

    let sisi = document.getElementById('luas-input');
    sisi.value = "";
    sisi.setAttribute('placeholder', "Input Sisi...");

    const showExplanation = document.getElementById('luas-explanation');
    const showResult = document.getElementById('luas-final-result');

    showExplanation.textContent = "";
    showResult.textContent = "";
}

function resetKeliling() {

    let sisi = document.getElementById('keliling-input');
    sisi.value = "";
    sisi.setAttribute('placeholder', "Input Sisi...");

    const showExplanation = document.getElementById('keliling-explanation');
    const showResult = document.getElementById('keliling-final-result');

    showExplanation.textContent = "";
    showResult.textContent = "";
}