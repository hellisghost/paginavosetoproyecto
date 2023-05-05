//mostrar el resultado HTML
const a = document.querySelector("#datoNombre")
const b = document.querySelector("#datoApellido")
const c = document.querySelector("#elemail")
const d = document.querySelector("#ladireccion")
const e = document.querySelector("#eltelefono")
const f = document.querySelector("#lafecha")

function almacenarData(){
    let nom, ape, ema, dir, tel, fec
    //capturar la data del html
    nom = document.getElementById("nombre").value
    ape = document.getElementById("apellido").value
    ema = document.getElementById("email").value
    dir = document.getElementById("direccion").value
    tel = document.getElementById("telefono").value
    fec = document.getElementById("fecha").value

    //almacenamiento de la data con localStorage
    localStorage.setItem("Nombre", nom)
    localStorage.setItem("Apellido", ape)
    localStorage.setItem("Correo", ema)
    localStorage.setItem("Direccion", dir)
    localStorage.setItem("Telefonico", tel)
    localStorage.setItem("Fecha", fec)
    /*Limpiando los campos o inputs*/
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("fecha").value = "";
}

function cargarData(){
    let nombre,apellido,email,direccion,telefono,fecha
    nombre = localStorage.getItem("Nombre");
    apellido = localStorage.getItem("Apellido");
    email = localStorage.getItem("Correo");
    direccion = localStorage.getItem("Direccion");
    telefono = localStorage.getItem("Telefonico");
    fecha = localStorage.getItem("Fecha");
    /*Mostrar datos almacenados*/      
    a.innerHTML = nombre;
    b.innerHTML = apellido; 
    c.innerHTML = email; 
    d.innerHTML = direccion; 
    e.innerHTML = telefono; 
    f.innerHTML = fecha; 

    document.getElementById("datoNombre").innerText = nombre;
}

