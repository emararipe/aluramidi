// ----- MANEIRA INADEQUADA -----
// function tocaSomPom () {
//     document.querySelector("#som_tecla_pom").play()
// }
// document.querySelector(".tecla_pom").onclick = tocaSomPom

// ------ FUNÇÃO PARA TOCAR O SOM ------

const listaDeTeclas = document.querySelectorAll(".tecla")

function tocaSom(idElementoAudio) {
  let elemento = document.querySelector(idElementoAudio)
  elemento.play()
}  

for(let contador = 0; contador<listaDeTeclas.length; contador++){
  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1]
  
  tecla.onclick = () => tocaSom(`#som_${instrumento}`)

}


