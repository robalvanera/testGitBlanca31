//alert('Hola!') – Para saber si está bien linkeado mi archivo js.

// //valor numérico
// let numerico = 10
// //string
// let  texto = 'Hola mundo'
// //booleanos
// let booleano = true
// let booleano2 = false
// //arreglos
// let arreglo =  []
// //objetos
// let objeto = {}
// //constantes
// const perro = 'salchicha'

//OPERACIONES ARITMÉTICAS
// + - / * %

//SUMA
// let num1 = 10
// let num2 = 50

// num1 + num2

// //console.log(num1 + num2)
// //console.log('SÍ SE PUEDE VER')

// let nombre = 'Rodrigo'
// let saludo = 'Hola'

// //console.log(saludo + ' ' + nombre)

// let resultado = num1 + num2

//console.log(resultado)

//let  ingresa = prompt('Ingresa tu nombre')

//console.log(ingresa)

//Challenge preguntar al usuario su nombre, cumpleaños y su correo y mostrarlo en 3 consolas diferentes

// let  nom = prompt('Ingresa tu nombre')

// console.log(nom)

// let  fecha = prompt('Ingresa tu fecha de nacimiento')

// console.log(fecha)

// let  correo = prompt('Ingresa tu correo electrónico')

// console.log(correo)

//Preguntar al usuario su año de nacimiento y mostrar su edad

// let año = prompt('Ingresa el año de tu nacimiento')

// console.log(2019 - año)

// let nacimiento = prompt('Ingresa el año de tu nacimiento')

//     Number(nacimiento)

// let edad = 2019 - nacimiento

// console.log(edad)

//VARIABLES DE TIPO ARREGLO

// let arreglo = ['perrito', 'tortuga', 'hipopotamo']

// let persona = ['Rodrigo', 'robalvanera@gmail.com', '2221864088']

// console.log(persona)

// console.log(persona[1])

//Challenge: Crear un arreglo de 10 elementos y ver en la consola el 5 y el 9

// let estados = ['Puebla', 'Querétaro', 'Guerrero', 'Oaxaca', 'Colima', 'Veracruz', 'Coahuila', 'Sonora', 'Tlaxcala', 'Guanajuato']

// estados[9] = 'Aguascalientes'

// estados.push('Chiapas', 'Yucatán')



// console.log(estados)

//Challenge: borrar el último y agregar otros 3



// let arreglo = ['perrito', 'tortuga', 'hipopotamo']

// arreglo[3] = 'salchicha'

// arreglo.push('pajarito') añadir elemento(s)

// arreglo.pop() borrar elemento(s)
// // console.log(arreglo)

// let numeros = [1,2,3,4,5,6,7,8,9,10]

// console.log(numeros)

// numeros.splice(5,1)

// console.log(numeros)

//VARIABLE DE TIPO OBJETO – Para bases de datos

// let objeto = {
//     nombre: 'Rodrigo',
//     dirección: 'Rosario',
//     música: 'pop',
//     teléfono: '2221864088',
//     libros: ['La biblia', 'El corán'],
//     películas: {
//         terror: 'Anabelle',
//         acción: ['Ballena', 'Manatí']
//     }
// }
// console.log(objeto.libros[1])
// console.log(objeto.dirección)
// console.log(objeto.películas.acción[0])

//Challenge crear un objeto(persona) que tenga (nombre, dirección, correo, teléfono, viajes{internacionales[lugares] y nacionales[lugares]}, música [géneros], películas [géneros[películas]]}) 
//Consola película - género - última
//Consola internacionales - último
//Consola música - último

let persona = {
    nombre: 'Rodrigo',
    direccion: 'Cuajimalpa',
    correo: 'robalvanera@gmail.com',
    telefono: '2221864088',
    viajes: {
        nacionales: ['Puebla', 'San Miguel de Allende', 'Monterrey', 'Acapulco'],
        internacionales: ['Los Ángeles', 'Panamá', 'Nueva York', 'Lyon'],
    },
    musica: ['Pop', 'Rock', 'Mariachi', 'Jazz'],
    peliculas: {
        accion: ['James Bond', 'Duro de matar', 'Misión Imposible'],
        terror: ['Anabelle', 'El exorcista', '666'],
        comedia: ['Nosotros los nobles', 'Mirreyes vs Godínez', 'Hangover'],
    }
}
console.log(persona.peliculas.accion[2])
console.log(persona.viajes.internacionales[3])
console.log(persona.musica[3])






