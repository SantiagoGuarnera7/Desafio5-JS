 //mostrando el menu desde la consola
 let nav = document.getElementsByClassName("nav");
 console.log(nav[0].innerText);
 console.log(nav[1].innerText);
 console.log(nav[2].innerText);
 console.log(nav[3].innerText);
 console.log(nav[4].innerText);
 // // lista



 let total = 0;



 // parametros

 class articulos {
     constructor(id , articulo , cantidad , precio){
     this.id = id;
     this.articulo = articulo;
     this.cantidad = cantidad;
     this.precio = precio;
 }
 }

// // articulos

 const elegido = []; 

 elegido.push(new articulos (001 , "REMERA" , 3 , 1300))
 elegido.push(new articulos (002 , "PANTALON" , 4 , 2800))
 elegido.push(new articulos (003 , "SHORTS" , 5 , 900))
 elegido.push(new articulos (004 , "CAMISA" , 2, 3000))
 elegido.push(new articulos (005 , "CAMPERA" , 1 , 8000))
 elegido.push(new articulos (006 , "ZAPATILLAS" , 4 , 15000))





 let factura = document.createElement("p");
 factura.innerHTML = "<h3> Gracias por elegirnos </h3> <br> <h3> Articulos seleccionados: </h3>"
 document.body.appendChild(factura);




 let ropa = parseInt(prompt("Seleccione los productos a comprar('1', '2', '3', '4', '5', '6'): \n1-remera \n2-pantalon \n3-shorts \n4-camisa \n5-campera \n6-zapatillas \nPara finalizar, presione 0"));

 while(ropa != "0"){
     switch (ropa){
         case 1: total = total + elegido[0].precio
         alert("Añadiste a tu carrito " + elegido[0].articulo + " " + elegido[0].cantidad + " $" + elegido[0].precio)

         let prime = document.createElement("p");
         prime.innerHTML = elegido[0].articulo + " " + elegido [0].cantidad;
         document.body.appendChild(prime);
         break;

         case 2: total = total + elegido[1].precio
         alert("Añadiste a tu carrito " + elegido[1].articulo + " " + elegido[1].cantidad + " $" + elegido[1].precio);

         let sec = document.createElement("p");
         sec.innerHTML = elegido[1].articulo + " " + elegido [1].cantidad;
         document.body.appendChild(sec);
         break;

         case 3: total = total + elegido[2].precio
         alert("Añadiste a tu carrito " + elegido[2].articulo + " " + elegido[2].cantidad + " $" + elegido[2].precio);

         let third = document.createElement("p");
         third.innerHTML = elegido[2].articulo + " " + elegido [2].cantidad;
         document.body.appendChild(third);
         break;

         case 4: total = total + elegido[3].precio
         alert("Añadiste a tu carrito " + elegido[3].articulo + " " + elegido[3].cantidad + " $" + elegido[3].precio);

         let four = document.createElement("p");
         four.innerHTML = elegido[3].articulo + " " + elegido [3].cantidad;
         document.body.appendChild(four);
         break;

         case 5: total = total + elegido[4].precio
         alert("Añadiste a tu carrito " + elegido[4].articulo + " " + elegido[4].cantidad + " $" + elegido[4].precio);

         let five = document.createElement("p");
         five.innerHTML = elegido[4].articulo + " " + elegido [4].cantidad;
         document.body.appendChild(five);
         break;

         case 6: total = total + elegido[5].precio
         alert("Añadiste a tu carrito " + elegido[5].articulo + " " + elegido[5].cantidad + " $" + elegido[5].precio);


         let six = document.createElement("p");
         six.innerHTML = elegido[5].articulo + " " + elegido [5].cantidad;
         document.body.appendChild(six);
         break;

         default: alert("Lo sentimos, no tenemos este producto intente nuevamente");
     }
     ropa = parseInt(prompt("Seleccione los productos a comprar('1', '2', '3', '4', '5', '6'): \n1-remera \n2-pantalon \n3-shorts \n4-camisa \n5-campera \n6-zapatillas \nPara finalizar, presione 0"));
 }





 let factura1 = document.getElementById('total');
 factura1.innerHTML = "<h2 class = text > El total de su compra es: </h2>" + "$" + total;
 document.body.appendChild(factura1);











// carrusel


let textoShow = document.querySelector("#textoShow");

function gliderMobileFunction (div, description) {
    switch (div){
        case 1:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#1713ef';
            document.getElementById('buttonDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 2:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonDos').style.backgroundColor = '#1713ef';
            document.getElementById('buttonTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 3:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonTres').style.backgroundColor = '#1713ef';
            document.getElementById('buttonCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 4:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonCuatro').style.backgroundColor = '#1713ef';
            break;
        default:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#F6007C';
            document.getElementById('buttonDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonCuatro').style.backgroundColor = '#b9b9b9';
            break;

    }

}

// formulario

function recogeDatos (evento) {
    evento.preventDefault ();

    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;
    let anos = 2022 - edad;
    let bienvenida = document.querySelector("#bienvenida");
    let mensajeEdad;
    let mensaje;

    if (anos < 18) {
        mensajeEdad = "No podes comprar!";
    } else if (anos >= 18) {
        mensajeEdad = "Ya podes comprar!";
    }

    mensaje = "Hola " + nombre + " tenés " + anos + " años. " + mensajeEdad;
    
    bienvenida.textContent = mensaje;

}



let miForm = document.querySelector("#formulario");
miForm.addEventListener("submit", recogeDatos);


let contenedor = document.getElementById("contenedor");
    let formu = document.getElementById("formu");
    formu.addEventListener("submit", (e)=> {
        e.preventDefault();
        let inputs = e.target.children;

        if(!inputs [0].value.includes("@")){
            contenedor.innerHTML= "";
            let div = document.createElement("div");
            div.innerHTML = "Correo inválido";
            div.className = "rojo";
            contenedor.append(div);
        }else{
            contenedor.innerHTML= "";
        }
});
