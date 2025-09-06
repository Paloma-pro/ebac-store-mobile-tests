import { $, $$ } from '@wdio/globals'

class CheckoutPage {

    get addToCart(){
        return $(`-ios predicate string:name == "addToCart"`)
    }

    get products(){
        return $$(`-ios predicate string:name == "productDetails"`)
    }
    
}

export default new CheckoutPage();
