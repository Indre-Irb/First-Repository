// // Create a function that takes an array and returns the sum of all numbers in the array.
//
// function getSumOfItems(num) {
//     let sum = 0;
//     num.map(numb => sum += numb)
//     console.log(sum)
// }
//
// getSumOfItems([2, 7, 4])
// getSumOfItems([45, 3, 0])
// getSumOfItems([-2, 84, 23])

/////////////////////////////////////////////////////////

// // Given a number and an object with min and max properties,
// // return true if the number lies within the given range (inclusive).
//
// function isInRange(num1, prop) {
//     if (num1 >= prop.min && num1 <= prop.max) {
//         console.log("True")
//     } else {
//         console.log("False")
//     }
// }
//
// isInRange(4, {min: 0, max: 5})
// isInRange(4, {min: 4, max: 5})
// isInRange(4, {min: 6, max: 10})
// isInRange(5, {min: 5, max: 5})


////////////////////////////////////////////////////////////

// //Create a function that returns an array of booleans from a
// // given number by iterating through the number one digit
// // at a time and appending true into the array if the digit is 1 and false otherwise.
//
// function integerBoolean(num2) {
//     const arr = []
//     for (let i = 0; i < num2.length; i++) {
//         arr.push(num2[i] === "1")
//     }
//     console.log(arr)
// }
//
//
// integerBoolean("100101")
// integerBoolean("10")
// integerBoolean("001")

/////////////////////////////////////////////////////////

// // Create a function that returns the number of syllables in a
// // simple string. The string is made up of short repeated words
// // like "Lalalalalalala" (which would have 7 syllables).
//
// function countSyllables(word) {
//     word = word.toLowerCase()
//     const cyl = word[0] + word[1]
//     let counter = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] + word[i+1] === cyl) {
//             counter++
//         }
//     }
//     console.log(counter)
// }
//
//
// countSyllables("Hehehehehehe")
// countSyllables("bobobobobobobobo")
// countSyllables("NANANA")

// Create a function which returns the length of a string, WITHOUT using String.length property.

// function countLength(str) {
//     const strArr = [...str]
//     let counter = 0
//     strArr.map(x => counter++)
//     console.log(counter)
// }
//
// countLength("Hello World")  //➞ 11
// countLength("Edabit") //➞ 6
// countLength("wash your hands!") //➞16

//////////////////////////////////////////////////////////

// Create a function that returns a number, based on the string provided.

// function word(str1) {
//     const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
//     console.log(arr.indexOf(str1))
// }
//
// word("one") //➞ 1
// word("two") //➞ 2
// word("nine") //➞ 9


///////////////////////////////////////////////////////////

//Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.


// function filterArray(arr) {
//     const arr2 = []
//     arr.map(x => {
//         if (Number.isInteger(x)) {
//             arr2.push(x)
//         }
//     } )
//     console.log(arr2)
// }
//
// filterArray([1, 2, 3, "a", "b", 4]) //➞ [1, 2, 3, 4]
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) //➞ [0, 1729]
// filterArray(["Nothing", "here"]) //➞ []


///////////////////////////////////////////////////////////

// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

// function newGo(num) {
//     let str = ""
//     if (num >= 1 && num < 60) {
//     for (let i = 0; i < num; i++) {
//             str += "-"
//         }
//     }
//     console.log(str)
// }
//
// newGo(1) //➞ "-"
// newGo(5) //➞ "-----"
// newGo(3) //➞ "---"


//////////////////////////////////////////////////////////

// Create a function that adds a string ending to each member in an array.

// function addEnding(word, word1) {
//     // const arr = []
//     // for (let i = 0; i < word.length; i++) {
//     //    let word2 = word[i] + word1
//     //     arr.push(word2)
//     //     console.log(arr[i])
//     // }
//
//
// // or
//
// const result = word.map(letters => letters + word1)
// console.log(result)
// }
//
// addEnding(["clever", "meek", "hurried", "nice"], "ly")
// //➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// addEnding(["new", "pander", "scoop"], "er")
// //➞ ["newer", "panderer", "scooper"]
// addEnding(["bend", "sharpen", "mean"], "ing")
// //➞ ["bending", "sharpening", "meaning"]

/////////////////////////////////////////////////////////


//Create a function to multiply all of the values in an array by the amount of values in the given array.

