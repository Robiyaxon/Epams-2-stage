import AddNews from "../pageobjects/addNews.page";
describe("My Login application", () => {
  it("should login with valid credentials", async () => {

    
    await AddNews.login("tomsmith", "SuperSecretPassword!");



  });
});
