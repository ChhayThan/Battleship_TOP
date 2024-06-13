import Ship from "../ship";

const myShip = Ship(5);

describe("ship", () => {
  it("can be hit", () => {
    expect(myShip).toHaveProperty("hit");
  });

  it("has a length", () => {
    expect(myShip.length).toBe(5);
  });

  it("is sunkable", () => {
    expect(myShip).toHaveProperty("isSunk");
  });
  it("won't sink if it has not been hit", () => {
    expect(myShip.isSunk()).toBe(false);
  });
  it("won't sink if it has not been hit enough", () => {
    myShip.hit();
    myShip.hit();
    expect(myShip.isSunk()).toBe(false);
  });
  it("can be sunk when the ship's hit counter is the same as its length", () => {
    myShip.hit();
    myShip.hit();
    myShip.hit();
    expect(myShip.isSunk()).toBe(true);
  });
});
