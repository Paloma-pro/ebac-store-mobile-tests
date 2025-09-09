import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'

describe('Do the checkout', () => {
    it('should login with valid credentials', async () => {
        let profileTab = driver.isAndroid ? 'profile' : 'Account'
        await homePage.openMenu(profileTab)
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu(profileTab)
        expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
    })

    it('should search products', async () => {
        await homePage.search()
        await browsePage.searchInput.setValue('Camiseta')
        await browsePage.products.map(async product => {
            expect(await product.getText()).toContain('R$')
        })

    })

    it('should view product info', async () => {
        // await homePage.search()
        await browsePage.searchInput.setValue('Camiseta')
        await (await browsePage.products).at(0).click()
        expect(productPage.getProductTitle('Camiseta EBAC')).toBeDisplayed()
    })

    it('should add a product in cart', async () => {
        
    });

    // Não finalizado devido a alteração no app da EBAC
})