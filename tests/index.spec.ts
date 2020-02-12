import Unfs from "../src";

describe("unfs class", () => {
  it("is a class", () => {
    expect(
      typeof Unfs === "function" && /^\s*class\s+/.test(Unfs.toString())
    ).toBeTruthy();
  });
});
