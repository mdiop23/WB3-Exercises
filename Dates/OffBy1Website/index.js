"use strict"

window.onload = init;

let buttonConvert;

function init() {  
    buttonConvert = document.getElementById("buttonConvert");
    buttonConvert.onclick = buttonConvertClick;
 }

 function buttonConvertClick(){
    const inputDate= document.getElementById("inputDate").value
    console.log(inputDate);

    let d = new Date(inputDate); 
    let date = d.toString(); 

    // output

    let outputDate = document.getElementById("outputDate")
    outputDate.innerText = date;
    

 }



 