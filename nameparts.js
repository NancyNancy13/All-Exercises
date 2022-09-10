// const fullName = "peter heronimous lind";
// // const firstName = fullName.substring(0, fullName.indexOf(" "));

// // const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));

// // const LastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

// // //////////////////////////////////////////////////////////////////////////////////
// // const fullName = "Peter Heronimous Lind";
// // getNameParts(fullName);
// // function getNameParts(fullName) {
// // const firstName = fullName.substring(0, fullName.indexOf(" "));
// // const middleName =fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
// // const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
// ///////////////////////////////////////////////
// // if (middleName == null) {
// //   return `${firstName} ${lastName}`;
// // } else {
// //   return `${firstName} ${middleName} ${lastName}`;
// // }
// //////////////////////////////////

// // console.log({ firstName, middleName, lastName });
// // }
// // //////////////////// full name exercise//////////////////////////
// // fullNamefun("Potter", "Harry", "James");
// function capitalize() {
//   return fullName.substring(0, 1).toUpperCase() + fullName.substring(1).toLowerCase();
// }
// function fullNamefun(lastName, firstName, middleName) {
//   const yourfirstName = capitalize(fullName.substring(0, fullName.indexOf(" ")));
//   console.log(yourfirstName);
//   const yourmiddleName = capitalize(fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" ")));
//   console.log(yourmiddleName);
//   const newFullName = firstName + " " + middleName + " " + lastName;
//   if (middleName == null) {
//     return firstName, lastName;
//   } else {
//     return newFullName;
//   }
// }
// // ///////////////////////////////////////////////////////////////////
const nameString = `Albus Percival Wulfric Brian Dumbledore`;
function getNameParts(fullName) {
  let firstName = fullName.substring(0, fullName.indexOf(" "));
  let middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
  let LastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
  fullName = `${firstName} ${middleName} ${LastName}`;
  console.log(firstName);

  if (middleName == null) {
    return `${firstName} ${LastName}`;
  } else {
    return `${firstName} ${middleName} ${LastName}`;
  }
}
