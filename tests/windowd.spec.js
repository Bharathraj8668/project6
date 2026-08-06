import {test} from '@playwright/test'
import { asyncWrapProviders } from 'node:async_hooks'
test('windowhandling',async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('vivo mobile 5g phone')
    await page.keyboard.press('Enter')
    const[newPage]=await Promise.all([context.waitForEvent('page'),
     page.click('(//h2[contains(@aria-label,"T4 Lite 5G Titanium Gold_128GB+4GB")])')   
    ])
    await newPage.waitForLoadState()
    const title=await newPage.title()
    console.log(title)
})