let dataArray = [];

function addData() {
    const input = document.getElementById("dataInput");
    const value = parseInt(input.value);

    if (!isNaN(value)) {
        dataArray.push(value);
        input.value = "";
        document.getElementById("result").value = "Data ditambahkan";
    } else {
        document.getElementById("result").value = "Masukkan angka valid";
    }
}

function performOperation() {
    const op = document.getElementById("operation").value;
    let output = "";

    switch(op) {
        case "display":
            output = dataArray.join(", ");
            break;
        case "count":
            output = dataArray.length;
            break;
        case "sum":
            output = dataArray.reduce((a, b) => a + b, 0);
            break;
        case "average":
            output = dataArray.length ? (dataArray.reduce((a, b) => a + b, 0) / dataArray.length).toFixed(2) : 0;
            break;
        case "max":
            output = Math.max(...dataArray);
            break;
        case "min":
            output = Math.min(...dataArray);
            break;
        case "odd":
            output = dataArray.filter(n => n % 2 !== 0).join(", ");
            break;
        case "even":
            output = dataArray.filter(n => n % 2 === 0).join(", ");
            break;
        case "clear":
            dataArray = [];
            output = "Array dikosongkan";
            break;
        default:
            output = "";
    }

    document.getElementById("result").value = output;
}