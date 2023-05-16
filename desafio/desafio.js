const listaTeclas = document.querySelectorAll("input[type=button]")
const visorFone = document.querySelector("input[type=tel]")

digitarNum = (tecla) => {
 tecla.onclick = () => visorFone.value += tecla.value

 tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}

listaTeclas.forEach(digitarNum) 


//--------- OUTRA OPÇÂO ---------

//https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener

//--------- SOLUÇÃO ANTERIOR ---------

// const listaTeclas = document.querySelectorAll("input[type=button]")
// const visorFone = document.querySelector("input[type=tel]")

// for (let contador = 0; contador < listaTeclas.length; contador++) {
//   const tecla = listaTeclas[contador]

//   digitarNum = (num) => {
//     visorFone.value += tecla.value
//   }

//   tecla.onclick = digitarNum(valor)
// }

//------------------------------------

// const visorFone = document.querySelector("input[type=tel]")

// const listaTeclas = document.querySelectorAll("input[type=button]")

// let txt = ""

// function digitarNum(num) {
//     txt = txt + num
//     visorFone.value = txt
//     console.log(txt)
// }

// for (let contador = 0; contador < listaTeclas.length; contador++) {
//     const tecla = listaTeclas[contador]
//     const valor = tecla.value
//     tecla.onclick = function () {
//         digitarNum(valor)
//     }
// }
