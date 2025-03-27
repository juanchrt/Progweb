function hitung() {
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    
    let a = parseInt(angka1);
    let b = parseInt(angka2);
    
    if (isNaN(a) && isNaN(b)) {
        alert("Angka pertama dan kedua harus angka.");
    } else if (isNaN(a)) {
        alert("Angka pertama bukan angka.");
    } else if (isNaN(b)) {
        alert("Angka kedua harus angka.");
    } else {
        // Set input values in the table
        document.getElementById("nilaiAngka1").innerHTML = a;
        document.getElementById("nilaiAngka2").innerHTML = b;
        document.getElementById("nilaiAngka1_2").innerHTML = a;
        document.getElementById("nilaiAngka2_2").innerHTML = b;
        
        // Perform calculations
        document.getElementById("hasilTambah").innerHTML = a + b;
        document.getElementById("hasilKurang").innerHTML = a - b;
    }
}