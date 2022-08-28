/* function valorReparacion(precio, descuento) {
    let valorDescuento = precio * descuento /100;
    let valorFinal = precio - valorDescuento;
    return valorFinal 
    } */

    const monitor1 = {
        marca: "Samsung",
        tipo: "led",
        modelo: "b2330",
        pulgada: 24,
        hdmi: "si",
        reparado: true
    }

    console.log(monitor1);

    function Monitores (marca, tipo, modelo, pulgada, hdmi, reparado) {
        this.marca = marca; 
        this.tipo = tipo;
        this.modelo = modelo;
        this.pulgada = pulgada;
        this.hdmi = hdmi;
        this.reparado = this.reparado;
    }

    const lg = new Monitores("lg","led","a4240",23,"si", true);
    const sony = new Monitores("sony", "lcd","z2440",27,"si", true);
    console.log(lg);
    console.log(sony);

let lista = ["reparaciones1", "reparaciones2", "stock", "reparado", false,{nombre: "emiliano", apellido: "alonso,"}];

console.log(lista);

console.log(lista.length);

for(let i = 0; i < lista.length; i ++) {
console.log(lista[i]);
}

let listaTecno = ["monitores", "pc", "notebooks", "PS", "xbox"];
listaTecno.push("repuestos");
console.log(listaTecno);


console.log(listaTecno.join(" - "));

let reparaciones = document.getElementsByClassName("reparaciones");
console.log(reparaciones);


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
    text: "Atencion rapida por WhatsApp, hace click aca!",
    destination: "https://web.whatsapp.com/",
    className: "info",
    gravity: "top",
    duration: 5000,
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

const datosPrecios = ()=>{
    fetch("./precios.json")
    .then(response => response.json())
    .then(result => console.log(result))
}
    datosPrecios()
