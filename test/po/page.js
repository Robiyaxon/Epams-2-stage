class Page {
  async open(path) {
    await browser.url(path);
  }
}
module.exports = Page;
