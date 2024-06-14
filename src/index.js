import "./style.css";
import Gameboard from "./gameBoard";
import Ship from "./ship";
import Player from "./player";

const player = Player("Player");
const computer = Player("Computer");

const carrierShip = Ship(5);
const battleShip = Ship(4);
const destroyerShip = Ship(3);
const submarine = Ship(3);
const patrolBoat = Ship(2);

player.gameBoard.placeShip([0, 5], carrierShip);
player.gameBoard.placeShip([5, 0], battleShip, true);
player.gameBoard.placeShip([7, 9], destroyerShip);
player.gameBoard.placeShip([5, 7], submarine);
player.gameBoard.placeShip([9, 9], patrolBoat);

// computer.gameBoard.placeShip([9, 0], carrierShip, true);
// computer.gameBoard.placeShip([9, 9], battleShip, true);
// computer.gameBoard.placeShip([2, 7], destroyerShip);
// computer.gameBoard.placeShip([5, 7], submarine, true);
// computer.gameBoard.placeShip([1, 9], patrolBoat, true);

let playerGrid = player.gameBoard.getGrid();
let computerGrid = player.gameBoard.getGrid();

function updateGrid(playerGrid, computerGrid) {
  let playerGridDiv = document.querySelector("div#playerGrid");
  let computerGridDiv = document.querySelector("div#computerGrid");

  for (let i = 0; i < playerGrid.length; i++) {
    for (let j = 0; j < playerGrid[i].length; j++) {
      const cell = document.createElement("div");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.classList.add("cell");
      if (playerGrid[i][j] !== null && Object.hasOwn(playerGrid[i][j], "hit")) {
        cell.classList.add("ship");
      }
      playerGridDiv.appendChild(cell);
    }
  }

  for (let i = 0; i < computerGrid.length; i++) {
    for (let j = 0; j < computerGrid[i].length; j++) {
      const cell = document.createElement("div");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.classList.add("cell");
      if (computerGrid[i][j] !== "X" || computerGrid[i][j] !== "O") {
        cell.classList.add("active");
      }
      computerGridDiv.appendChild(cell);
    }
  }
}

updateGrid(playerGrid, computerGrid);
