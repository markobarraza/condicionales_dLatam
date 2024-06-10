// Ejercicio 1
let imagen = document.querySelector(".img_cyclop")
let interruptor = false


imagen.addEventListener ('click', ()=>{

    if (interruptor == false) {
        imagen.style.border = "8px solid red"
        interruptor = true
    } else {
        imagen.style.border = ""
        interruptor = false
    }
})

