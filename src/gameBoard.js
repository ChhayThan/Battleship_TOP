export default function Gameboard() {
  let grid = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ];

  let fleet = [];

  function placeShip(coordinates, ship, vertical = false) {
    fleet.push(ship);

    for (let i = 0; i < ship.length; i++) {
      if (vertical) {
        grid[coordinates[0] - i][coordinates[1]] = ship;
      } else {
        grid[coordinates[0]][coordinates[1] - i] = ship;
      }
    }
  }

  function getCoordinate(coordinates) {
    return grid[coordinates[0]][coordinates[1]];
  }

  function receiveAttack(coordinates) {
    let gridElement = getCoordinate([coordinates[0], coordinates[1]]);
    if (gridElement === null) {
      grid[coordinates[0]][coordinates[1]] = "O";
      return false;
    } else if (Object.hasOwn(gridElement, "hit")) {
      grid[coordinates[0]][coordinates[1]] = "X";
      let ship = gridElement;
      ship.hit();

      return true;
    }
  }

  function checkFleetStatus() {
    for (let i = 0; i < fleet.length; i++) {
      if (!fleet[i].isSunk()) {
        return false;
      }
    }
    return true;
  }

  function resetBoard() {
    grid = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];

    fleet = [];
  }

  return {
    placeShip,
    getCoordinate,
    checkFleetStatus,
    receiveAttack,
    resetBoard,
  };
}
