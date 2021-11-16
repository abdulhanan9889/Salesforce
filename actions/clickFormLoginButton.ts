import formLoginButtonSelector from "../selectors/formLoginButton"

export async function clickFormLoginButton(page)
{
    const formLoginButton = await page.$(formLoginButtonSelector);
    await formLoginButton.click();
}