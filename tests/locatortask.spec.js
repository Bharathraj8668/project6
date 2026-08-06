import {test} from '@playwright/test'
test('instagram',async({page}) => {
    await page.goto('https://www.instagram.com/')
    await page.locator('//input[@name="email"]').fill('bharath@gmail.com')
    await page.locator('//input[@type="password"]').fill('bharath')
    await page.locator('//span[text()="Log in"]').click()
})
