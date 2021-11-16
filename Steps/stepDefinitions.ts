const { Given, When, Then, Before,TableDefinition,DataTable,setDefaultTimeout, } = require ('@cucumber/cucumber')
const {  QueryHandler } = require("query-selector-shadow-dom/plugins/puppeteer");
const puppeteer = require("puppeteer");
import {gotoSalesforceHomepage} from '../actions/gotohomePage';
import {clickLoginButton} from '../actions/clickLoginButton';
import { fillFormFields } from '../actions/fillLoginFields';
import { clickFormLoginButton } from '../actions/clickFormLoginButton';
(async function(){await puppeteer.registerCustomQueryHandler('shadow', QueryHandler)})();

let page;
setDefaultTimeout(90000*2);

Before(async function(){
  const browser=await puppeteer.launch({headless:false,args: [
    '--disable-web-security',
  ],devtools:false}); 
  page = await browser.newPage(); 

})

Given('We are on Salesforce Homepage',async function(){

   await gotoSalesforceHomepage(page);

})

When('User navigates to login menu', async function () {

  await clickLoginButton(page);
  await page.waitForNavigation({timeout: 3000, waitUntil: ['domcontentloaded']})

});

When('tries to login with valid ceredentials', async function (dataTable) {
   await fillFormFields(page,dataTable);
});


Then('User successful logs in', async function () {

await clickFormLoginButton(page);

});