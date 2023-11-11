"use strict"

let birthday = new Date("07/31/1998")
let date = birthday.toLocaleString()
console.log(date)

let momBirthday = new Date("Apr 23 1969");
let newDate = momBirthday.toLocaleString()
console.log(newDate)

let dadBirthday = new Date("1971, 05, 11")
let newerDate = dadBirthday.toLocaleString()
console.log(newerDate)