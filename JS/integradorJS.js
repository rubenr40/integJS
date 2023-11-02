//** Capturo el  Boton */
const btnRsm =document.getElementById('btnRsm')
//** escucho el evento click del boton
btnRsm.addEventListener("click",calcular)


//** capturo cambio de valores para blanquear importe */
const cantidad =document.getElementById('cantidad')
const categoria =document.getElementById('categoria')
cantidad.addEventListener("keyup",blanquear)
categoria.addEventListener("change",blanquear)


function calcular() {
//    debugger;
    //defino las variables que voy a utilizar
    let importe=0       // para guardar el resultado
 
    //almaceno el valor asignado que devuelve categoria
    let categoria = document.getElementById("categoria").value  
    
    // almaceno la cantidad ingresada
    let cantidad = document.getElementById("cantidad").value    
    // si no se ingreso cantidad se asume que es una sola entrada
    if (cantidad == 0) {
        cantidad=1
        document.getElementById("cantidad").value=1   // muestro que por defecto cantidad =1
    }
    //Calculo el importe total a abonar
    importe=parseInt(200* parseInt(cantidad) * (Number(categoria)/100))


    // Muestro el importe resultante
    mostrarImporte(importe)
}

function blanquear() {
    mostrarImporte(' ')
}

function mostrarImporte(valor) {
    const calculado=document.getElementById("importe")
    calculado.innerText =valor 
}