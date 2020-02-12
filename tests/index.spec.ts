import Unfs from "../src";

describe("unfs class", () => {
  it("is a class", () => {
    expect(
      typeof Unfs === "function" && /^\s*class\s+/.test(Unfs.toString())
    ).toBeTruthy();
  });

  it("creates an object from class", () => {
    const fs = new Unfs({
      service: "memory"
    });
    expect(typeof fs).toBe("object");
  });

  it("gets the configuration", () => {
    const fs = new Unfs({
      service: "memory"
    });
    expect(fs.getSettings()).toEqual({
      service: "memory"
    });
  });

  it("updates the configuration", () => {
    const fs = new Unfs({
      service: "memory"
    });
    fs.configure({
      service: "azure",
      auth: {}
    });
    expect(fs.getSettings()).toEqual({
      service: "azure",
      auth: {}
    });
  });
});
