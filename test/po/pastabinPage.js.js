const Page = require("./page.js");
class PastebinPage extends Page {
  get selectExpiration() {
    return $(
      "//span[@id='select2-postform-expiration-container']/following-sibling::span"
    );
  }

  get select10() {
    return $("//li[text()='10 Minutes']");
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
  async addPastaBinPage(name, text) {
    await this.selectExpiration.click();
    await this.select10.waitForDisplayed();
    await this.select10.waitForDisplayed({
      timeout: 5000,
      revorse: true,
      timeoutMsg: " Sorry, the element is not displayed",
      interval: 50,
    });
    await $("//li[text()='10 Minutes']").click();
    await this.newPost.setValue(name);
    await this.pastName.setValue(text);
    await this.pastName.addValue("\uE006");
  }
}
module.exports =new  PastebinPage();