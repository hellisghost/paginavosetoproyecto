function precio1() {
    var selectProduct1 = document.getElementById("productos")
    var precio1 = selectProduct1.options[selectProduct1.selectedIndex].value
    var inputPrecio1 = document.getElementById("valor")
    inputPrecio1.value = precio1
}


function des_dolar(){
    let resultado = document.getElementById("resultado")
    let cantidad = document.getElementById("cantidad").value
    let descuento = (cantidad / 4000)
    let diferencia = descuento * 10 / 100
    let nuevototal = descuento - diferencia
    resultado.innerText = nuevototal
}

function des_euro(){
    let resultado = document.getElementById("resultado1")
    let cantidad = document.getElementById("cantidad").value
    let descuento = (cantidad / 3500)
    let diferencia = descuento * 12 / 100
    let nuevototal = descuento - diferencia
    resultado.innerText = nuevototal
}

function des_yuan(){
    let resultado = document.getElementById("resultado2")
    let cantidad = document.getElementById("cantidad").value
    let descuento = (cantidad / 35)
    let diferencia = descuento * 14 / 100
    let nuevototal = descuento - diferencia
    resultado.innerText = nuevototal
}