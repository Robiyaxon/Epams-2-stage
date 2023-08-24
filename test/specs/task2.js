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

  //
  const engine = await driver.wait(
    until.elementLocated(By.xpath("//input[@id='input-0']"))
  );
  await driver.actions().click(engine).perform();
  await driver.actions().sendKeys("Compute Engine").perform();
  await driver.sleep(2000);
  await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
  await driver.actions().sendKeys(Key.ENTER).perform();
  //

  const quantityInput = await driver.wait(
    until.elementLocated(By.id(`input_98`))
  );
  await quantityInput.click();
  await quantityInput.sendKeys("4");

  //

  const operatingSystem = await driver.wait(
    until.elementLocated(By.id(`select_111`))
  );
  await operatingSystem.click();
  const operatingSystemOption = await driver.wait(
    until.elementLocated(By.id(`select_option_104`))
  );
  await operatingSystemOption.click();

  //

  const instanceType = await driver.wait(
    until.elementLocated(By.id(`select_125`))
  );
  await instanceType.click();
  const instanceTypeOption = await driver.wait(
    until.elementLocated(By.id(`select_option_285`))
  );
  await driver.wait(
    until.elementIsVisible(driver.findElement(By.id(`select_option_285`))),
    5000
  );
  await instanceTypeOption.sendKeys(Key.ENTER);
  //

  const localSSD = await driver.wait(until.elementLocated(By.id(`select_131`)));
  await localSSD.click();
  const localSsdOption = await driver.wait(
    until.elementLocated(By.id(`select_option_256`))
  );
  await driver.wait(
    until.elementIsVisible(driver.findElement(By.id(`select_option_256`))),
    5000
  );
  await localSsdOption.sendKeys(Key.ENTER);

  //

  const datacenterLocation = await driver.wait(
    until.elementLocated(By.id(`select_138`))
  );
  await datacenterLocation.click();
  const datacenterLocationOption = await driver.wait(
    until.elementLocated(By.id(`select_option_136`))
  );
  await driver.wait(
    until.elementIsVisible(driver.findElement(By.id(`select_option_136`))),
    5000
  );
  await datacenterLocationOption.sendKeys(Key.ENTER);

  const clickButton = await driver.wait(
    until.elementLocated(
      By.xpath(
        "//form[@name='ComputeEngineForm']//button[@type='button'][normalize-space()='Add to Estimate']"
      )
    )
  );
  await clickButton.click();
}
automateScript();
