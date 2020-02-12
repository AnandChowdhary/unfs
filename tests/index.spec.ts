import Unfs from "../src";

describe("unfs class", () => {
  it("is a class", () => {
    expect(
      typeof Unfs === "function" && /^\s*class\s+/.test(Unfs.toString())
    ).toBeTruthy();
  });

  it("creates an object from class", () => {
    const fs = new Unfs({
      service: "aws-s3",
      bucket: "example",
      auth: {}
    });
    expect(typeof fs).toBe("object");
  });

  it("gets the configuration", () => {
    const fs = new Unfs({
      service: "aws-s3",
      bucket: "example",
      auth: {}
    });
    expect(fs.getSettings()).toEqual({
      service: "aws-s3",
      bucket: "example",
      auth: {}
    });
  });

  it("updates the configuration", () => {
    const fs = new Unfs({
      service: "aws-s3",
      bucket: "example",
      auth: {}
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
