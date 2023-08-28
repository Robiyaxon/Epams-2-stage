const Page = require("../page");
class CloudGoogle extends Page {
  get searchBox() {
    return $("input[name='q']");
  }
  get calculatorLink() {
    return $("(//a[.='Google Cloud Pricing Calculator'])[1]");
  }
  async open() {
    return super.open("https://cloud.google.com/");
  }

  async searchInCloudGoogle(searchText) {
    await this.open();
    await this.searchBox.waitForExist({ timeout: 2000 });
    await this.searchBox.setValue(searchText);
    await this.searchBox.addValue("\uE006");
    await this.calculatorLink.waitForExist({ timeout: 2000 });
    await this.calculatorLink.click();
  }
}
module.exports = new CloudGoogle();
