const pastebinPage = require("../po/pastabinTask");
describe("Pestbin service", () => {
  it("should open home page", async () => {
    await pastebinPage.open();
    await pastebinPage.addnewPaste("Hello from WebDriver", "helloweb");
  });
});