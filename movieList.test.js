const {Builder, By, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()



beforeAll (async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})
afterAll (async () => {
    await driver.quit()
})
test('add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(3000)
})  
    test('Cross off Movie', async () => {
        await crossOffMovie(driver)
        await driver.sleep(3000)
    })

    test('Delete movie', async () => {
        await deleteMovie(driver)
        await driver.sleep(3000)
    })
    test('delete message', async () => {
        await revealMessage(driver)
        await driver.sleep(3000)
    })

const addMovie = async(driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('tenet\n')
    
    
}

const crossOffMovie = async(driver) => {
    await driver.findElement(By.xpath('(//li)[1]')).click()
}

const deleteMovie = async(driver) => {
    await driver.findElement(By.xpath('//*[contains(text(),"x")]')).click()
    // await driver.findElement(By.xpath('//aside'))
}

const revealMessage = async(driver) => {
     await driver.findElement(By.xpath('//aside'))
}







// module.exports = {
//     addMovie,
//     deleteMovie,
//     crossOffMovie
// }

