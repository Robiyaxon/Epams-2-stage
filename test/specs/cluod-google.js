const cloudGoogle = require("../po/cluodGoogle");
const computeEnginePage = require("../po/computeEnginePage");

describe("Pestbin service", () => {
  it("should open home page and add email", async () => {
    await cloudGoogle.searchInCloudGoogle(
      "Google Cloud Platform Pricing Calculator",
      " Compute Engine"
    );
    await computeEnginePage.enterText(" Compute Engine", "4");
  });
  it("should open home page and add email", async () => {
    await cloudGoogle.searchInCloudGoogle(
      "Google Cloud Platform Pricing Calculator",
      " Compute Engine"
    );

    await browser.newWindow("https://yopmail.com/en/email-generator");
    await $("#cprnd").click();
    let clipboardText = await browser.executeAsync((done) => {
      navigator.clipboard.readText().then(done);
    });

    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[0]);
    await computeEnginePage.enterText(" Compute Engine", "4", clipboardText);
    await browser.pause(3000);
    await browser.switchToWindow(handles[1]);
    await browser.pause(3000);
    const chekInbox = await $("//button/span[normalize-space()='Check Inbox']");
    await chekInbox.waitForDisplayed({ timeout: 5000 });
    await chekInbox.click();
    const totalMonthlyCost = await $("(//h3)[2]");
    await totalMonthlyCost.waitForDisplayed({ timeout: 5000 });
    await totalMonthlyCost.getText();
    totalMonthlyCost = parseFloat(totalMonthlyCost.replace("USD", "").trim());

    //
    await browser.pause(3000);
    await browser.switchToWindow(handles[0]);
    await browser.pause(3000);
    const totalMonthlyCostGoogle = await $(
      "//md-list-item/div[@class='ng-binding'] "
    );

    //
    await totalMonthlyCostGoogle.waitForDisplayed({ timeout: 5000 });
    let googleCost = await totalMonthlyCostGoogle.getText();
    googleCost = parseFloat(googleCost.replace("USD", "").trim());
    if (googleCost == parseFloat(totalMonthlyCost)) {
      console.log("Values are equal");
    } else {
      console.log("Values are not equal");
    }
  });
});
