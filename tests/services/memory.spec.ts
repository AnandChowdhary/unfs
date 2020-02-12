import Unfs from "../../src";

describe("Memory", () => {
  it("creates a memory object", () => {
    const fs = new Unfs({
      service: "memory"
    });
    expect(typeof fs).toBe("object");
  });

  it("writes and reads a file", async () => {
    const fs = new Unfs({
      service: "memory"
    });
    await fs.writeFile("example.txt", "Hello, world!");
    const file = await fs.readFile("example.txt");
    expect(file).toBe("Hello, world!");
  });

  it("throws error for unknown service", async () => {
    let err: Error | undefined = undefined;
    try {
      const fs = new Unfs({
        service: "memory"
      });
      const text = await fs.readFile("unknown.txt");
    } catch (error) {
      err = error;
    }
    expect(err).toBeDefined();
  });
});
