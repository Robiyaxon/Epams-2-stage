const Page = require("./page.js");
class PastebinTask extends Page {
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
  get selectBush() {
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

  async addnewPaste(name, text, syntax) {
    //
    await this.selectExpiration.click();
    await this.select10.waitForDisplayed({ timeout: 5000 });
    await this.select10.click();
    //
    if (syntax) {
      await this.syntaxType.click();
      await this.selectBush.waitForDisplayed({ timeout: 5000 });
      await this.selectBush.click();
    }
    //
    await this.newPost.setValue(name);
    await this.pastName.setValue(text);
    await this.pastName.addValue("\uE006");
  }
}
module.exports = new PastebinTask();