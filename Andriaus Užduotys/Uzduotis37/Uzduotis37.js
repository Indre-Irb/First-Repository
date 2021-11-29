// Uzd 1

// const arr = [6, 8, 4, 567, 8, 87, 5, 68, 28, 874, 6548, 654, 684]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] + 10)
// }

// for (let i = 0; i < 10; i++) {
//     console.log(arr)
// }

// for (let i = 0; i < 30; i++ ){
//     if (i > 20){
//         console.log(`Cycle index is ${i}`)
//     }
// }


// // go through array with for loop and flip booleans to opposite value
//
// let arrayOfBooleans = [true, false, false, true, true, true, false]
// for (let i = 0; i < arrayOfBooleans.length; i++) {
//     console.log(arrayOfBooleans [i] = !arrayOfBooleans[i])
// }


// // goe through array with for loop, if string is 'black mamba' console log
// // "(STRING VALUE) is (INDEX) in array, and is one of most poisonous snakes in the world"
//
// let getIndex = ['first', 'second', 'third', 'black mamba', 'fourth', 'fifth']
// for (let i = 0; i < getIndex.length; i++) {
//     if (getIndex[i] === "black mamba") {
//         console.log((`${getIndex[i]} is ${i} in array, and is one of most poisonous snakes in the world`))
//     }
// }
//
// /////////////////////////////////////////
//
//
// // create a functions which accepts array data as an argument,
// // loops over all items in array and console logs each of them
//
// let arrayOfStrings = ['Labas', 'vakaras', 'ponios', 'ir', 'ponai']
//
// function logitems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
//
// logitems(arrayOfStrings)
//
// //////////////////////////////////////////////////////
//
//
// // in function loop over numbers in array multiply each by 3
// // console log answer
//
// let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
// function multi() {
//
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         console.log(arrayOfNumbers[i] * 3)
//     }
// }
// multi()


// // create function do this in it:
// // with single for loop removes items from wagonsWIthCoal
// // and append them to wagonsOfGasoline after this done
// // check if wagonsWithCoal has any items, if not change coalCargo boolean to opposite
// // do the same with gasolineCargo key
// // console log modified object
//
// //
// let freightTrain = {
//     wagonsWithCoal: [1, 2, 3, 4, 5],
//     coalCargo: true,
//     wagonsOfGasoline: [],
//     gasolineCargo: false
// }
//
// function rmv(arr) {
//     for (let i = 0; i < arr.wagonsWithCoal[0]; i++) {
//         arr.wagonsOfGasoline.push(arr.wagonsWithCoal.shift())
//         console.log(arr.wagonsWithCoal, arr.wagonsOfGasoline)
//         if (arr.wagonsWithCoal < 1) {
//             arr.coalCargo = !arr.coalCargo
//         }
//         if (arr.wagonsOfGasoline < 1) {
//             arr.coalCargo = !arr.coalCargo
//             arr.gasolineCargo = !arr.gasolineCargo
//         }
//     }
// }
//
// rmv(freightTrain)
//
//
// //////////////////////////////////////////////////
//
//
// // crete a function which takes textObject.arrayWithWords as an argument
// // goe through array with words using for loop
// // take first letter of each word and add to aWord key in textObject
// // console log aWord key after all is done
//
//
// let textObject = {
//     arrayWithWords: ['firstWord', 'ipad', 'snow is snowing', 'hamburger'],
//     aWord: ''
// }
//
// function multi(fun) {
//     for (let i = 0; i < fun.length; i++) {
//         textObject.aWord += fun[i][0]
//         console.log(textObject.aWord)
//     }
// }
//
// multi(textObject.arrayWithWords)


