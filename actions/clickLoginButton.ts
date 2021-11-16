// import {loginButtonSelector} from "../selectors/loginButton"
import loginButtonSelector from "../selectors/loginButton"

export async function clickLoginButton(page)
{
    const loginButton = await page.$(loginButtonSelector);
    await loginButton.click();
}