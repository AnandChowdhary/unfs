import Unfs from "../../src";

describe("Local", () => {
  it("creates a local object", () => {
    const fs = new Unfs({
      service: "local",
      directory: "../.cache/example"
    });
    expect(typeof fs).toBe("object");
  });
});
