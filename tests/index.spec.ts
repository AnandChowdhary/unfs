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

  it("throws error for unknown service", () => {
    let err: Error | undefined = undefined;
    try {
      const fs = new (Unfs as any)({
        service: "unknown"
      });
      fs.writeFile("example.txt", "Hello, world!");
    } catch (error) {
      err = error;
    }
    expect(err).toBeDefined();
  });

  it("adds file prefix", async () => {
    const fs = new Unfs({
      service: "memory",
      prefix: "prefix_"
    });
    const filePath = await fs.writeFile("example.txt", "Hello, world!");
    expect(filePath.startsWith("prefix_")).toBeTruthy();
  });

  it("adds file suffix", async () => {
    const fs = new Unfs({
      service: "memory",
      suffix: "_suffix"
    });
    const filePath = await fs.writeFile("example.txt", "Hello, world!");
    expect(filePath.endsWith("_suffix")).toBeTruthy();
  });

  it("adds file prefix and suffix", async () => {
    const fs = new Unfs({
      service: "memory",
      prefix: "prefix_",
      suffix: "_suffix"
    });
    const filePath = await fs.writeFile("example.txt", "Hello, world!");
    expect(filePath).toBe("prefix_example.txt_suffix");
  });
});
