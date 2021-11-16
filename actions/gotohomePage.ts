export async function gotoSalesforceHomepage(page)
{
    await page.goto('https://www.salesforce.com/in/?ir=1');
    await page.setViewport({width:1366,height:768})
}