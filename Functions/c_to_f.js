"use strict";

function convertCtoF(temp){
    let first = temp * 9;
    let fahrenheit = first/5;
    let fahrenheitTemp = fahrenheit + 32;

    return fahrenheitTemp;
}

console.log(convertCtoF(0))