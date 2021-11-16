import userNameField from "../selectors/userNameFied"
import passwordField from "../selectors/passwordField"


export async function fillFormFields(page,dataTable) {
    
    let k=dataTable.rowsHash();

    await page.waitForSelector(userNameField,{visible:true});

    const userNameFieldElement= await page.$(userNameField);

    await userNameFieldElement.type(k.username);

    const passwordFieldElement= await page.$(passwordField);

    await passwordFieldElement.type(k.password);
    

}