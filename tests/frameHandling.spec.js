import {test} from '@playwright/test'
test('FrameHandling',async({page})=>{
await page.goto('https://demo.automationtesting.in/Frames.html')
const singleframe=await page.frameLocator('//iframe[@name="SingleFrame"]')
await singleframe.locator('//input[@type="text"]').fill('Hii bro')

//multiple Frames

await page.locator('(//a[@class="analystic"])[2]').click()
//Multiple Frames start
const outerframe=await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
const innerframe=await outerframe.frameLocator('//iframe[@src="SingleFrame.html"]')
await innerframe.locator('//input[@type="text"]').fill('Hello bro')
})