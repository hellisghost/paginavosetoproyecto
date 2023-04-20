function getficha1(){
    let producto = document.getElementById("nom_producto").value;
    document.getElementById("mostrar_nombre").innerText = producto
}

function getficha(){
    let producto = document.getElementById("lis_producto").value;
    document.getElementById("mostrar").innerText = producto
}

function getficha2(){
    let producto = document.getElementById("ver_anteriores").value;
    document.getElementById("mostrar_versiones").innerText = producto
}

function getficha3(){
    let producto = document.getElementById("ver_actual").value;
    document.getElementById("mostrar_actual").innerText = producto
}

function getficha4(){
    let producto = document.getElementById("modulo").value;
    document.getElementById("mostrar_modulo").innerText = producto
}