import { clickLoginButton, typePassword, typeUserName, clickFormLoginButton } from "../actions/action";

export async function signInOnSalesforce(page,dataTable){
    let dataFields=dataTable.rowsHash();
  await typeUserName(page,dataFields.username)

  await typePassword(page,dataFields.password);

  await clickFormLoginButton(page);

}

export async function openLoginPage(page){
  
    await clickLoginButton(page);
    await page.waitForNavigation({timeout: 3000, waitUntil: ['domcontentloaded']})
    
}