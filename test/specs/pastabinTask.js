const pastebinPage = require("../po/pastebinTask");
describe("Pestbin service", () => {
  it("should open home page", async () => {
    await pastebinPage.open();
    await pastebinPage.addnewPaste("Hello from WebDriver", "helloweb");
  });

  //
  
  it("should open home page and add syntax", async () => {
    let name = `git config --global user.name "New Sheriff in Town"
    git reset $(git commit-tree`;
    let syntax = "Bash";
    let text = "Pastebin.com - #1 paste tool since 2002!";

    await pastebinPage.open();
    await pastebinPage.addnewPaste(name, text, syntax);

    let titleInput = await browser.getTitle();
    await expect(titleInput).toEqual(text);
    let text_syntaxType = await $(
      "//span[@id='select2-postform-format-container']"
    ).getText();
    await expect(text_syntaxType).toEqual(syntax);
  });
});
