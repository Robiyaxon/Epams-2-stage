const cloudGoogle = require("../po/task1/cloudGoogle");
const computeEnginePage = require("../po/task1/compyuterEnginePage");
describe("Google Cloud task 1", () => {
  it("should open home page and add computeEngine", async () => {
    await cloudGoogle.open();
    await cloudGoogle.searchInCloudGoogle(
      "Google Cloud Platform Pricing Calculator",
      " Compute Engine"
    );
    await computeEnginePage.enterText(" Compute Engine", "4");

    await browser.pause(5000);
  });
});