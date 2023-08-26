const Page = require("./page.js");
class PastebinTask2 extends Page {
  get selectExpiration() {
    return $(
      "//span[@id='select2-postform-expiration-container']/following-sibling::span"
    );
  }
  get select10() {
    return $("//li[text()='10 Minutes']");
  }
  get syntaxType() {
    return $("//span[@id='select2-postform-format-container']");
  }
  get selectBush2() {
    return $("//li[text()='Bash']");
  }
  get newPost() {
    return $("#postform-text");
  }
  get pastName() {
    return $("#postform-name");
  }
  async open() {
    super.open("https://pastebin.com");
  }
  async addPastaBinPage2(name, text, bash) {
    await this.selectExpiration.click();
    await this.select10.waitForDisplayed();
    await this.select10.waitForDisplayed({
      timeout: 5000,
      revorse: true,
      timeoutMsg: " Sorry, the element is not displayed",
      interval: 50,
    });
    await $("//li[text()='10 Minutes']").click();
    await this.syntaxType.click();
    await this.selectBush2.waitForDisplayed();
    await this.selectBush2.waitForDisplayed({
      timeout: 5000,
      revorse: true,
      timeoutMsg: " Sorry, the element is not displayed",
      interval: 50,
    });
    await $("//li[text()='Bash']").click();
    await this.newPost.setValue(name);
    await this.pastName.setValue(text);
    await browser.pause(1000);
    let currentTitle = await browser.getTitle();
    expect(currentTitle).toEqual(text);
    let text_syntaxType = await this.syntaxType.getText();
    expect(text_syntaxType).toEqual(bash);
    await this.pastName.addValue("\uE006");
  }
}
module.exports = new PastebinTask2();
