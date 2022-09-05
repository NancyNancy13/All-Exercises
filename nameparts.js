// using IndexOf

// const fullName = "Peter Heronimous Lind";
// const firstName = fullName.substring(0, fullName.indexOf(" "));

// console.log(firstName);

// const MiddleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));

// console.log(MiddleName);

// const LastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

// console.log(LastName);

// //////////////////////////////////////////////////////////////////////////////////
const fullName = "Peter Lind";
getNameParts(fullName);
function getNameParts(fullName) {
  const firstName = fullName.substring(0, fullName.indexOf(" "));

  const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));

  //   if (middleName === null) {
  //     console.log(undefined);
  //   }

  const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
  console.log({ firstName, middleName, lastName });
}