// // Create a function that takes in a word and determines
// // whether or not it is plural. A plural word is one that ends in "s".
//
// function isPlural(word) {
//     if (word[word.length - 1] === "s") {
//         console.log(`Plural`)
//     } else console.log(`Not`)
// }
//
// isPlural("changes")
// isPlural("change")
// isPlural("dudes")
// isPlural("magic")
//
//
// /////////////////////////////////////////////////
//
//
// // Create a function that takes a string (a random name).
// // If the last character of the name is an "n", return true, otherwise return false.
//
// function isLastCharacterN(word1) {
//     return console.log(word1[word1.length - 1] === 'n')
// }
//
//
// isLastCharacterN("Aiden")
// isLastCharacterN("Piet")
// isLastCharacterN("Bert")
// isLastCharacterN("Dean")
//
//
// //////////////////////////////////////////////
//
//
// // A typical car can hold four passengers and one driver,
// // allowing five people to travel around. Given n number of people,
// // return how many cars are needed to seat everyone comfortably.
//
//
// function carsNeeded(people) {
//     const carsNeeded = people / 5
//     console.log(Math.ceil(carsNeeded))
// }
//
// carsNeeded(5)
// carsNeeded(11)
// carsNeeded(0)
//
//
// ///////////////////////////////////////////////
//
//
// // Create a function that takes an array and a string as arguments and return the index of the string.
//
//
// function findIndex(arr, str) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === str)
//             console.log(i)
//     }
// }
//
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh")
// findIndex(["Red", "blue", "Blue", "Green"], "blue")
// findIndex(["a", "g", "y", "d"], "d")
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")


//////////////////////////////////////////////


// Create a function to concatenate two integer arrays.

// function concat(arr1, arr2){
//     console.log(arr1 +"," + arr2)
// }
//
// concat([1, 3, 5], [2, 6, 8])
// concat([7, 8], [10, 9, 1, 1, 2])
// concat([4, 5, 1], [3, 3, 3, 3, 3])


//////////////////////////////////////////////////


// // Write a function to check if an array contains a particular number.
//
// function check(num, num1) {
//     let parti = "no";
//     for (let i = 0; i < num.length; i++) {
//         if (num1 === num[i]) {
//             parti = 'Yes';
//         }
//     }
//     console.log(parti)
// }
//
// function check(arr, numb) {
//     return arr.includes(numb);
// }
//
// console.log(check([1, 2, 3, 4, 5], 3))
// console.log(check([1, 1, 2, 1, 1], 3))
// console.log(check([5, 5, 5, 6], 5))
// console.log(check([], 5))



///////////////////////////////////////////////


// Create a function that searches for the index of a given item in an array.
// If the item is present, it should return the index, otherwise, it should return -1.

// function search(num, num1) {
//     let idx = -1;
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] === num1) {
//             idx = i;
//         }
//     }
//     console.log(idx)
// }


// function search (num, num1){
//     return (num.indexOf(num1))
// }
//
// console.log(search([1, 2, 3, 4], 3))
// console.log(search([2, 4, 6, 8, 10], 8))
// console.log(search([1, 3, 5, 7, 9], 11))
//


/////////////////////////////////////////////////


// Create a function that returns true if a string contains any spaces.

//  function hasSpaces(str) {
//      return (str.indexOf(" "))
//  }
// console.log(hasSpaces("hello"))
//      console.log(hasSpaces("hello, world"))
//      console.log(hasSpaces(" "))
//      console.log(hasSpaces(""))
//      console.log(hasSpaces(",./!@#"))



///////////////////////////////////////////////////////


// // Given two arrays, which represent two sandwiches, return whether
// // both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
//
// function hasSameBread(bread, bread1) {
//     return (bread[0] === bread1[0] && bread[bread.length - 1] === bread1[bread1.length - 1] ? "yes" : "No")
//
// }
//
// console.log(hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
// ))
//
//
// console.log(hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
// ))
//
//
// console.log(hasSameBread(
//     ["toast", "cheese", "toast"],
//     ["brown bread", "cheese", "toast"]
// ))

//////////////////////////////////////////////////////


/*

Create a function that takes an object
as an argument and returns a string with facts about
the city. The city facts will need to be extracted
from the object's three properties:

name
population
continent

The string should have the following format:
X has a population of Y and is
situated in Z (where X is the city name,
Y is the population and Z is the continent the city is situated in).

 */
//
// console.log(cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe"
// }))
//
// console.log(cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//     continent: "Asia"
// }))
//
// function cityFacts(city) {
//     return (`${city.name} has a population of ${city.population} and is
//     situated in ${city.continent}.`)
// }

//////////////////////////////////////////////////////


//Creates a function that takes a string and returns the concatenated first and last character.
//
// function firstLast(letter){
//     return (letter[0] + letter[letter.length-1])
// }
//
// console.log(firstLast("ganesh"))
// console.log(firstLast("kali"))
// console.log(firstLast("shiva"))
// console.log(firstLast("vishnu"))
// console.log(firstLast("durga"))
