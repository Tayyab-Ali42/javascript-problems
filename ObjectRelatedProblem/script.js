// OBJECT PROBLEMS
// * PROBLEM 1 Drink Sorting
// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "lime 2", price: 6 },
    { name: "lime 2", price: 100 },
]

function sortedDrinks(drinks) {

    drinks.sort((a, b) => a.price - b.price)
    return drinks

}

let Drinksresult = sortedDrinks(drinks)
console.log(Drinksresult)


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



//  PROBLEM 3 
// * Calculate Difference

// The insurance guy calls again and apologizes.They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses(for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

function calculateDifference(obj, diffirence) {
    let total = 0
    for (const i in obj) {
        total += obj[i]
    }

    let loss = total - diffirence
    return loss > 0 ? loss : 0;
}


console.log(calculateDifference({ "baseball bat": 20 }, 5))// ➞ 15
console.log(calculateDifference({ skate: 10, painting: 20 }, 19))//  ➞ 11
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400))// ➞ 1


// * PROBLEM 4 Scrabble Hand
// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.


function scrabbleHand(tiles) {
    // Sort by highest score first
    tiles.sort((a, b) => b.score - a.score);

    // Take the top 7 tiles only
    let hand = tiles.slice(0, 7);

    // Sum their scores
    let maximumScore = 0;
    for (const tile of hand) {
        maximumScore += tile.score;
    }

    return `The player's maximum score from playing 7 tiles would be ${maximumScore}`;
}

console.log(scrabbleHand([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
    { tile: "E", score: 1 },
    { tile: "E", score: 1 },
]))


console.log(scrabbleHand([
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 }
]))


// PROBLEM 5 Printer Levels
// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.


// function inkLevels(inkLevels) {
//     for (const key in inkLevels) {

//     }
// }

// console.log(inkLevels({
//     "cyan": 23,
//     "magenta": 12,
//     "yellow": 10
// }))
// console.log(inkLevels({
//     "cyan": 432,
//     "magenta": 543,
//     "yellow": 777
// }))

// console.log(inkLevels({
//     "cyan": 700,
//     "magenta": 700,
//     "yellow": 0
// }))


//  * PROBLEM 6

// Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

function addName(obj, petName, value) {
    return { ...obj, [petName]: value }
}



console.log(addName({}, "Brutus", 300)) // ➞ { Brutus: 300 }
console.log(addName({ piano: 500 }, "Brutus", 400))// ➞ { piano: 500, Brutus: 400 }
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)) // ➞ { piano: 500, stereo: 300, Caligula: 440 }


// * PROBLEM 7

// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

function checkGeneration(numb, char) {
    let greatGenCount = 0;

    // ME
    if (numb === 0) return "me!";

    // FEMALE descendants
    if (numb === 1 && char === "f") return "daughter";
    if (numb === 2 && char === "f") return "granddaughter";
    if (numb > 2 && char === "f") {
        greatGenCount = numb - 2;
        return `${"great ".repeat(greatGenCount)}granddaughter`;
    }

    // MALE descendants
    if (numb === 1 && char === "m") return "son";
    if (numb === 2 && char === "m") return "grandson";
    if (numb > 2 && char === "m") {
        greatGenCount = numb - 2;
        return `${"great ".repeat(greatGenCount)}grandson`;
    }

    // FEMALE ancestors
    if (numb === -1 && char === "f") return "mother";
    if (numb === -2 && char === "f") return "grandmother";
    if (numb < -2 && char === "f") {
        greatGenCount = Math.abs(numb) - 2;
        return `${"great ".repeat(greatGenCount)}grandmother`;
    }

    // MALE ancestors
    if (numb === -1 && char === "m") return "father";
    if (numb === -2 && char === "m") return "grandfather";
    if (numb < -2 && char === "m") {
        greatGenCount = Math.abs(numb) - 2;
        return `${"great ".repeat(greatGenCount)}grandfather`;
    }
}
console.log(checkGeneration(-3, "m")) // ➞ "great grandfather"
console.log(checkGeneration(1, "f"))// ➞ "daughter"
console.log(checkGeneration(2, "f"))// ➞ "granddaughter"
