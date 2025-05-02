function call_onKeyPress(ob) {
    let obval = ob.value;

    // nahan input
    if (obval.length > 256) {
        ob.value = obval.substr(0, 256);
        obval = ob.value; // update back
    }

    document.getElementById("txt2").value = obval.length + "/256";
}