const givenName = "nancy";
const middleLetter = givenName[2].toUpperCase();
console.log(middleLetter);
const startName = givenName[1].toLowerCase();
console.log(startName);
const startName2 = givenName[0].toLowerCase();
console.log(startName2);
const endName = givenName.substring(3);
console.log(endName);
const newName = startName2 + startName + middleLetter + endName;
console.log(newName);
