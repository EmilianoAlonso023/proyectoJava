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

function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user =="Emiliano" && pass == "1234"){

        window.location= "pagina.html";

    }

}

localStorage.setItem('valorTexto', 'texto');
localStorage.setItem('valorNumero', 100000);
localStorage.setItem('valorBoolean', true);

const objeto = {
    usuario: 'jorege', 
    edad: 41, 
    monto: 100,
};

localStorage.setItem('parrafo', JSON.stringify,(parrafo));

parrafo.innerHTML = objeto;

const objetoStorage = JSON.parse(localStorage.getItem('parrafo'));

console.log(objetoStorage);