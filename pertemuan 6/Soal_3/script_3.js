function generatePyramid() {
    const height = parseInt(document.getElementById('height').value);
    const pyramidTable = document.getElementById('pyramid');

    if (isNaN(height) || height < 1 || height > 20) {
        alert("Masukkan tinggi antara 1 hingga 20.");
        return;
    }

    pyramidTable.innerHTML = ''; 

    for (let i = 0; i < height; i++) {
        let row = document.createElement('tr');
        let totalCells = 2 * height - 1; 
        let numFilled = 2 * i + 1;

        for (let j = 0; j < totalCells; j++) {
            let cell = document.createElement('td');

            if (j >= (totalCells - numFilled) / 2 && j < (totalCells + numFilled) / 2) {
                cell.classList.add('filled');
            }

            row.appendChild(cell);
        }
        pyramidTable.appendChild(row);
    }
}