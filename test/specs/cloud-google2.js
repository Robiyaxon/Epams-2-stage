const cloudGoogle = require("../po/task2/cloudGoogle2")
const computeEnginePage2 = require("../po/task2/computeEnginePage2");
describe("Google Cloud task2", () => {
  it("task2", async () => {
    await cloudGoogle.open();
    await cloudGoogle.searchInCloudGoogle(
      "Google Cloud Platform Pricing Calculator",
      " Compute Engine"
    );
    await computeEnginePage2.enterText(" Compute Engine", "4","robiya@gmail.com");

    await browser.pause(5000);
  });
});