import { Selector } from 'testcafe';
import inputPage from '../pageObjects/inputPage';

const dataSet = require('../data/inputData.json');


fixture `Input Tests`
//.page `https://www.seleniumeasy.com/test/basic-first-form-demo.html`

.beforeEach(async t => {
    await t
    .navigateTo(dataSet.baseURL)
    .maximizeWindow()
    .click(inputPage.alertButtom)
});


test 
('Input text and validate the message', async t => {
    
    // Test code
    let txtMessage = dataSet.message;

    await t
        .typeText(inputPage.txtMessage ,txtMessage)
        .click(inputPage.btnOk)
        .takeScreenshot({
            path:     'first_test.png',
            fullPage: false
        })
        
        // save the text in the element
        let lblTxt = await inputPage.lblMessage.innerText
        
        // Assertion to check
        await t.expect(lblTxt).eql(txtMessage)

});


test('Input two numbers and validate the sum', async t => {
    // Test code
    let txtA = dataSet.numA;
    let txtB = dataSet.numB;

    await t
        .typeText(inputPage.txtA ,txtA)
        .typeText(inputPage.txtB ,txtB)
        .click(inputPage.btnGetTotal)
        .takeScreenshot({
            path:     'second_test.png',
            fullPage: false
        })
        
        // save the text in the element
        let lblTxt = await inputPage.lblSum.innerText

        // Assertion to check
        await t.expect(parseInt(lblTxt)).eql(parseInt(txtA) + parseInt(txtB))

});