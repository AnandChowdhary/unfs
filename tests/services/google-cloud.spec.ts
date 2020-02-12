import Unfs from "../../src";

describe("Google Cloud", () => {
  it("creates an Google Cloud", () => {
    const fs = new Unfs({
      service: "google-cloud",
      auth: {}
    });
    expect(typeof fs).toBe("object");
  });
});
