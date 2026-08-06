import { test } from '@playwright/test'
test('multiple drop down', async ({ page }) => {
    await page.goto('https://www.sreenidhirajakrishnan.com/practice')
    const cou = await page.locator('//select[@name="multi-select"]')
    await cou.selectOption([{ index: 1 }, { label:"JavaScript"  }, { value:"java"}])
    const cou1 = await cou.locator('Option:checked').allTextContents()
    console.log("Select Language: ", cou1)
})