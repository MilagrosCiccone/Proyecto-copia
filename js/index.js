const nombre = document.getElementById("nombre");
// const apellido = document.getElementById("apellido");
const mail = document.getElementById("mail");
// const telefono = document.getElementById("telefono");
// const fechaIn = document.getElementById("fechaIn");
// const fechaOut = document.getElementById("fechaOut");
// const habitacion = document.getElementById("habitacion");
// const numTc = document.getElementById("numTc");
// const titular = document.getElementById("titular");
// const vencimientoTc = document.getElementById("vencimientoTc");
// const csTc = document.getElementById("csTc");
const mensaje = document.getElementById("mensaje");




const form = document.getElementById("formulario");
const parrafo = document.getElementById("warnings")

formulario.addEventListener("enviar", e=>{
    let warnings = ""
    if(nombre.value.length <6){
        warnings += 'El nombre es muy corto'
    }
})


