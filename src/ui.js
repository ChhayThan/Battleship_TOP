import Ship from "./ship";
import Player from "./player";

export default function userInterface() {
  const player = Player("Player", true);
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

  computer.gameBoard.placeShip([9, 0], carrierShip, true);
  computer.gameBoard.placeShip([9, 9], battleShip, true);
  computer.gameBoard.placeShip([2, 7], destroyerShip);
  computer.gameBoard.placeShip([5, 7], submarine, true);
  computer.gameBoard.placeShip([1, 9], patrolBoat, true);

  function renderGrid(playerGrid, computerGrid) {
    let playerGridDiv = document.querySelector("div#playerGrid");
    playerGridDiv.innerHTML = "";
    let computerGridDiv = document.querySelector("div#computerGrid");
    computerGridDiv.innerHTML = "";

    for (let i = 0; i < playerGrid.length; i++) {
      for (let j = 0; j < playerGrid[i].length; j++) {
        const cell = document.createElement("div");
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.classList.add("cell");
        if (playerGrid[i][j] === "X") {
          cell.classList.remove("active");
          cell.classList.add("hit");
        } else if (playerGrid[i][j] === "O") {
          cell.classList.remove("active");
          cell.classList.add("miss");
        }
        if (
          playerGrid[i][j] !== null &&
          Object.hasOwn(playerGrid[i][j], "hit")
        ) {
          cell.classList.add("ship");
        }
        if (
          computer.getTurn() &&
          (playerGrid[i][j] !== "X" || playerGrid[i][j] !== "O")
        ) {
          if (
            !(cell.classList.contains("miss") || cell.classList.contains("hit"))
          ) {
            cell.classList.add("computerChoice");
          }
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
        if (
          player.getTurn() &&
          (computerGrid[i][j] !== "X" || computerGrid[i][j] !== "O")
        ) {
          cell.classList.add("active");
        }
        if (computerGrid[i][j] === "X") {
          cell.classList.remove("active");
          cell.classList.add("hit");
        } else if (computerGrid[i][j] === "O") {
          cell.classList.remove("active");
          cell.classList.add("miss");
        }
        computerGridDiv.appendChild(cell);
      }
    }
  }

  function switchTurns(player1, player2) {
    // Player 1 is the real player
    player1.changeTurn();
    player2.changeTurn();

    if (!player1.getTurn()) {
      const activeCells = document.querySelectorAll("div.cell.active");
      activeCells.forEach((cell) => {
        if (cell.classList.contains("active")) {
          cell.classList.remove("active");
        }
      });
    }
    if (!player2.getTurn()) {
      const computerChoiceCells = document.querySelectorAll(
        "div.cell.computerChoice"
      );
      computerChoiceCells.forEach((cell) => {
        if (cell.classList.contains("computerChoice")) {
          cell.classList.remove("computerChoice");
        }
      });
    }
  }

  function addEventListeners(player, computer) {
    const activeCells = document.querySelectorAll("div.cell.active");

    activeCells.forEach((cell) => {
      cell.addEventListener(
        "click",
        () => {
          const coordinates = [cell.dataset.row, cell.dataset.col];
          placePlayerMark(coordinates);
          placeComputerMark();
          addEventListeners(player, computer);
        },
        { once: true }
      );
    });
  }

  function placeComputerMark() {
    const computerChoices = document.querySelectorAll(
      "div#playerGrid > div.cell.computerChoice"
    );
    let choice = Math.floor(Math.random() * (computerChoices.length - 1));
    let selectedCell = computerChoices[choice];
    let coordinates = [selectedCell.dataset.row, selectedCell.dataset.col];
    player.gameBoard.receiveAttack(coordinates);
    switchTurns(player, computer);
    renderGrid(player.gameBoard.getGrid(), computer.gameBoard.getGrid());

    if (
      player.gameBoard.checkFleetStatus() ||
      computer.gameBoard.checkFleetStatus()
    ) {
      endGame();
    }
  }

  function placePlayerMark(coordinates) {
    computer.gameBoard.receiveAttack(coordinates);
    switchTurns(player, computer);
    renderGrid(player.gameBoard.getGrid(), computer.gameBoard.getGrid());
  }

  function initializeGame() {
    renderGrid(player.gameBoard.getGrid(), computer.gameBoard.getGrid());
    addEventListeners(player, computer);
  }

  function endGame(winner) {
    const activeGridCells = document.querySelectorAll("div.cell.active");
    activeGridCells.forEach((cell) => {
      cell.classList.remove("active");
    });

    const message = document.querySelector("div.message h1");
    message.innerText = `${player.name} is the winner!`;
  }

  return {
    initializeGame,
  };
}
