

function almacenarData() {
    let alm, pro, int, mod, nub, ser, lic, ope, ini, col, sel, not, con, tip, fun

    alm = document.getElementById("dos").value
    pro = document.getElementById("dos1").value
    int = document.getElementById("tres").value
    mod = document.getElementById("tres1").value
    nub = document.getElementById("cuatro").value
    ser = document.getElementById("cuatro1").value
    lic = document.getElementById("cinco").value
    ope = document.getElementById("cinco1").value
    ini = document.getElementById("seis").value
    col = document.getElementById("seis1").value
    sel = document.getElementById("seis2").value
    not = document.getElementById("seis3").value
    con = document.getElementById("siete").value
    tip = document.getElementById("tipo").value
    fun = document.getElementById("uno1").value


    localStorage.setItem ("tipo", tip)
    localStorage.setItem ("funciones", fun)
    localStorage.setItem ("almacenamiento", alm)
    localStorage.setItem ("procesdador", pro)
    localStorage.setItem ("internet", int)
    localStorage.setItem ("modulo", mod)
    localStorage.setItem ("nube", nub)
    localStorage.setItem ("servidor", ser)
    localStorage.setItem ("licencias", lic)
    localStorage.setItem ("operador", ope)
    localStorage.setItem ("iniciar", ini)
    localStorage.setItem ("colocacion", col)
    localStorage.setItem ("seleccion", sel)
    localStorage.setItem ("notificacion", not)
    localStorage.setItem ("cobro", con)

    document.getElementById("tipo").value = ""
    document.getElementById("uno1").value = ""
    document.getElementById("dos").value = ""
    document.getElementById("dos1").value = ""
    document.getElementById("tres").value = ""
    document.getElementById("tres1").value = ""
    document.getElementById("cuatro").value = ""
    document.getElementById("cuatro1").value = ""
    document.getElementById("cinco").value = ""
    document.getElementById("cinco1").value = ""
    document.getElementById("seis").value = ""
    document.getElementById("seis1").value = ""
    document.getElementById("seis2").value = ""
    document.getElementById("seis3").value = ""
    document.getElementById("siete").value = ""

}

function cargarData(){
    let tipo, uno1, dos, dos1, tres, tres1, cuatro, cuatro1, cinco, cinco1, seis, seis1, seis2, seis3, siete
    const a = document.querySelector("#Almacenamiento")
const b = document.querySelector("#Procesador")
const c = document.querySelector("#Internet")
const d = document.querySelector("#Modulo")
const e = document.querySelector("#Nube")
const f = document.querySelector("#Servidor")
const g = document.querySelector("#Licencias")
const h = document.querySelector("#Operador")
const i = document.querySelector("#Iniciar")
const j = document.querySelector("#Colocacion")
const k = document.querySelector("#Seleccion")
const l = document.querySelector("#Notificacion")
const m = document.querySelector("#Cobro")
const n = document.querySelector("#Tipo")
const o = document.querySelector("#Funciones")
    
    
    
    tipo = localStorage.getItem("tipo")
    uno1 = localStorage.getItem("funciones")
    dos = localStorage.getItem("almacenamiento")
    dos1 = localStorage.getItem("procesador")
    tres = localStorage.getItem("internet")
    tres1 = localStorage.getItem("modulo")
    cuatro = localStorage.getItem("nube")
    cuatro1 = localStorage.getItem("servidor")
    cinco = localStorage.getItem("licencias")
    cinco1 = localStorage.getItem("operador")
    seis = localStorage.getItem("iniciar")
    seis1 = localStorage.getItem("colocacion")
    seis2 = localStorage.getItem("seleccion")
    seis3 = localStorage.getItem("notificacion")
    siete = localStorage.getItem("cobro")
    console.log(cinco)
    /*terminado*/
    n.innerHTML = tipo
    o.innerHTML = uno1
    a.innerHTML = dos
    b.innerHTML = dos1
    c.innerHTML = tres
    d.innerHTML = tres1
    e.innerHTML = cuatro
    f.innerHTML = cuatro1
    g.innerHTML = cinco
    h.innerHTML = cinco1
    i.innerHTML = seis
    j.innerHTML = seis1
    k.innerHTML = seis2
    l.innerHTML = seis3
    m.innerHTML = siete
   
}

const deleteMemory =() => {
    localStorage.clear();
}