import Unfs from "../../src";

describe("Azure", () => {
  it("creates an Azure", () => {
    const fs = new Unfs({
      service: "azure",
      auth: {}
    });
    expect(typeof fs).toBe("object");
  });
});
