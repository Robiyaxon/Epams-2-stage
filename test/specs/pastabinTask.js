const pastebinPage = require("../po/pastabinPage.js");
describe("Pestbin service", () => {
  it("should open home page", async () => {
    await pastebinPage.open();
    await pastebinPage.addPastaBinPage("Hello from WebDriver", "helloweb");
    await browser.pause(5000);
  });
});
