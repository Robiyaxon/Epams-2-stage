import { browser } from "@wdio/globals";
export default class Page {
  constructor() {this.title = "My Page";}
  async open() {
    await browser.url("https://pastebin.com");}
}
