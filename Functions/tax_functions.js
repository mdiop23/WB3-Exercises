"use strict";

// accepts gross pay
// returns ss tax amount of 6.2%

function getSoSecTax(num){
    let afterTax = num * 0.062;
    return afterTax
}
console.log("Social Security Tax" + getSoSecTax(2500))


function getMedicareTax(tax){
    let postTax = tax * 0.0145;
    return postTax;
}
    console.log("Medicare Tax" + getMedicareTax(2500))

    function getFederalTax(grossPay, withCode){
        if (withCode === 0){
            aftTax = grossPay * 0.23
        }
        else if (withCode = 1){
            aftTax = grossPay * 0.21
        }
        else if (withCode = 2){
            aftTax = grossPay * 0.195
        }
        else if (withCode = 3){
            aftTax = grossPay * 0.185
        }
        else if (withCode = 4){
            aftTax = grossPay * 0.18
        }
        else (withCode = 5)
            aftTax = grossPay * 0.18
            let taxWithAmnt = aftTax

            return taxWithAmnt
        }

        console.log("Federal Tax Withheld" + getFederalTax(2500,0))
