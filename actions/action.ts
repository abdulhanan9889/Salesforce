import {formLoginButtonSelector, loginButtonSelector,passwordField, userNameField} from "../selectors/loginflow.selectors"


export async function clickFormLoginButton(page)
{
    const formLoginButton = await page.$(formLoginButtonSelector);
    await formLoginButton.click();
}

// import {loginButtonSelector} from "../selectors/loginButton"

export async function clickLoginButton(page)
{
    const loginButton = await page.$(loginButtonSelector);
    await loginButton.click();
}

export async function gotoSalesforceHomepage(page)
{
    await page.goto('https://www.salesforce.com/in/?ir=1');
    await page.setViewport({width:1366,height:768})
}

export async function typeUserName(page,userName) {

    await page.waitForSelector(userNameField,{visible:true});

    const userNameFieldElement= await page.$(userNameField);

    await userNameFieldElement.type(userName);   
}

export async function typePassword(page,password) {

    await page.waitForSelector(passwordField,{visible:true});

    const passwordFieldElement= await page.$(passwordField);

    await passwordFieldElement.type(password);
}