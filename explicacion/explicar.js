//mostrar el resultado HTML
const s = document.querySelector("#datoIdentidad")
const nn = document.querySelector("#datoNumero")
const n = document.querySelector("#datoNombre")
const a = document.querySelector("#datoApellido")
const f = document.querySelector("#datoFecha")
const e = document.querySelector("#datoEmail")
const t = document.querySelector("#datoTelefono")


function almacenarData(){
    let nom, ape, fec, ema, tel, idt, num
    //capturar la data del html
    idt = document.getElementById("identidad").value
    num = document.getElementById("numero").value
    nom = document.getElementById("nombre").value
    ape = document.getElementById("apellido").value
    fec = document.getElementById("fecha").value
    ema = document.getElementById("correo").value
    tel = document.getElementById("telefono").value
    //almacenamiento de la data con localStorage
    localStorage.setItem("identidad", idt)
    localStorage.setItem("Numero", num)
    localStorage.setItem("Nombre", nom)
    localStorage.setItem("Apellido", ape)
    localStorage.setItem("Fecha", fec) 
    localStorage.setItem("Correo", ema)
    localStorage.setItem("Telefono", tel)
 
    /*Limpiando los campos o inputs*/
    document.getElementById("identidad").value = ""
    document.getElementById("numero").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("correo").value = ""
    document.getElementById("telefono").value = ""
    
}
function cargarData(){
    let nombre,apellido,fecha,correo,telefono,identidad
    identidad = localStorage.getItem("identidad")
    numero = localStorage.getItem("Numero")
    nombre = localStorage.getItem("Nombre")
    apellido = localStorage.getItem("Apellido")
    fecha = localStorage.getItem("Fecha")
    correo = localStorage.getItem("Correo")
    telefono = localStorage.getItem("Telefono")
    /*Mostrar datos almacenados*/     
    s.innerHTML = identidad; 
    nn.innerHTML = numero;
    n.innerHTML = "<b>"+nombre+"</b>"
    a.innerHTML = apellido; 
    f.innerHTML = fecha;
    e.innerHTML = correo;
    t.innerHTML = telefono;
}

