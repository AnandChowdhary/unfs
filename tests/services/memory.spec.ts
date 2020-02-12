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
});
