import{ test } from '@playwright/test'
test('BookMyShow',async({page})=>{
    await page.goto('https://in.bookmyshow.com/explore/home/chennai')
})