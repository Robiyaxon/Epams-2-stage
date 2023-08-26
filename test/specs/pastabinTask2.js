const pastabinTask2 = require("../po/pastabinTask2");
describe("Pestbin service", () => {
  it("should open home page", async () => {
    await pastabinTask2.open();
    await pastabinTask2.addPastaBinPage2(
      `git config --global user.name "New Sheriff in Town"`,
      "Pastebin.com - #1 paste tool since 2002!",
      "Bash"
    );
    await browser.pause(5000);
  });
});
