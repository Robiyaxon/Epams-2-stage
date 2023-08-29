const pastebinPage = require("../po/pastabinTask");
describe("Pestbin service", () => {
  it("should open home page", async () => {
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