let piedra = document.getElementById('piedra')
let papel = document.getElementById('papel')
let tijera = document.getElementById('tijera')
let piedra2 = document.getElementById('piedra2')
let papel2 = document.getElementById('papel2')
let tijera2 = document.getElementById('tijera2')
let mostrar = document.getElementById('mostrar')

const accion = () => {
    if(piedra === piedra2){
        mostrar.innerHTML = 'Empate'
    }else if(papel === papel2){
        mostrar.innerHTML = 'Empate'
    }else if(tijera === tijera2){
        mostrar.innerHTML = 'Empate'
    }else if(piedra && tijera2){
        mostrar.innerHTML = "Gana jugador 1"
    }else if(tijera && piedra2){
        mostrar.innerHTML = "Gana jugador 2"
    }else if(piedra && papel2){
        mostrar.innerHTML = "Gana jugador 2"
    }else if(papel && piedra2){
        mostrar.innerHTML = "Gana jugador 1"
    }else if(tijera && papel2){
        mostrar.innerHTML = "Gana jugador 1"
    }else if(papel && tijera2){
        mostrar.innerHTML = "Gana jugador 2"
    }else{
        mostrarError.innerHTML = 'No entendí, vuelve a intentarlo'
    }

    card.classList.remove("desaparecer")
}

piedra.addEventListener('click', accion)
papel.addEventListener('click', accion)
tijera.addEventListener('click', accion)
piedra2.addEventListener('click', accion)
papel2.addEventListener('click', accion)
tijera2.addEventListener('click', accion)