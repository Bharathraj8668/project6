import{test,expect}from'@playwright/test'
test('Webtable', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const rowdata=await page.locator('//table[@name="BookTable"]//tbody//tr[1]//td').allTextContents()
    console.log(rowdata)
   const colmndata = await page.locator('')
})