const Page = require("./page");
class ComputeEnginePage extends Page {
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
    return $("//input[@ng-model='listingCtrl.computeServer.quantity']");
  }
  get instanceBlank() {
    return $("//input[@ng-model='listingCtrl.computeServer.label']");
  }

  get operatingSystem() {
    return $("//md-select[@ng-model='listingCtrl.computeServer.os']");
  }
  get operatingSystemOption() {
    return $("#select_option_102");
  }

  get vmClass() {
    return $("#select_116");
  }
  get vmClassOption() {
    return $("#select_option_115");
  }
  get gpuSistem() {
    return $(`//md-checkbox[@aria-label='Add GPUs']    `);
  }
  get gpuType() {
    return $(`//md-select[@aria-label='GPU type']`);
  }
  get gpuTypeOption() {
    return $(`//md-option[@value='NVIDIA_TESLA_P100']`);
  }
  get localSSD() {
    return $(`//md-select[@placeholder='Local SSD']`);
  }
  get localSSDOption() {
    return $(`//md-option[contains(., '1x375 GB')]`);
  }
  get datacenterLocation() {
    return $("#select_132");
  }
  get datacenterLocationOption() {
    return $("#select_option_257");
  }
  get clickButton() {
    return $(
      "//form[@name='ComputeEngineForm']//button[@type='button'][normalize-space()='Add to Estimate']"
    );
  }
  get clickEmailButton() {
    return $(`//button[@title="Email Estimate"]`);
  }
  get addEmail() {
    return $("//input[@ng-model='emailQuote.user.email']");
  }
  get buttonEmail() {
    return $("//button[contains(text(),'Send Email')]    ");
  }
  get chekInbox() {
    return $("#cprnd");
  }
  get totalMonthlyCost() {
    return $(" //h3)[2]");
  }
  get openEmailPage() {
    return $("#cprnd");
  }
  get chekInbox() {
    return $("//button/span[normalize-space()='Check Inbox']");
  }
  get totalMonthlyCost() {
    return $("(//h3)[2]");
  }
  get totalMonthlyCostGoogle() {
    return $("//md-list-item/div[@class='ng-binding']");
  }
  get iframeEmil() {
    return $("#ifnoinb");
  }
  get ifmail() {
    return $("#ifmail");
  }
  async enterText(text, quantity, email) {
    await browser.switchToFrame(await this.devSiteFrame);
    await browser.switchToFrame(await this.myFrame);
    // await browser.switchToFrame(await this.iframeEmil);
    // await browser.switchToFrame(await this.ifmail);
    //
    //
    await this.inputField.waitForDisplayed({ timeout: 2000 });
    await this.inputField.click();
    await this.inputField.addValue(text);
    //
    await this.quantityInput.waitForDisplayed({ timeout: 5000 });
    await this.quantityInput.scrollIntoView(true);
    await this.quantityInput.setValue(quantity);
    //
    await this.instanceBlank.waitForDisplayed({ timeout: 5000 });
    await this.instanceBlank.scrollIntoView(true);
    await this.instanceBlank.setValue("leave blank");
    //
    await this.operatingSystem.waitForDisplayed({ timeout: 5000 });
    await this.operatingSystem.click();
    await this.operatingSystemOption.waitForDisplayed({ timeout: 5000 });
    await this.operatingSystemOption.click();
    //
    await this.vmClass.waitForDisplayed({ timeout: 5000 });
    await this.vmClass.click();
    await this.vmClassOption.waitForDisplayed({ timeout: 5000 });
    await this.vmClassOption.click();
    //
    await this.gpuSistem.waitForDisplayed({ timeout: 5000 });
    await this.gpuSistem.click();
    await this.gpuType.waitForDisplayed({ timeout: 5000 });
    await this.gpuType.click();
    await this.gpuTypeOption.waitForDisplayed({ timeout: 5000 });
    await this.gpuTypeOption.click();
    //
    await this.localSSD.waitForDisplayed({ timeout: 5000 });
    await this.localSSD.click();
    await this.localSSDOption.waitForDisplayed({ timeout: 5000 });
    await this.localSSDOption.click();
    //
    await this.datacenterLocation.waitForDisplayed({ timeout: 5000 });
    await this.datacenterLocation.click();
    await this.datacenterLocationOption.waitForDisplayed({ timeout: 5000 });
    await this.datacenterLocationOption.click();
    //
    await this.clickButton.waitForDisplayed({ timeout: 5000 });
    await this.clickButton.click();

    if (email) {
      await this.clickEmailButton.waitForDisplayed({ timeout: 5000 });
      await this.clickEmailButton.waitForClickable({ timeout: 5000 });
      await this.clickEmailButton.click();
      //
      await this.addEmail.waitForDisplayed({ timeout: 5000 });
      await this.addEmail.setValue(email);
      //
      await this.buttonEmail.click();
    }
  }
}

module.exports = new ComputeEnginePage();
