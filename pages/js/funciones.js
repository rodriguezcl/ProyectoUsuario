let montos = JSON.parse(localStorage.getItem("montos")) || [];
let tipos = JSON.parse(localStorage.getItem("tipos")) || [];


let j = montos.length;

function agregar() {

    const txtMonto = document.getElementById("txtMonto");
    const txtTipo = document.getElementById("txtTipo");


    montos[j] = parseFloat(txtMonto.value);
    tipos[j] = txtTipo.value;

    j++;


    localStorage.removeItem("montos");
    localStorage.removeItem("tipos");

    localStorage.setItem("montos", JSON.stringify(montos));
    localStorage.setItem("tipos", JSON.stringify(tipos));


    //fin tabla

    txtMonto.value = ""
    txtTipo.value = "";
    txtMonto.focus();
}

function cancelar(){
    txtMonto.value = ""
    txtTipo.value = "";
    txtMonto.focus();

}