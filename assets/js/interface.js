//quando documento for carregado executa a função
document.addEventListener('DOMContentLoaded', () => {
  //pega todos os squares e envia para squares
  let squares = document.querySelectorAll('.square')

  squares.forEach(square => {
    //quando ter um click em um square, executa a função
    square.addEventListener('click', handleClick)
  })
})

function handleClick(event) {
  console.log(event.target)

  //pega o square que foi clicado
  let square = event.target
  //transfere o id do square clicado
  let position = square.id

  console.log(position)
  //chama função enviando a posição id
  if (handleMove(position)) {
    setTimeout(() => {
      alert('O jogo acabou - O vencedor foi ' + playerTime)
    }, 15)
  }

  //chama funcao atualizar square
  updateSquare()
}

function updateSquare() {
  //varre todos os squares
  let squares = document.querySelectorAll('.square')

  squares.forEach(square => {
    //pega a posição e o symbolo
    let postion = square.id
    let symbol = board[postion]

    //se o simbolo o espaco estiver vazio entao envia uma class no htm na posição
    if (symbol != '') {
      square.innerHTML = `<div class='${symbol}'></div>`
    }
  })
}
