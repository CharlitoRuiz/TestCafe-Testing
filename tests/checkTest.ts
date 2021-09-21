import { Selector } from 'testcafe';
import checkPage from '../pageObjects/checkPage';

const dataSet = require('../data/checkData.json');


fixture `Check Tests`
//.page `https://www.seleniumeasy.com/test/basic-first-form-demo.html`

.beforeEach(async t => {
    await t
    .navigateTo(dataSet.baseURL)
    .maximizeWindow()
});

test 
('Mark one check', async t => {

    await t
        .click(checkPage.checkOne)
        .takeScreenshot({
            path:     'check_test.png',
            fullPage: false
        })
        
        // save the text in the element
        let lblTxt = await checkPage.lblMessageCheck.innerText
        
        // Assertion to check
        await t.expect(lblTxt).eql('Success - Check box is checked')

});