// function multiplyByLength (num){
//     for (let i = 0; i < num.length; i++) {
//        let num2 = num[i] * num.length
//         console.log(num2)
//     }
// }
//
// multiplyByLength([2, 3, 1, 0]) //➞ [8, 12, 4, 0]
// multiplyByLength([4, 1, 1]) //➞ ([12, 3, 3])
// multiplyByLength([1, 0, 3, 3, 7, 2, 1]) //➞  [7, 0, 21, 21, 49, 14, 7]
// multiplyByLength([0]) //➞ ([0])


/////////////////////////////////////////////////////////


// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// function countdown(num) {
//     const arr = []
//     for (let i = num; i >= 0; i--) {
//         arr.push(i)
//     }
//     console.log(arr)
// }
//
// countdown(5) //➞ [5, 4, 3, 2, 1, 0]
// countdown(1) //➞ [1, 0]
// countdown(0) //➞ [0]


///////////////////////////////////////////////////////


// Create a function that takes two arguments (item, times). The first argument (item) is the item
// that needs repeating while the second argument (times) is the number of times the item is
// to be repeated. Return the result in an array.


// function repeat (items, times){
//     for (let i = 0; i < times; i++) {
//         console.log(items)
//
//     }
// }
//
// repeat("edabit", 3) //➞ ["edabit", "edabit", "edabit"]
// repeat(13, 5) //➞ [13, 13, 13, 13, 13]
// repeat("7", 2) //➞ ["7", "7"]
// repeat(0, 0) //➞ []


////////////////////////////////////////////////////


//In this exercise you will have to:


//Take a list of names.
//Add "Hello" to every name.
//Make one big string with all greetings.
//The solution should be one string with a comma in between every "Hello (Name)".

// function greetPeople(name){
//     let str = ""
//     for (let i = 0; i < name.length; i++) {
//         const comma = i === name.length-1 ? "": ", "
//         str += "Hello " + name[i] + comma
//     }
//     console.log(str)
// }
//
// greetPeople(["Joe"]) //➞ "Hello Joe"
// greetPeople(["Angela", "Joe"]) //➞ "Hello Angela, Hello Joe"
// greetPeople(["Frank", "Angela", "Joe"]) //➞ "Hello Frank, Hello Angela, Hello Joe"

///////////////////////////////////////////////////


// Create a function that repeats each character in a string n times.

// function repeat(word, times) {
//     let result = []
//     for (let i = 0; i < word.length; i++) {
//         result.push(word[i].repeat(times))
//     }
//     console.log(result.join(""))
// }
//
//     or
//     let result = ""
//     for (let i = 0; i < word.length; i++) {
//         for (let j = 0; j < times; j++) {
//             result += word[i]
//         }
//     }
//     console.log(result)
// }
//
// repeat("mice", 5) //➞ "mmmmmiiiiiccccceeeee"
// repeat("hello", 3) //➞ "hhheeellllllooo"
// repeat("stop", 1) //➞ "stop"


////////////////////////////////////////////////


// Create a function that takes in two arrays: the array of user-typed words,
// and the array of correctly-typed words and outputs an array containing
// 1s (correctly-typed words) and -1s (incorrectly-typed words).

// function correctStream (words, words1) {
// for (let i = 0; i < words.length; i++) {
//     if (words[i] === words1[i]){
//         console.log("1")
//     } else {
//         console.log("-1")
//     }
// }
// }
// or
// const res = words.map((item, index) => {
//     return item === words1[index] ? 1 : -1
// })
// console.log(res)
// }
//
// correctStream(
//     ["it", "is", "find"],
//     ["it", "is", "fine"]
//     ) //➞ [1, 1, -1]
//
//
// correctStream(
//     ["april", "showrs", "bring", "may", "flowers"],
//     ["april", "showers", "bring", "may", "flowers"]
//     ) //➞ [1, -1, 1, 1, 1]


///////////////////////////////////////////


// Create a function that filters out an array of state names into two categories based on the second parameter.


// Abbreviations abb
// Full names full


// function filterStateNames(name, par) {
//         if (par === "abb"){
//             console.log(name.filter(name => name.length < 3))
//         } else {
//             console.log(name.filter(name => name.length >= 3))
//         }
// }
//or
//     const result = []
//     if (par === "abb") {
//         for (let i = 0; i < name.length; i++) {
//             if (name[i].length === 2) {
//                 result.push(name[i])
//             }
//         }
//     } else {
//         for (let i = 0; i < name.length; i++) {
//             if (name[i].length !== 2) {
//                 result.push(name[i])
//             }
//
//         }
//     }
//     console.log(result)
// }
//
//
// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
// //➞ ["CA", "NY"]
//
// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
// //➞ ["Arizona", "Nevada"]
//
// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
// //➞ ["MT", "NJ", "TX", "ID", "IL"]
//
// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")
// //➞ []
//

