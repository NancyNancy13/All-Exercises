// using IndexOf

const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, fullName.indexOf(" "));

// console.log(firstName);

const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));

// console.log(MiddleName);

const LastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

// console.log(LastName);

// //////////////////////////////////////////////////////////////////////////////////
// const fullName = "Peter Heronimous Lind";
// getNameParts(fullName);
// function getNameParts(fullName) {
// const firstName = fullName.substring(0, fullName.indexOf(" "));

// const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
///////////////////////////////////////////////
//   if (middleName == null) {
//     console.log(firstName, LastName);
//   }else{
// console.log(firstName, MiddleName, LastName);
// }
//////////////////////////////////

// const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
//   console.log({ firstName, middleName, lastName });
// }
// //////////////////// full name exercise//////////////////////////
fullNamefun("Potter", "Harry", "James");
function fullNamefun(LastName, firstName, middleName) {
  const newFullName = firstName + " " + middleName + " " + LastName;
  if (middleName == null) {
    console.log(firstName, LastName);
  } else {
    console.log(newFullName);
  }
}
