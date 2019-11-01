import "./styles.css";
document.getElementById("app").innerHTML = `
<h1>Thanks for learning❤️</h1>
<div>
 This is just placeholder text, check the console to view your progress
</div>
`;

// Declare a function named "greet" that takes in a "name" argument

function greet1(name) {
  return `Hello, ${name}.`; // use backtics to inject variables
}

// call the function with a value
greet1("Michael");

//uncomment to see the output:
// console.log(greet1("Michael"))

///// 👇🏾The same function, but with an arrow-function 👇🏾/////

// simplified:
const greet2 = name => `Hello, ${name}.`;

greet2("Tony");

// EXAMPLE:
//// 🤯🤯HOW DID WE GET SO CONSISE?🤯🤯///

/*
1. Create a variable with a name of your function
2. Set the value to an anonymous function declaration
3. Convert the function declaration to an arrow function
4. optional parens around single-arguments
5. Simple returns don't need the "return" keyword or braces
*/

const isShopping = (isShoppingNow, callback) => {
  console.log(
    isShoppingNow ? "Yep, they are shopping" : "No, they are not shopping"
  );
  callback();
};

isShopping(true, () => console.log("doneT"));
isShopping(false, () => console.log("doneF"));

const describePet = petObj => {
  console.log(
    `This pet is called ${petObj.name} and is a breed of ${petObj.breed}`
  );
};

const describePetDestructured = ({ name, ...rest }) => {
  console.log(`This pet is called ${name} and is a breed of ${rest.breed}`);
};

const pet = {
  name: "Chester",
  breed: "'big'"
};
describePet(pet);
describePetDestructured(pet);
