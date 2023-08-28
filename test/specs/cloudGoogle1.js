const cloudGoogle = require("../po/task1/cluodGoogle1");
const computeEnginePage = require("../po/task1/computeEnginePage1");
describe("Pestbin service", () => {
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