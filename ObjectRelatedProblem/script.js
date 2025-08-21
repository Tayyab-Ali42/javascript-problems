// OBJECT PROBLEMS
// * PROBLEM 1 Drink Sorting
// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// let drinks = [
//     { name: "lemonade", price: 50 },
//     { name: "lime", price: 10 },
//     { name: "lime 2", price: 6 },
//     { name: "lime 2", price: 100 },
// ]

// function sortedDrinks(drinks) {

//     drinks.sort((a, b) => a.price - b.price)
//     return drinks

// }

// let result = sortedDrinks(drinks)
// console.log(result)


// PROBLEM 2 Sign Your Name
// * Sign Your Name


// The police send you the electronic statement again for you to sign. This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well. Unfortunately, the document is still protected against new entries...

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included. Your task is, given an object, prevent new properties from being added to that object, but you should still be able to change the value of the existing properties.



const obj = { yourSignature: "" };

function signYourName(obj) {
    // write your code here

    Object.seal(obj)

    obj.yourSignature = "newSign";
    obj.spouseSignature = "Nice Try";
    return obj;

} // ➞  { yourSignature: "Whatever" }

let result = signYourName(obj)
console.log(result.yourSignature)

