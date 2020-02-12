import Unfs from "../../src";

describe("Firebase Cloud", () => {
  it("creates an Firebase Cloud", () => {
    const fs = new Unfs({
      service: "firebase-cloud",
      auth: {}
    });
    expect(typeof fs).toBe("object");
  });
});
