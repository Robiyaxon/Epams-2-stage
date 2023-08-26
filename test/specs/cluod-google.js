const cloudGoogle = require("../po/cluodGoogle");
const computeEnginePage = require("../po/computeEnginePage");
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
