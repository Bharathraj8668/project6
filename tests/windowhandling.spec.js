import { test } from '@playwright/test'
test('windowHandling', async ({ browser }) => {
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('https://www.amazon.in/')
  await page.locator('input[id="twotabsearchtextbox"]').fill('samsung s25 ultra 5g mobile')
  await page.keyboard.press('Enter')
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('')
  ])
  await newPage.waitForLoadState()
  const title = await newPage.title()
  console.log(title)
})