//////////////////////////////////////////////////


// Hamming distance is the number of characters that differ between two strings.


// function hammingDistance (letter1, letter2) {
//     let counter = 0
//     for (let i = 0; i < letter1.length; i++) {
//         if (letter1[i] !== letter2[i] ? counter++ : null)
//             }
// console.log(counter)
// }
//
// hammingDistance("abcde", "bcdef")
// hammingDistance("abcde", "abcde")
// hammingDistance("strong", "strung")


////////////////////////////////////////////////////


//Given a string of letters, how many capital letters are there?
// function capitalLetters (str){
//     const arr = []
//    let counter = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i].toUpperCase() ){
//            counter++
//         }
//     }
//     console.log(counter)
// }
//
// capitalLetters("fvLzpxmgXSDrobbgMVrc") //➞ 6
// capitalLetters("JMZWCneOTFLWYwBWxyFw") //➞ 14
// capitalLetters("mqeytbbjwqemcdrdsyvq") //➞ 0


///////////////////////////////////////////////////////


// Create a function that will remove the letters "a", "b" and "c"
// from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

// function removeABC(word) {
//     let let1 = "a"
//     let let2 = "b"
//     let let3 = "c"
//     if (!word.includes(let1) && !word.includes(let2) && !word.includes(let3)) {
//         console.log("null")
//     } else {
//         for (let i = 0; i < word.length; i++) {
//             if (word[i] === let1 || word[i] === let2 || word[i] === let3) {
//                 word = word.split(let1).join("")
//                 word = word.split(let2).join("")
//                 word = word.split(let3).join("")
//                 console.log(word)
//             }
//         }
//     }
// }
//or

// function removeABC (word) {
//     let result = ""
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] !== "a" && word[i] !== "b" && word[i] !== "c") {
//             result += word[i]
//         }
//     }
//     console.log(result)
// }
//
// removeABC("This might be a bit hard") //➞ "This might e  it hrd"
// removeABC("hello world!") //➞ null
// removeABC("") // ➞ null


/////////////////////////////////////////////////////


// Create a function that takes an array of strings and returns an array with
// only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// function numInStr(arr) {
//      let r = /\d+/;
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i].match(r))
//         console.log(arr[i])
//     }
// }
//or
//
// function numInStr (arr) {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         let hasNum = false
//         for (let j = 0; j < arr[i].length; j++) {
//             if (Number(arr[i][j])){
//                 hasNum = true
//             } else {
//             }
//         }
//         if (hasNum) {
//             result.push(arr[i])
//         }
//     }
//     console.log(result)
// }
//
// numInStr(["1a", "a", "2b", "b"]) //➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) //➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) //➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) //➞ ["test1"]


/////////////////////////////////////////////////


// Create a function that finds each number in the given array that is
// greater than every number that comes after it. Your solution should return an array of the number(s) that meet these criteria.

// function leader(num) {
//     let result = []
//     for (let i = 0; i < num.length; i++) {
//         let wrongNum = false
//         for (let j = i+1; j < num.length; j++) {
//             if (num[i] < num[j]) {
//                 wrongNum = true
//             }
//         }
//             if (!wrongNum) {
//                 result.push(num[i])
//             }
//         }
//     console.log(result)
// }
//
//
// leader([2, 3, 20, 15, 8, 3]) //➞ [20, 15, 8, 3]
// // Note that 20 is greater than all the elements to it's
// // right side, similarly 15 and so on.
//
// leader([2, 3, 20, 15, 8, 25, 3]) // ➞ [25, 3]
// // Note that 20 cannot be added because it is not greater than 25.
//
// leader([1, 2, 3, 4, 5]) //➞ [5]
// // 5 is technically greater than the (zero) remaining items.
//
// leader([8, 7, 1, 2, 10, 3, 5]) //➞[10, 5]
// // 10 is greater than all items to the right of it, so include.
// // 3 is not greater than all items to the right of it, so exclude.
// // 5 is greater than the remaining items, so include