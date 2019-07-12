// // document hace referencia a mi archivo html y lo jalo con getElementById
// let h1 = document.getElementById('etiqueta')
// let texto = document.getElementById('texto')
// let input = document.getElementById('input')
// let boton = document.getElementById('boton')
// let mostrar = document.getElementById('mostrar')
// // console.log(texto)
// // console.log(etiqueta)
// // console.log(input)

// // innerHTML pinta el nuevo valor en mi archivo html
// // etiqueta.innerHTML = 'Es un nuevo saludo'
// // texto.innerHTML = 'Es un nuevo texto'

// const cambiar = () =>{

//     etiqueta.innerHTML = 'Es un nuevo saludo'
//     texto.innerHTML = 'Es un nuevo texto'

// }

// const mostrarInput = () =>{

//     let texto = input.value

//     mostrar.innerHTML = texto

// }

// boton.addEventListener('click', mostrarInput)
// boton.addEventListener("click",cambiar)

let inputNombre = document.getElementById('inputNombre')
let inputTelefono = document.getElementById('inputTelefono')
let inputPizza = document.getElementById('inputPizza')
let mostrarNombre = document.getElementById('nombre')
let mostrarTelefono = document.getElementById('telefono')
let mostrarPizza = document.getElementById('pizza')
let boton = document.getElementById('boton')
let card = document.getElementById('card')

const accion = () =>{

    let textoNombre = inputNombre.value
    let textoTelefono = inputTelefono.value
    let textoPizza = inputPizza.value
    let textoMayus = textoPizza.toUpperCase()
   
    if(textoMayus === 'SI'){
        mostrarPizza.innerHTML = ':)'
    }else if(textoMayus === "NO"){
        mostrarPizza.innerHTML = ':('
    }else{
        mostrarPizza.innerHTML = 'Eso no es lo que te pedí'
    }

    //aparecer la card
    card.classList.remove("desaparecer")

    mostrarNombre.innerHTML = textoNombre
    mostrarTelefono.innerHTML = textoTelefono
    //mostrarPizza.innerHTML = textoPizza
}

boton.addEventListener('click', accion)