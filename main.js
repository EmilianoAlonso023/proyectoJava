const boton = document.querySelector("#btn");
const contenedor = document.querySelector("#fetch");

const obtenerDatos = ()=>{
fetch("./datos.txt")
.then(Response => console.log(Response))

}

boton.onclick = ()=>{
    obtenerDatos();
}
