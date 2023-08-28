const Page = require("../page");
class CompyuterEnginePage extends Page {
  get devSiteFrame() {
    return $("//devsite-iframe/iframe");
  }
  get myFrame() {
    return $("//iframe[@id='myFrame']");
  }
  get inputField() {
    return $("//input[@id='input-0']");
  }
  get quantityInput() {
    return $("#input_99");
  }
  get operatingSystem() {
    return $("#select_112");
  }
  get operatingSystemOption() {
    return $("#select_option_101");
  }
  get gpuSistem() {
    return $(
      "//md-checkbox[@class='ng-valid ng-dirty ng-valid-parse ng-touched ng-empty']//div[@class='md-container md-ink-ripple']"
    );
  }
  get datacenterLocation() {
    return $("#select_132");
  }
  get datacenterLocationOption() {
    return $("#select_option_257");
  }
  get commitedUsage() {
    return $("#select_139");
  }
  get commitedUsageOption() {
    return $("#select_option_137");
  }
  get clickButton() {
    return $(
      "//form[@name='ComputeEngineForm']//button[@type='button'][normalize-space()='Add to Estimate']"
    );
  }

  async open() {
    return super.open("https://cloud.google.com/");
  }

  async enterText(text, quantity) {
    await browser.switchToFrame(await this.devSiteFrame);
    await browser.switchToFrame(await this.myFrame);
    await this.inputField.waitForDisplayed({ timeout: 2000 });
    await this.inputField.click();
    await this.inputField.setValue(text);
    await this.quantityInput.waitForDisplayed({ timeout: 5000 });
    await this.quantityInput.scrollIntoView(true);
    await this.quantityInput.setValue(quantity);

    //
    await this.operatingSystem.waitForDisplayed({ timeout: 5000 });
    await this.operatingSystem.click();
    await this.operatingSystemOption.waitForDisplayed({ timeout: 5000 });
    await this.operatingSystemOption.click();
    //
    //
    await this.datacenterLocation.waitForDisplayed({ timeout: 5000 });
    await this.datacenterLocation.click();
    await this.datacenterLocationOption.waitForDisplayed({ timeout: 5000 });
    await this.datacenterLocationOption.click();

    //
    await this.commitedUsage.waitForDisplayed({ timeout: 5000 });
    await this.commitedUsage.click();
    await this.commitedUsageOption.waitForDisplayed({ timeout: 5000 });
    await this.commitedUsageOption.click();

    //
    await this.clickButton.waitForDisplayed({ timeout: 5000 });
    await this.clickButton.click();
  }
}

module.exports = new CompyuterEnginePage();