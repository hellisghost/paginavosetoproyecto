function valortotal(){
    let resultado1 = document.getElementById("resultado1");    
    let resultado2 = document.getElementById("resultado2");
    let resultado3 = document.getElementById("resultado3");
    let cantidad1 = document.getElementById("cantidad1").value;
    let valor1 = document.getElementById("valor1").value;
    let sumatotal1 = valor1 * cantidad1
    let cantidad2 = document.getElementById("cantidad2").value;
    let valor2 = document.getElementById("valor2").value;
    let sumatotal2 = valor2 * cantidad2
    resultado1.innerText = sumatotal1
    resultado2.innerText = sumatotal2
    resultado3.innerText = sumatotal1 + sumatotal2
}

function getfiche(){
    
    let produc = document.getElementById("cantidad1").value;
    let melo = document.getElementById("valor1").value;
    document.getElementById("factura1").innerText = produc;
    document.getElementById("factura2").innerText = melo;
    let factura1 = valor1 * cantidad1
    factura1. innerText = factura1
    let perro = document.getElementById("cantidad2").value;
    document.getElementById("factura3").innerText = perro;
    let manuel = document.getElementById("valor2").value;
    document.getElementById("factura4").innerText = manuel;
}
