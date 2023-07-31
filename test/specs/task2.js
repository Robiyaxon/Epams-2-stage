import { Builder, By, Key, until } from "selenium-webdriver";
async function automateScript() {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://cloud.google.com/");
  const searchButton = await driver.wait(
    until.elementLocated(
      By.xpath(
        "/html/body/section/devsite-header/div/div[1]/div/div/div[2]/devsite-search/form"
      )
    )
  );
  await searchButton.click();
  await driver
    .findElement(By.name("q"))
    .sendKeys("Google Cloud Platform Pricing Calculator", Key.RETURN);
  const calculatorLink = await driver.wait(
    until.elementLocated(
      By.xpath("(//a[.='Google Cloud Pricing Calculator'])[1]")
    )
  );
  calculatorLink.click();
  //

  const iframe = await driver.wait(
    until.elementLocated(By.xpath("//devsite-iframe/iframe"))
  );
  await driver.switchTo().frame(iframe);
  const iframe2 = await driver.wait(
    until.elementLocated(By.xpath("//iframe[@id='myFrame']"))
  );
  await driver.switchTo().frame(iframe2);

  // const select2 = await driver.wait(
  //   until.elementLocated(By.xpath("//input[@id='input-0']"))
  // );
  // select2.click()
  // select2.sendKeys("Compute Engine")
  // select2.click()
  //
  const quantityInput = await driver.wait(
    until.elementLocated(By.id(`input_98`))
  );
  await quantityInput.click();
  await quantityInput.sendKeys("4");
}
automateScript();
