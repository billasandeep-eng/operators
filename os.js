function subtract() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);

    let result = n1 - n2;

    document.getElementById("result").value = result;
}