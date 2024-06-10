// Ejercicio 2
let boton = document.querySelector(".boton_verificar")
// let sticker1 = 2
// let sticker2 = 2
// let sticker3 = 2





boton.addEventListener ('click', () =>{
    let sticker1 = parseInt(document.querySelector("#sticker1").value)
    let sticker2 = parseInt(document.querySelector("#sticker2").value)
    let sticker3 = parseInt(document.querySelector("#sticker3").value)
    let total = (sticker1+sticker2+sticker3)

    let parrafo = document.querySelector(".parrafo")
    let advertencia = document.querySelector(".texto_advertencia")

    if (total > 10) {
        parrafo.innerHTML = total
        parrafo.style.color = "red"
        advertencia.innerHTML = "llevas demasiados stickers"
        advertencia.style.color = "red"
        advertencia.style.display = "inline"
        
    }else{
        parrafo.innerHTML = total
        parrafo.style.color = "green"
        advertencia.style.display = "none"

    }


})