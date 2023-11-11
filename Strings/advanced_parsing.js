"use strict"

// let fullName = "Brenda Kaye";
// let fullName = "Ian Auston";
// let fullName = "Siddalee Grace";
let fullName = "Cher"
// let fullName = "Dana Lynn Wyatt"

let spaceInName = fullName.indexOf(" ");

function findWordNames(fName){
    if(spaceInName == -1){
        console.log(`Name : ${fullName}`)
    } else {
        let findSecondSpace = fullName.substring(spaceInName + 1).indexOf(" ");
        console.log(spaceInName, findSecondSpace)
        if(findSecondSpace == -1){
            let firstName = fullName.substring(0, spaceInName);
            let lastName = fullName.substring(spaceInName + 1);
            console.log(`First Name: ${firstName}, Last Name: ${lastName}`)
        } else{
            let locationSecondSpace = findSecondSpace + spaceInName + 1
            let firstName = fullName.substring(0, spaceInName);
            let middleName = fullName.substring(spaceInName + 1, locationSecondSpace);
            console.log(middleName)
            let lastName = fullName.substring(locationSecondSpace);
            console.log(`First Name : ${firstName}, Middle Name : ${middleName}, Last Name: ${lastName}`)
        }
    }
}


findWordNames(fullName)


// console.log(`Full Name: ${fullName}, First Name: ${firstName}, Last Name: ${lastName}`)
