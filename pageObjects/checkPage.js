import { Selector } from 'testcafe';

class CheckPage{
    constructor(){
        this.checkOne = Selector('#isAgeSelected')
        this.lblMessageCheck = Selector('#txtAge');

    }
}

export default new CheckPage();