import Player from "../player";

let player = Player("Eric");

describe("player", () => {
  it("has a name", () => {
    expect(player.name).toMatch("Eric");
  });
  it("has its own gameboard", () => {
    expect(player).toHaveProperty("gameBoard");
  });
});
