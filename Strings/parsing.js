"use strict";

let name = "Brenda Kaye";

function parseAndDisplayName(name) {
  let firstName = name.indexOf(" ");
  let lastName = name.lastIndexOf(" ");
  let displayFirst = name.substring(0, firstName);
  let displayLast = name.substring(lastName + 1);
  let displayMiddleName = name.substring(firstName + 1, lastName);

  console.log(`First name is: ${displayFirst}`);
  console.log(`Middle Name is: ${displayMiddleName}`)
  console.log(`Last name is: ${displayLast}`);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Burger Auston");
parseAndDisplayName("Siddalee Grace");