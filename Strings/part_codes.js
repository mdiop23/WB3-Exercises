"use strict"


function getSupplier(code) {
    let pos = code.indexOf(':');
    return code.slice(0, pos);
}

function getProductNumber(code) {
    let startPos = code.indexOf(':') + 1;
    let endPos = code.indexOf('-');
    return code.slice(startPos, endPos);
}

function getSize(code) {
    let pos = code.indexOf('-') + 1;
    return code.slice(pos);
}

let sample = "DI:12345-M";
console.log(getSupplier(sample));  
console.log(getProductNumber(sample));  
console.log(getSize(sample)); 