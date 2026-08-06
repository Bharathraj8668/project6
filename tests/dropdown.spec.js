import {test} from'@playwright/test'
test ('drop down',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
const country=await page.locator('//select[@id="country"]')
await country.selectOption({value:"india"})
const country1 = await country.locator('Option:checked').textContent()
console.log("Select Language: ",country1)

//multiple option

 const animal = await page.locator('//select[@id="animals"]')
    await animal.selectOption([{ index: 0 } , { label: "Deer" } , { value: "lion" }])
    const animals = await animal.locator('Option:checked').allTextContents()
    console.log("Selected Animals", animals)
})