import Gameboard from "./gameBoard";

export default function Player(name) {
  let gameBoard = Gameboard();
  return {
    name,
    gameBoard,
  };
}
