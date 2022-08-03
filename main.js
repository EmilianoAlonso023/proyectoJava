let titulo = document.getElementById("titulo");
    console.log(titulo);

    let unparrafo = document.getElementsByClassName("parrafo");
    console.log(unparrafo);

    let subtitulo = document.getElementsByTagName("h2");
    console.log(subtitulo);

    let selectorParrafo = document.querySelector(".parrafo");
    console.log(selectorParrafo);
    
    let selectorParrafos = document.querySelectorAll(".parrafo");
    console.log(selectorParrafo);

    console.log(titulo.innerHTML);
    titulo.className = "container row";
    titulo.setAttribute("class","titulo1");
    console.log(titulo.getAttribute("id"));

    let listaSegunda = document.querySelectorAll("li");
    console.log.apply(listaSegunda);

   let elementoNuevo = document.createElement("h2");
   elementoNuevo.setAttribute("id", "subtitulo");
   elementoNuevo.innerHTML = "este es un titulo nuevo";
   let contenedor = document.getElementById("contenedor");
   contenedor.appendChild(elementoNuevo);
   console.log(elementoNuevo);

   contenedor.removeChild(elementoNuevo);

const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#btn");


const escribir = () => {
 let texto = prompt ("que queres escribir?");
 parrafo. textContent = texto;
}
boton.addEventListener("click",escribir);


boton.addEventListener("mouseover",()=>{
    console.log("busqueda");
})



localStorage.setItem('llave', 'valor');
//sessionStorage.setItem('llave', 'otroValor');

const item = localStorage.getItem('llave');
console.log(item);

document.write(item);

localStorage.removeItem('llave');


const formularioUsuario = document.querySelector('#formularioUsuario');
const nombreFormulario = document.querySelector('#nombre');
const apellidoFormulario = document.querySelector('#apellido');
const saludoUsuario = document.querySelector('#saludoUsuario');
const logout = document.querySelector('#logout');

let nombre;
let apellido;
let nombreStorage = localStorage.getItem('nombre');
let apellidoStorage = localStorage.getItem('apellido');

const imprimirSaludo = () => {
    saludoUsuario = `hola ${nombre} ${apellido}`;
    formularioUsuario.style.display = 'none';
}


const ejecutarFormulario = () => {
    nombre = nombreFormulario.value; 
    apellido = apellidoFormulario.value; 
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    imprimirSaludo();
}

const verificarStorage = () => {
    if (nombreStorage != null && apellidoStorage !== null) {
    nombre = nombreStorage;
    apellido = apellidoStorage;

    imprimirSaludo();
} else {
    formularioUsuario.addEventListener('sumbit', (e) => {
    e.preventDefault();
    ejecutarFormulario();
    nombreFormulario.value = '';
    apellidoFormulario.value = '';
    });
}
}
const cerrarSesion = () => {
    localStorage.clear();
    revertirSaludo();
}

verificarStorage();


const objeto = {
    usuario: 'emiliano', edad: 33, monto: 1000
};
localStorage.setItem('objeto',JSON.stringify( objeto));
saludoUsuario.innerHTML = objeto;

const objetoSorage = JSON.parse(localStorage.getItem('objeto'));
const objetoStorageSinParse = localStorage.getItem('objeto');

console.log(objetoStorageSinParse);
console.log(objetoSorage);