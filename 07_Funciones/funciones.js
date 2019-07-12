// FUNCIONES

// function suma (a,b){
//     console.log(a + b)
// }
// suma(5,6)

// suma(5,3)

// function resta (a,b){
//     return a - b
// }

// console.log(resta(10,4))
// console.log(resta(resta(50,20),4)

//Challenge función que me diga el área de un cuadrado.

// function area(b,a){
//     return b * a
// }

// console.log(area(10,5))
// console.log(area(9,120))


// const areaC = (a) =>{ //flechita muy importante para definir que es una function
//     return a*a
// }

// console.log(areaC(5))

// Function que sume mis parámetros a y b, reste c y d y lo multiplique por e

// function operacion(a,b,c,d,e){
//          return (a+b-c-d) * e
//      }

//      console.log(operacion(10,9,8,7,6))

//      function operacion2(a,b,c,d,e){
//         return ((a+b)-(c-d)) * e
//     }

//     console.log(operacion2(10,9,8,7,6))


// CHALLENGE LOG IN
// let contrasena = prompt('Ingresa tu contraseña')

// function comparar(a){
//     if(a === 'gatitos13'){
//         console.log('Bienvenido')
//     }else{
//         console.log('Contraseña incorrecta, vuelve a intentarlo')
//     }
// }

// comparar(contrasena)

// FORMAS CORRECTA DE HACER EL LOGIN:
// let usuario = prompt("Ingresa tu contraseña")
// const password = "gatitos13"

// const login = (a,b) => {
    
//     if(a === b){
//         console.log("Bienvenido")
//     }else{
//         console.log("Contraseña incorrecta")
//     }
// }

// login(usuario, password)

const login = () => {
    let user = prompt('Ingresa tu contraseña')
    const password = "gatitos13"
    if(user === password){
        console.log("Bienvenido")
    }else{
        console.log("Contraseña incorrecta")
    }
}

login()

