function dolares(){
    let resultado = document.getElementById("resultado")
    let cantidad = document.getElementById("cantidad").value
    let descuento = (cantidad / 4000)
    let diferencia = descuento * 10 / 100
    let nuevototal = descuento - diferencia
    resultado.innerText = nuevototal
}

function euros(){
    let resultado = document.getElementById("resultado1")
    let cantidad = document.getElementById("cantidad").value
    let descuento = (cantidad / 3500)
    let diferencia = descuento * 12 / 100
    let nuevototal = descuento - diferencia
    resultado.innerText = nuevototal
}

function yuanes(){
    let resultado = document.getElementById("resultado2")
    let cantidad = document.getElementById("cantidad").value
    let descuento = (cantidad / 35)
    let diferencia = descuento * 14 / 100
    let nuevototal = descuento - diferencia
    resultado.innerText = nuevototal
}