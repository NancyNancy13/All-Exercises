const fullName = "peter heronimous lind";
// const firstName = fullName.substring(0, fullName.indexOf(" "));

// console.log(firstName);

// const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));

// console.log(MiddleName);

// const LastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

// console.log(LastName);

// //////////////////////////////////////////////////////////////////////////////////
// const fullName = "Peter Heronimous Lind";
getNameParts(fullName);
function getNameParts(fullName) {
  const firstName = fullName.substring(1, fullName.indexOf(" "));
  const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
  const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
  ///////////////////////////////////////////////
  // if (middleName == null) {
  //   return `${firstName} ${lastName}`;
  // } else {
  //   return `${firstName} ${middleName} ${lastName}`;
  // }
  //////////////////////////////////

  // console.log({ firstName, middleName, lastName });
}
// //////////////////// full name exercise//////////////////////////
// fullNamefun("Potter", "Harry", "James");
function fullNamefun(lastName, firstName, middleName) {
  const newFullName = firstName + " " + middleName + " " + lastName;
  if (middleName == null) {
    return firstName, lastName;
  } else {
    return newFullName;
  }
}
const cap = fullNamefun(fullName);
console.log(cap);
