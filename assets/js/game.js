// iniciar variaveis
let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let gameOver = false
let symbols = ['o', 'x']

function handleMove(position) {
  if (gameOver) {
    return
  }

  if (board[position] == '') {
    //pega a posição no array, com a variavel que vem do id clicado
    //e coloca o simbolo do jogador da vez atual
    board[position] = symbols[playerTime]

    //verifica vencedor
    gameOver = isWin()

    //troca de jogador
    if (gameOver == false) {
      if (playerTime == 0) {
        playerTime = 1
      } else {
        playerTime = 0
      }
    }
  }
  return gameOver
}

function isWin() {
  //variavel com consições de vitoria
  let winStates = [
    [0, 1, 2],
    [3, 4, 6],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  //varre todas as condições do array
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i]

    //separa cada item da sequencia de vitoria do array
    let pos1 = seq[0]
    let pos2 = seq[1]
    let pos3 = seq[2]

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ''
    ) {
      return true
    }
  }
  return false
}
