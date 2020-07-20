    const assert = require('assert');
    const {Given, When, Then} = require('cucumber');

    const path = require('path');
    const {ServiceBuilder} = require("selenium-webdriver/chrome");
    const {Builder, By , Key , until }  = require("selenium-webdriver");

    const pathDriver = 'Users/THIAGO/Documents/Thiago/aula prog/Gama Academy/teste/tdd_bdd_jasmine_cucumber/driver/chromedriver.exe'
    const serviceBuilder = new ServiceBuilder(pathDriver);

    const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build();

    Given('I have \ {string} clients in my database', function (string) {
      console.log("Inseri os dados na  base");
      
    });
    When('I access the home webpage', async() =>{
      await driver.get('http://localhost:3000');
      await (await driver).sleep(1000); 
    });

    Then('see the list about \ {string} itens', function (string) {
      assert(await driver.findElement(By.tagName('tr')).length).toBeEqual(10);
    });