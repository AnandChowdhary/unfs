import Unfs from "../../src";

describe("AWS S3", () => {
  it("creates an AWS S3", () => {
    const fs = new Unfs({
      service: "aws-s3",
      bucket: "example",
      auth: {}
    });
    expect(typeof fs).toBe("object");
  });
});
