const cloudGoogle = require("../po/task2/cluodGoogle2");
const computeEnginePage = require("../po/task2/computeEnginePage2");
describe("Pestbin service", () => {
  it("should open home page and add computeEngine", async () => {
    await cloudGoogle.open();
    await cloudGoogle.searchInCloudGoogle(
      "Google Cloud Platform Pricing Calculator",
      " Compute Engine"
    );
    await computeEnginePage.enterText(" Compute Engine", "4", "robiya@gmail.com");

    await browser.pause(5000);
  });
});
