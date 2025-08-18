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

let result = sortedDrinks(drinks)
console.log(result)


