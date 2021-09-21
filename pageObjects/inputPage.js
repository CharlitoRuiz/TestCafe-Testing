import { Selector } from 'testcafe';

class InputPage {
    constructor () {
        this.alertButtom = Selector('#at-cv-lightbox-close');
        this.txtMessage = Selector('#user-message');
        this.btnOk = Selector('#get-input > button');
        this.lblMessage = Selector('#display');
        this.txtA = Selector('#sum1')
        this.txtB = Selector('#sum2')
        this.btnGetTotal = Selector('#gettotal > button');
        this.lblSum = Selector('#displayvalue');
    }
}

export default new InputPage();