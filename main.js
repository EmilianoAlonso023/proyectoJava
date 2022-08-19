function valorProducto(precio, descuento) {
    let valorDescuento = precio * descuento /100;
    let valorFinal = precio - valorDescuento;
    return valorFinal 
    }
    
    
    function productoNuevo() {
        let precioLista = parseInt(prompt("cual es el precio de lista?"));
        let descuento = parseInt(prompt("cual es el descuento?"));
        alert(`el precio final es de ${valorProducto(precioLista, descuento)}`);
        return valorProducto(precioLista, descuento);
    }
    
    console.log(productoNuevo());


    const monitor1 = {
        marca: "Samsung",
        tipo: "led",
        modelo: "b2330",
        pulgada: 24,
        hdmi: "si",
        stock: true
    }

    console.log(monitor1);

    function Monitores (marca, tipo, modelo, pulgada, hdmi, stock) {
        this.marca = marca; 
        this.tipo = tipo;
        this.modelo = modelo;
        this.pulgada = pulgada;
        this.hdmi = hdmi;
        this.stock = stock;
    }

    const lg = new Monitores("lg","led","a4240",23,"si", true);
    const sony = new Monitores("sony", "lcd","z2440",27,"si", true);
    console.log(lg);
    console.log(sony);

let lista = ["productos1", "productos2", "stock", "precio", false,{nombre: "emiliano", apellido: "alonso,"}];

console.log(lista);

console.log(lista.length);

for(let i = 0; i < lista.length; i ++) {
console.log(lista[i]);
}

let listaTecno = ["monitores", "pc", "notebooks", "teclados", "ssd", "mouse"];
listaTecno.push("auriculaes");
console.log(listaTecno);


console.log(listaTecno.join(" - "));

let listaPrecios = [
    {nombre: "monitores", precio: 50000},
    {nombre:"pc", precio: 100000},
    {nombre: "notebooks", precio: 150000},
    {nombre: "teclados", precio: 3000},
    {nombre: "ssd", precio: 30000},
    {nombre: "mouse", precio: 3000},
    {nombre: "auriculaes", precio: 5000},
];

let search = prompt("que producto buscas?");
let buscar = listaPrecios.find(el => el.nombre == search);
if (buscar != undefined) {
alert(`el objeto buscado es ${buscar.nombre} y su precio es ${buscar.precio}`);
} else {
    alert("ese producto no existe")
}

let buscaPrecio = listaPrecios.filter(el => el.precio > 40000 );
console.log(buscaPrecio);
















Toastify({
    text: "Seguinos en instagram!",
    duration: 3000,
    destination: "https://instagram.com",
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} 
  }).showToast();


  Toastify({
    text: "25% oof del 8 de agosto al 12 de Agosto en nuestro catalogo de whatsapp",
    destination: "https://web.whatsapp.com/",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();

  

  const boton = document.querySelector("#btn");
const contenedor = document.querySelector("#fetch");


const obtenerDatos = ()=>{
    fetch("./empleados.json")
    .then(response => response.json())
    .then(result => console.log(result))
    
    
    }



boton.onclick = ()=>{
    obtenerDatos();
}
