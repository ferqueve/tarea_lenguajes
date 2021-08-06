function validar() {

let nombre= document.getElementById('nombre');
let clave = document.getElementById('clave');

if ((nombre.value).trim() ==='' || (clave.value.trim())==='') 
{
    alert("Nombre o contraseña en blanco")
}else{
    location.href="contenido.html";
    localStorage.clear();
    localStorage.setItem("usuario",nombre.value);
}

}