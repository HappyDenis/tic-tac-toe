const pleer1 = "x";
const pleer2 = "o";
const nextPleer = {
  [pleer1]: pleer2,
  [pleer2]: pleer1,
};

class TicTacToe {
  constructor() {
    this.currentPlayer = pleer1;
    //игровое поле
    this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  //should return x or o
  getCurrentPlayerSymbol() {
    //console.log ('currentPlayer:::',this.currentPlayer);
    return this.currentPlayer;
  }
  //след.ход - should properly update class state (change current player, update marks storage etc.)
  nextTurn(rowIndex, columnIndex) {
    if (this.gameField[rowIndex][columnIndex] != null) {
      return;
    }
    this.gameField[rowIndex][columnIndex] = this.currentPlayer;
    this.currentPlayer = nextPleer[this.currentPlayer]; // this.currentPlayer == 'x'? 'o' : 'x';
  }

  //should return true if game is finished (e.g. there is a winner or it is a draw)
  isFinished() {
    return !!this.getWinner() || this.noMoreTurns();
  }

  //should return winner symbol (x or o) or null if there is no winner yet
  getWinner() {
    for (let i = 0; i < 3; i++) {
      if (
        this.gameField[i][0] === this.gameField[i][1] &&
        this.gameField[i][0] === this.gameField[i][2]
      )
        return this.gameField[i][0];
      if (
        this.gameField[0][i] === this.gameField[1][i] &&
        this.gameField[0][i] === this.gameField[2][i]
      )
        return this.gameField[0][i];
      if (
        this.gameField[0][0] === this.gameField[1][1] &&
        this.gameField[0][0] === this.gameField[2][2]
      )
        return this.gameField[0][0];
      if (
        this.gameField[2][0] === this.gameField[1][1] &&
        this.gameField[2][0] === this.gameField[0][2]
      )
        return this.gameField[2][0];
    }
    return null;
  }

  //should return true if there is no more fields to place a x or o
  noMoreTurns() {
    return this.gameField.every((row) => row.every((col) => col));
  }

  //should return true if there is no more turns and no winner
  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  //should return matrix[row][col] value (if any) or null
  getFieldValue(rowIndex, colIndex) {
    return this.gameField[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
