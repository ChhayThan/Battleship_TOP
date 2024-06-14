import Gameboard from "./gameBoard";

export default function Player(name, playerTurn = false) {
  let gameBoard = Gameboard();
  let turn = playerTurn;

  function changeTurn() {
    turn = !turn;
    return turn;
  }
  function getTurn() {
    return turn;
  }
  return {
    name,
    gameBoard,
    changeTurn,
    getTurn,
  };
}
