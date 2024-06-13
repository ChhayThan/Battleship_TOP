import Gameboard from "../gameBoard";
import Ship from "../ship";

let myGameboard = Gameboard();

describe("gameboard", () => {
  it("can place ships on grid", () => {
    expect(myGameboard).toHaveProperty("placeShip");
    let cruiseShip = Ship(5);
    myGameboard.placeShip([0, 6], cruiseShip);
    expect(myGameboard.getCoordinate([0, 6])).toEqual(cruiseShip);
    expect(myGameboard.getCoordinate([0, 5])).toEqual(cruiseShip);
    expect(myGameboard.getCoordinate([0, 4])).toEqual(cruiseShip);
    expect(myGameboard.getCoordinate([0, 3])).toEqual(cruiseShip);
    expect(myGameboard.getCoordinate([0, 2])).toEqual(cruiseShip);
    expect(myGameboard.getCoordinate([0, 1])).toBeNull();
  });

  it("has a receiveAttack function", () => {
    expect(myGameboard).toHaveProperty("receiveAttack");
  });
  it("can determine whether or not the attack hit a ship, and then sends the 'hit' function to the correct ship", () => {
    myGameboard.receiveAttack([0, 6]);
    expect(myGameboard.getCoordinate([0, 6])).toEqual("X");
  });
  it("records the coordinates of missed shots", () => {
    myGameboard.receiveAttack([0, 1]);
    expect(myGameboard.getCoordinate([0, 1])).toEqual("O");
  });

  it("reports wether its fleet of ships have all been sunk", () => {
    expect(myGameboard).toHaveProperty("checkFleetStatus");
    expect(myGameboard.checkFleetStatus()).toBe(false);
    myGameboard.receiveAttack([0, 5]);
    myGameboard.receiveAttack([0, 4]);
    myGameboard.receiveAttack([0, 3]);
    myGameboard.receiveAttack([0, 2]);
    expect(myGameboard.checkFleetStatus()).toBe(true);

    let destroyerShip = Ship(8);
    myGameboard.placeShip([2, 9], destroyerShip);
    expect(myGameboard.checkFleetStatus()).toBe(false);
  });
});
