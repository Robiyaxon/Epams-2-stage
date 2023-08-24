import Page from "./page.js";
class AddNews extends Page {
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
  async login(username, password) {
    await this.selectExpiration.click();
    await this.select10.waitForDisplayed();
    await this.select10.waitForDisplayed({
      timeout: 5000,
      revorse: true,
      timeoutMsg: " Sorry, the element is not displayed",
      interval: 50,
    });
    await $("//li[text()='10 Minutes']").click();
    await this.newPost.setValue(username);
    await this.newPost.setValue(password);
  }
}

export default new AddNews();
