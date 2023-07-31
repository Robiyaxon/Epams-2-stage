import { Builder, By, Key, until } from "selenium-webdriver";
async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://pastebin.com");
  const selectionArrow = await driver.findElement(
    By.xpath(
      "//span[@id='select2-postform-expiration-container']/following-sibling::span"
    )
  );
  selectionArrow.click();
  await driver.wait( 
    until.elementLocated(By.xpath("//li[text()='10 Minutes']"))
  );

  const option = await driver.findElement(
    By.xpath("//li[text()='10 Minutes']")
  );
  option.click();
  await driver
    .findElement(By.id("postform-text"))
    .sendKeys("Hello from WebDriver");
  await driver.findElement(By.id("postform-name")).sendKeys("helloweb", Key.RETURN);
  
}
example();
