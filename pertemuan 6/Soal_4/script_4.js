function validateInput() {
    const inputField = document.getElementById("inputNumber");
    const conversionType = document.getElementById("conversionType").value;

    if (conversionType === "decimal-biner") {
        inputField.value = inputField.value.replace(/[^0-9]/g, '');
        if (parseInt(inputField.value) > 255) {
            inputField.value = "255";
        }
    } else if (conversionType === "biner-decimal") {
        inputField.value = inputField.value.replace(/[^01]/g, '');
        if (inputField.value.length > 8) {
            inputField.value = inputField.value.slice(0, 8);
        }
    }
}

function convertNumber() {
    const inputField = document.getElementById("inputNumber");
    const outputField = document.getElementById("outputNumber");
    const conversionType = document.getElementById("conversionType").value;

    let inputValue = inputField.value.trim();

    if (inputValue === "") {
        alert("Masukkan angka terlebih dahulu!");
        return;
    }

    if (conversionType === "decimal-biner") {
        outputField.value = convertDecimalToBinary(parseInt(inputValue));
    } else if (conversionType === "biner-decimal") {
        outputField.value = convertBinaryToDecimal(inputValue);
    }
}

function convertDecimalToBinary(decimal) {
    let binary = "";
    for (let i = 7; i >= 0; i--) {
        let bit = Math.floor(decimal / Math.pow(2, i));
        binary += bit;
        decimal -= bit * Math.pow(2, i);
    }
    return binary;
}

function convertBinaryToDecimal(binary) {
    let decimal = 0;
    let power = binary.length - 1;
    for (let i = 0; i < binary.length; i++) {
        decimal += parseInt(binary[i]) * Math.pow(2, power);
        power--;
    }
    return decimal;
}

function resetFields() {
    document.getElementById("inputNumber").value = "";
    document.getElementById("outputNumber").value = "";
}
