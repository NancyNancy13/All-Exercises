// const givenName = "nancy";

// const startName = givenName[0].toUpperCase();
// console.log(startName);
// const endName = givenName.substring(1);
// console.log(endName);
// const newName = startName + endName;
// console.log(newName);
// ///////////////////////////////////////////////////////////
const str = "nAncy";
capitalize(str);
function capitalize(str) {
  return (str = str[0].toUpperCase() + str.substring(1).toLowerCase());
}

const givenname = "peTER";
const cap = capitalize(givenname);
console.log(cap);
