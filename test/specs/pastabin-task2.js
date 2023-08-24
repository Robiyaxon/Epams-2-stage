const PastebinTask2 = require("../po/pastabin-task2");
const PastebinTask2 = new PastebinTask2();
describe("Pestbin service", () => {
  it("should open home page", async () => {
    await PastebinTask2.open();
    await PastebinTask2.addPastaBinPage2(
      `git config --global user.name "New Sheriff in Town"

    git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
    
    git push origin master --force`,
      "how to gain dominance among developers"
    );
    await PastebinTask2.strictEqual(
      browser.getTitle(),
      "how to gain dominance among developers - Pastebin.com"
    );
    await PastebinTask2.strictEqual(
      PastebinTask2.selectBush.isExisting(),
      true
    );

    await browser.pause(5000);
  });
});
