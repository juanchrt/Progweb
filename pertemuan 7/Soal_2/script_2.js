const originalClasses = {
    row1: "row1",
    row2: "row2",
    row3: "row3",
    row4: "row4",
    row5: "row5"
};

function highlightRow(rowId) {
    document.getElementById(rowId).className = "c3";
}

function resetRow(rowId) {
    document.getElementById(rowId).className = originalClasses[rowId];
}