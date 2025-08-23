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
