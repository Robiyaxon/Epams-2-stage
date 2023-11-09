const cloudGoogle = require("../po/homePage");
const computeEnginePage = require("../po/calculate");

describe("Google Cloude Test!!", () => {
  it("open home page and complate some data", async () => {
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
    await computeEnginePage.openEmailPage.click();
    let clipboardText = await browser.executeAsync((done) => {
      navigator.clipboard.readText().then(done);
    });

    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[0]);
    await computeEnginePage.enterText(" Compute Engine", "4", clipboardText);

    await computeEnginePage.totalMonthlyCostGoogle.waitForExist({
      timeout: 7000,
    });
    let googleCost = await computeEnginePage.totalMonthlyCostGoogle.getText();
    googleCost = parseFloat(googleCost.replace("USD", "").trim());

    //
    await browser.switchToWindow(handles[1]);

    computeEnginePage.chekInbox.waitForExist({
      timeout: 10000,
      interval: 100,
      timeoutMsg: "Element never existed after 5 seconds",
      reverse: false,
    });

    //

    browser.waitUntil({ timeout: 5000 });
    await computeEnginePage.chekInbox.click();
    await computeEnginePage.chekInbox.waitForExist({ timeout: 5000 });
    await computeEnginePage.totalMonthlyCost.waitForDisplayed({
      timeout: 15000,
    });
    await browser.switchToFrame(await computeEnginePage.ifmail);
    let totalMonthlyCostText =
      await computeEnginePage.totalMonthlyCost.getText();
    totalMonthlyCostText = parseFloat(
      totalMonthlyCostText.replace("USD", "").trim()
    );
    await expect(googleCost).toEqual(totalMonthlyCostText);
  });
});
