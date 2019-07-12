// // //if(condicion){
// //     bloque de código en caso de que se cumpla la condición
// // //}else{
//     bloque de código en caso de que Notelist cumpla la condición
// // }

// if(condicion){
//     console.log(':D')
// }else{
//     console.log(':C')
// }

// < > ===

// if('computadora' === 'Computadora'){
//     console.log('Son idénticos')
// }else{
//     console.log('Algo anda mal')
// }

// if('computadora' === 'computadora'){
//     console.log('Son idénticos')
// }else{
//     console.log('Algo anda mal')
// }

//Challenge preguntar su edad, si lo es entras a bar, si no lo es llama a sus papás

// let  edad = prompt('Ingresa tu edad')

// Number(edad)

// if(edad >= 18){
//     console.log('Bienvenida/o al bar')
//     }else{
//      console.log('Llama a tus papás')
//     }

//&& (and) y || (or)

// let edad = prompt('Ingresa tu edad')

// if(edad < 16){
//     console.log('No puedes conducir)
// }else if(edad >= 16 || edad === 17){
//     console.log('Puedes sacar tu permiso')
// }else{
//     console.log('Puedes sacar tu licencia')
// }

//Challenge: si mi número es par : Escribir en la consola 'Número' es par. Si mi número es impar : escribir en la consola 'Número' es impar.

// let num = prompt('Ingresa un número')

// if(num % 2 === 0){
//     console.log(num +' es par')
// }else{
//     console.log(num +' es impar')
// }

//Challenge PIEDRA PAPEL O TIJERA

let player1 = prompt('player1 elige: piedra, papel o tijera')
let player2 = prompt('player2 elige: piedra, papel o tijera')

if(player1 === player2){
    console.log('Empate')
}else if(player1 === 'piedra' && player2 === 'tijera'){
    console.log('Gana player1')
}else if(player1 === 'tijera' && player2 === 'piedra'){
    console.log('Gana player2')
}else if(player1 === 'piedra' && player2 === 'papel'){
    console.log('Gana player2')
}else if(player1 === 'papel' && player2 === 'piedra'){
    console.log('Gana player1')
}else if(player1 === 'tijera' && player2 === 'papel'){
    console.log('Gana player1')
}else if(player1 === 'papel' && player2 === 'tijera'){
    console.log('Gana player2')
}else{
    console.log('No entendí, vuelve a intentarlo')
}