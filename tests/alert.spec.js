import {test}from'@playwright/test'
    test('alert handling',async({page})=>{
        await page.goto('https://demo.automationtesting.in/Alerts.html')
    //Sample Alert
        await page.once('dialog',async(dialog) => {
        await dialog.accept()  
        console.log("Alert: ",dialog.message())  
        })
        await page.locator('//button[@onclick="alertbox()"]').click()
        
    //Confirmation Alert

    await page.locator('(//a[@class="analystic"])[2]').click()
    await page.once('dialog',async(dialog) => {
        await dialog.accept()  
        console.log("Confirmation Alert: ",dialog.message())  
        })
        await page.locator('//button[@class="btn btn-primary"]').click()


        //Prompt Alert

    await page.locator('(//a[@class="analystic"])[3]').click()
    await page.once('dialog',async(dialog) => {
        await dialog.accept('Hii Bro')  
        console.log("Prompt Alert: ",dialog.message())  
        })
    await page.locator('//button[@onclick="promptbox()"]').click()
    })