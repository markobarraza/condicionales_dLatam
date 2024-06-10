

let boton = document.querySelector(".verificar")

boton.addEventListener ('click', () =>{
    let numero1 = document.querySelector("#numero1").value
    let numero2 = document.querySelector("#numero2").value
    let numero3 = document.querySelector("#numero3").value

    let clave = numero1 + numero2 + numero3
    console.log(clave)

    let texto = document.querySelector(".texto")

    if (clave == 911) {
        texto.innerHTML = "password 1 es correcto"
    } else if (clave == 714) {
        texto.innerHTML = "password 2 es correcto"
    } else {
        texto.innerHTML = "password incorrecto"
    }
})