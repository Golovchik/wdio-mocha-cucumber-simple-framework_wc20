const { expect, assert } = require("chai");
const { sendRequest } = require("../../support/api/api.helper");
const { validateSchemaByName } = require("../../support/api/checkSchema");
const { iThrowError } = require("../../support/api/errHandleFuncs");

describe("API Test Suite", () => {
  const petId = 5;

  it("should get pet by id", async () => {
    const response = await sendRequest("get", `pet/${petId}`);
    const validDataSchema = validateSchemaByName("pet", response.data);
    if (!validDataSchema)
      assert.throws(iThrowError("Invalid schema"), Error, "Invalid schema");

    const stringifiedResponse = JSON.stringify(response.data);

    const mocked = {
      id: 5,
      category: {
        id: 0,
        name: "string",
      },
      name: "doggie",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "string",
    };

    const stringifyMocked = JSON.stringify(mocked);

    expect(stringifiedResponse).to.equal(stringifyMocked);
  });
});
