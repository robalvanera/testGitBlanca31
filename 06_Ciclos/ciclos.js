// 2 diferentes ciclos for y while

// for(inicio ; final o limite; secuencia){
//     bloque de código
// }

// let i = 0

// for(i ; i<=100; i = i + 1 ){
//     console.log(i)
// }

// for(let e = 10; e <= 50; e = e + 5){
//     console.log(e)
// }

//Challenge: hacer un ciclo que empiece en 3, llegue a 500 y sea de 9 en 9
//Otro que empiece en -100, llegue a 0 y sea de 1 en 1
//Otro que empiece en 500, llegue a 2000 y sea de 100 en 100

// for(let n = 3; n <= 500; n = n + 9){
//     console.log(n)
// }
// for(let j = -100; j <= 0; j = j + 1){
//     console.log(j)
// }
// for(let y = 500; y <= 2000; y = y + 100){
//     console.log(y)
// }

// let w = Number(prompt('Elige un número'))

// for(let x = 0; x <=100; x = x + w){
//     console.log(x)
// }

//Challenge: Ciclo FOR con condicionales

// let i = 0

// for(i ; i<=100; i = i + 1 ){
//     if(i % 2 === 0){
//         console.log(i +' es par')
//     }else{
//         console.log(i +' es impar')
//     }
// }

// Challenge: 0 - 100 



// for(let i = 1; i <= 100; i = i + 1){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i +' FizzBuzz')
//     }else if(i % 5 === 0){
//         console.log(i +' Buzz')
//     }else if(i % 3 === 0){
//         console.log(i +' Fizz')
//     }else{
//         console.log(i)
//     }
// }

// let array = ['a','b','c','d','e','f','g','h','i','j']

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

//Challenge TABLAS DE MULTIPLICAR ciclo for dentro de otro ciclo for

// for(let i = 1; i <= 10; i++){
//     for(let y = 1; y <= 10; y++){
//         console.log(i+' x '+y+' = '+i * y)
//     }
// }

// Challenge FACTORIAL

let num = 1

for(let i = 1; i <= 10; i++){
    console.log(num = num * i)
}