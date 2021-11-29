// write a function which takes obj.numbers as an argument, gets third number in numbers array with for loop
// rounds it to Ceil and puts to obj.roundedCeil, rounds it to floor and puts to obj.roundedFloor


// let obj = {
//     numbers: [1.1, 5.3, 6.68, 3, 2.5, 10.1],
//     roundedCeil: null,
//     roundedFloor: null
// }
//
// function count (num) {
//     for (let i = 0; i < num.length; i++) {
//         if (i === 2) {
//             obj.roundedCeil = Math.ceil([i])
//             obj.roundedFloor = Math.floor([i])
//             console.log((obj))
//         }
//     }
// }
// count (obj.numbers)


///////////////////////////////////////////


// check if stringVariable includes word 'doing' if yes create a function
// which takes stringVariable as an argument and counts how many spaces it has
// call that function


// let stringVariable = "Hello people, how are you doing ?"
// if (stringVariable.includes("doing")) {
//     function count(sent) {
//         let counter = 0;
//         for (let i = 0; i < sent.length; i++) {
//             if (sent[i] === " "){
//                 counter++;
//             }
//
//         }
//         console.log(counter)
//     }
// }
//
// count(stringVariable)

///////////////////////////////////////////


// create a function which goes through array rounds all numbers to Ceil and returns array
// with rounded numbers


// let arrayOfNumbers = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6]
//
// function numb() {
//     const arr = []
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         arr.push(Math.round(arrayOfNumbers[i]))
//     }
//     console.log(arr)
// }
//  numb()


//////////////////////////////////////////////


// create function which takes objectWithKeys as argument ant check which key includes
// word 'actually' in array, make function to return string "{key name} has actually in array"
//
// let objectWithKeys = {
//     firstOne: ['hi', 'what', 'is', 'good'],
//     second: ['im', 'doing', 'pretty', 'well'],
//     third: ['me', 'too', 'actually']
// }
//
// function check(words){
//     words = [...words.firstOne,...words.second,...words.third]
//       if (words.includes("actually")){
//           console.log(` ${words.indexOf("actually")} has actually in array`)
//       }
// }
//
// or
//
// function check (obj) {
//     const keys = Object.keys(obj)
//
//     for (let i = 0; i < keys.length; i++) {
//         if (obj[keys[i]].includes(`actually`)) {
//             console.log(` ${keys[i]} has actually in array`)
//         }
//
//     }
// }
// check (objectWithKeys)


///////////////////////////////////////////////

//
// Write a function that stutters a word as if someone is
// struggling to read it. The first two letters are
// repeated twice with an ellipsis ...
// and space after each, and then the word is pronounced with a question mark ?.
//  */
//
// function stutter (word){
//     console.log(word[0],word[1],"...", word[0], word[1], "...", word,"?")
// }
//
// // stutter("incredible") ➞ "in... in... incredible?"
// // stutter("enthusiastic") ➞ "en... en... enthusiastic?"
// // stutter("outstanding") ➞ "ou... ou... outstanding?"
//
// stutter("incredible")
// stutter("enthusiastic")
// stutter("outstanding")

///////////////////////////////////////////////////////////

// // Luke Skywalker has family and friends. Help him remind them who is who.
// // Given a string with a name, return the relation of that person to Luke.
//
// /*
//
// Person               Relation
// Darth Vader    father
// Leia            sister
// Han            brother in law
// R2D2            droid
//
//  */
//
// // relationToLuke("Darth Vader") ➞ "Luke, I am your father."
// // relationToLuke("Leia") ➞ "Luke, I am your sister."
// // relationToLuke("Han") ➞ "Luke, I am your brother in law."
//
//
// function relationToLuke (name){
//     if (name === "Darth Vader"){
//         console.log(`Luke, I am your father.`)
//     } if (name === "Leia"){
//         console.log("Luke, I am your sister.")
//     } if (name === "Han") {
//         console.log("Luke, I am your brother in law.")
//     }
//
// }
//
// relationToLuke("Darth Vader")
// relationToLuke("Leia")
// relationToLuke("Han")
//


/////////////////////////////////////////////////////////////

// // Create a function that takes an array with numbers and return an array with the elements multiplied by two.
//
// // getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]
// // getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
// // getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]
//
// function getMultipliedArr (arr){
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr2.push(arr[i] * 2)
//     }
//     console.log(arr2)
// }
//
// // or (be arr2)
// // arr[i] = arr[i] * 2
//
// getMultipliedArr([2, 5, 3])
// getMultipliedArr([1, 86, -5])
// getMultipliedArr([5, 382, 0])
//
//

///////////////////////////////////////////////////////////////

// // Create a function that takes an array of words and transforms it into an array of each word's length.
//
//
// // wordLengths(["hello", "world"]) ➞ [5, 5]
// // wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]
// // wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]
//
// // function wordLengths (words) {
// //     const arr = []
// //     for (let i = 0; i < words.length; i++) {
// //         arr.push(words[i].length)
// //     }
// //     console.log(arr)
// // }
//
// //or
//
// function wordLengths (words){
//     console.log(words.map(word => word.length))
// }
//
// wordLengths(["hello", "world"])
// wordLengths(["Halloween", "Thanksgiving", "Christmas"])
// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])


// function wordLengths (words){
//     console.log(words.map(word => word[word.length-1]))
// }
// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])


// Create a function that returns the string "Burp"
// with the amount of "r's" determined by the input parameters of the function.
//
function longBurp(ars) {
    let word = "Bu"
    for (let i = 0; i < ars; i++) {
        word += "r"
    }
        console.log(word+"p")
}

longBurp(3)
longBurp(5)
longBurp(9)


////////////////////////////////////////////////////////


// Create a function that takes a number and return an array
// of three numbers: half of the number, quarter of the number and an eighth of the number.

// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]
// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]


function halfQuarterEighth(numb) {
    const arr = [(numb / 2), (numb / 4), (numb / 8)]
    console.log(arr)
}

halfQuarterEighth(6)
halfQuarterEighth(22)
halfQuarterEighth(25)


////////////////////////////////////////////////////////


// For each of the 6 coffee cups I buy, I get a 7th cup free.
// In total, I get 7 cups. Create a function that takes n cups
// bought and return as an integer the total number of cups I would get.

// totalCups(6) ➞ 7
// totalCups(12) ➞ 14
// totalCups(213) ➞ 248

function totalCups(cup) {
    console.log(Math.floor(cup / 6 + cup))
}

totalCups(6)
totalCups(12)
totalCups(213)


//////////////////////////////////////////////////////////


// Create a function that takes a string and returns a string with spaces in between all of the characters.


// spaceMeOut("space") ➞ "s p a c e"
// spaceMeOut("far out") ➞ "f a r  o u t"
// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"

// function spaceMeOut(str) {
//     console.log(str.split(``).join(` `))
// }

//or
function spaceMeOut(str) {

    let space = " ";
    for (let i = 0; i < str.length; i++) {


    }
}

spaceMeOut("space")
spaceMeOut("far out")
spaceMeOut("elongated musk")