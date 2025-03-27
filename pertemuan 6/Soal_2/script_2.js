function getValidNumber() {
    let num;
    while (true) {
        num = prompt("Enter a number:");
        if (num === null) {
            alert("You must enter a number!");
            continue;
        }
        num = parseInt(num);
        if (!isNaN(num)) {
            return num;
        }
        alert("Invalid input! Please enter a valid number.");
    }
}

function generateTable(num) {
    let tableHTML = "";
    for (let i = 1; i <= num; i++) {
        tableHTML += `<tr>
                        <td>${i}</td>
                        <td>x</td>
                        <td>${num}</td>
                        <td>=</td>
                        <td>${i * num}</td>
                      </tr>`;
    }
    document.getElementById("multiplication-table").innerHTML = tableHTML;
}

let userNumber = getValidNumber();
generateTable(userNumber);