export const config = {
    // runner: 'local',
    // port: 4723,

    // user: process.env.SAUCE_USERNAME,
    // key: process.env.SAUCE_ACCESS_KEY,

    // hostname: 'ondemand.us-west-1.saucelabs.com',
    // port: 443,
    // protocol: 'https',
    // path: '/wd/hub',

    // user: 'oauth-jujuba166.doce-2488d',
    // key: '1fe7d999-cf34-4231-b499-18e46c6ddfa4',
    // hostname: 'ondemand.us-west-1.saucelabs.com',
    // port: 443,
    // baseUrl: 'wd/hub',

    // services: ['sauce'],

    // specs: [
    //     './test/specs/**/*.js'
    // ],

    // suites: {
    //     login: [
    //         './test/specs/login.test.js'
    //     ],
    //     product: [
    //         './test/specs/product.test.js'
    //     ],
    //     search: [
    //         './test/specs/search.test.js'
    //     ],
    // },

    // // maxInstances: 1,
    // capabilities: [

    //     {
    //         "platformName": "ios",
    //         "appium:deviceName": "iPhone XR",
    //         // "appium:platformVersion": "17",
    //         "appium:automationName": "XCUITest",
    //         "appium:app": "storage:filename=LojaEBAC.ipa"
    //     }

    // ],
    // logLevel: 'info',
    // waitforTimeout: 10000,
    // connectionRetryTimeout: 120000,
    // connectionRetryCount: 3,
    // framework: 'mocha',
    // reporters: ['spec',
    //     ['allure', {
    //         outputDir: 'allure-results',
    //         disableWebdriverStepsReporting: true,
    //         disableWebdriverScreenshotsReporting: false
    //     }]
    // ],
    // mochaOpts: {
    //     ui: 'bdd',
    //     timeout: 60000
    // },

    // affterSuites: async function() {
    // afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    //     await driver.takeScreenshot();
    //     await driver.execute('mobile: teminateApp', {bundleId: 'br.com.lojaebac'})
    // },

    // beforeTest: async function() {
    //         let state = await driver.queryAppState("br.com.lojaebac")
    //     if (state !== 4) {
    //         await driver.execute('mobile: teminateApp', {bundleId: 'br.com.lojaebac'})
    //     }
    // }
}