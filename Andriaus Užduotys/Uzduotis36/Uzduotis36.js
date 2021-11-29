// // Uzd 1
// function sayName() {
//     console.log("Indre")
// }
//
// sayName()
//
// function sayAge() {
//     console.log("31")
// }
//
// sayAge()
//
// function sayCity() {
//     console.log("Vilnius")
// }
//
// sayCity()
//
// // Uzd 2
//
// function sayOption(name, city, color) {
//     console.log(name, city, color)
// }
//
// sayOption("Indre", "Vilnius", "geltona")
// sayOption("Linas", "Raudonė", "mėlyna")
// sayOption("Vakarė", "Nida", "raudona")
//
// // Uzd 3
//
// function sayNumber(text) {
//     console.log(text.length / 3)
// }
// sayNumber("Mano batai buvo du")
//
//
// // Uzd 4
//
// const arr = []
//
// function addToArr(name) {
//     arr.push(name)
// }
// addToArr("Zodis")
// addToArr("Baltas")
//
// console.log(arr)
//
// // Uzd 5
//
// // Create a function that takes two numbers as arguments and return their sum.
// // addition(3, 2) ➞ 5
// // addition(-3, -6) ➞ -9
// // addition(7, 3) ➞ 10
//
// function countNumber (number1, number2){
//     console.log(number1 + number2)
// }
//
// countNumber (3,2)
// countNumber( -3,-6)
// countNumber(7,3)
//
// // Uzd 6
//
// // Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// // addition(0) ➞ 1
// // addition(9) ➞ 10
// // addition(-3) ➞ -2
//
// function addition (num){
//     console.log(num + 1)
// }
//
// addition(0)
// addition(9)
// addition(-3)
//
// // Uzd 7
//
// // Create a function that takes an array and returns the first element.
// // getFirstValue([1, 2, 3]) ➞ 1
// // getFirstValue([80, 5, 100]) ➞ 80
// // getFirstValue([-500, 0, 50]) ➞ -500
//
// function getFirstValue (numb){
//     console.log(numb[0])
// }
// getFirstValue([1, 2, 3])
// getFirstValue([80, 5, 100])
// getFirstValue([-500, 0, 50])
//
// // Uzd 8
// // Write a function that converts hours into seconds.
// // howManySeconds(2) ➞ 7200
// // howManySeconds(10) ➞ 36000
// // howManySeconds(24) ➞ 86400
//
// function howManySeconds (hours) {
//     console.log(hours * 3600)
// }
//
// howManySeconds(2)
// howManySeconds(10)
// howManySeconds(24)

// // Uzd 9
//
// // Write a function that returns the string "something" joined with a space " " and the given argument a.
// // giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// // giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// // giveMeSomething("something") ➞ "something something"
//
// function giveMeSomething (text){
//     console.log("Something" + " " + text)
// }
// giveMeSomething("is better than nothing")
// giveMeSomething("Bob Jane")
// giveMeSomething("something")
//
//
// // Uzd 10
//
// // Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// // lessThanOrEqualToZero(5) ➞ false
// // lessThanOrEqualToZero(0) ➞ true
// // lessThanOrEqualToZero(-2) ➞ true
//
// function lessThanOrEqualToZero(numb){
//     if (numb <= 0){
//         console.log(true)
//     }else {
//         console.log(false)}
// }
// //or console.log(numb <=0)
//
// lessThanOrEqualToZero(5)
// lessThanOrEqualToZero(0)
// lessThanOrEqualToZero(-2)
//
// // Uzd 11
//
// // Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// //
// // lessThan100(22, 15) ➞ true
// // lessThan100(83, 34) ➞ false
// // lessThan100(3, 77) ➞ true
//
// function lessThan100(num1, num2) {
//     console.log(num1 + num2 < 100)
// }
// lessThan100(22, 15)
// lessThan100(83, 34)
// lessThan100(3, 77)
//
//
// // Uzd 12
//
// // Create a function that returns true when num1 is equal to num2; otherwise return false.
// // isSameNum(4, 8) ➞ false
// // isSameNum(2, 2) ➞  true
// // isSameNum(2, "2") ➞ false
//
//
// function isSameNum (numb1, numb2){
//         console.log(numb1 === numb2)
// }
// isSameNum(4, 8)
// isSameNum(2, 2)
// isSameNum(2, "2")
//
//
// // Uzd 13
//
// // Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// // wins get 3 points
// // draws get 1 point
// // losses get 0 points
//
// // footballPoints(3, 4, 2) ➞ 13
// // footballPoints(5, 0, 2) ➞ 15
// // footballPoints(0, 0, 1) ➞ 0
//
// function footballPoints(win, draw, loss) {
//     let result = 0
//     result += win * 3
//     result += draw
//     console.log(result)
// }
//
// footballPoints(3, 4, 2)
// footballPoints(5, 0, 2)
// footballPoints(0, 0, 1)

// // Uzd 14
// // from inside the function change persons name age and add one interest
// // variable "person" should stay outside the function
//
// let person = {
//     name: "Andy",
//     surname: 'Dandy',
//     interests: ['sports', 'pc']
// }
//
// function change (){
//     person.name = "Joana";
//     person.age = 25;
//     person.interests.push("reading")
//     console.log(person)
// }
//
// change()
//
//
// // //Uzd 15
// let information = {
//     jobTitle: "taxi driver",
//     location: "London",
//     marriedTo: "John",
//     amountOfKids: '12'
// }
// function tellFortune(info) {
//     console.log(`You will be a ${info.jobTitle} in ${info.location}, and married to ${info.marriedTo} with ${info.amountOfKids} kids.`)
// }
//
// tellFortune(information)
//
// // pass information object to function tellFortune as argument,
// // outputs your fortune to the console like so: "You will be a X in Y, and married to Z with N kids."
//
// // // Uzd 16
// // let data = ['data1', 'data2', 'data3', 'data4']
// // // create a function which takes data as an argument, checks if data has more than 3 items
// // // in array, if yes multiply data array length by 8 and return the answer
//
// let data = ['data1', 'data2', 'data3', 'data4']
//
// function takeInfo (arrData){
//     if (arrData.length > 3){
//         console.log(arrData.length * 8)
//     }
// }
//
// takeInfo(data[0])
// takeInfo(data[1])
// takeInfo(data[2])
// takeInfo(data[3])
//
// // // Uzd 17
// // // create a function which checks if numbers (and types) are equal, return true or false
// // console.log(isSameNum(2,2))
// // console.log(isSameNum(8,21))
// // console.log(isSameNum(9,"9"))
//
// function isSameNum(num1, num2){
//
// console.log(num1===num2)
// }
// isSameNum(2,2)
// isSameNum(8,21)
// isSameNum(9,"9")

// Uzd 18
// //Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
//
// // console.log(convert(1, 3))
// // console.log(convert(2, 0))
// // console.log(convert(0, 0))
//
//
// function convert(hours, minutes) {
//     return (hours * 3600 + minutes * 60)
//
// }
//
// console.log(convert(1, 3))
// console.log(convert(2, 0))
// console.log(convert(0, 0))
//
// // Uzd 18
//
// function calculateDogAge(age) {
//     console.log(`Your doggie is ${age * 7} years old in dog years`)
// }
//
// calculateDogAge(3)
// calculateDogAge(8)
// calculateDogAge(12)
//
//
// // write function named calculateDogAge that:
// // takes 1 argumentL you puppy's age.
// // calculates your dog's age based on conversion rate of 1 human year to 7 dog years.
// // outputs the result to console log like so "Your doggie is (AGE) years old in dog years"
// // call the function three times with different sets of values - 3, 8, 12
//
//
// // Uzd 19
//
// /*
// In this challenge, a farmer is asking you
// to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
//
// The farmer has counted his animals and he gives you a subtotal
// for each species. You have to implement a function that returns the total number of legs of all the animals.
//
// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.
//
//  */
//
// function animals(chicken, cows, pigs) {
//     return (chicken * 2 + cows * 4 + pigs * 4)
// }
//
// console.log(animals(2, 3, 5))
// console.log(animals(1, 2, 3))
// console.log(animals(5, 2, 8))
//
//
// // Uzd 20
//
// //Create a function that takes three arguments prob, prize, pay
// // and returns true if prob * prize > pay; otherwise return false.
//
// function profitableGamble(prob, prize, pay) {
//     return (prob * prize > pay)
// }
//
// console.log(profitableGamble(0.2, 50, 9))
// console.log(profitableGamble(0.9, 1, 2))
// console.log(profitableGamble(0.9, 3, 2))

// Uzd 21

// Create a function that takes two strings as arguments and return either true or
// false depending on whether the total number of characters in the first
// string is equal to the total number of characters in the second string.

function comp (text1, text2){
    return text1.length === text2.length
}

console.log(comp("AB", "CD"))
console.log(comp("ABC", "DE"))
console.log(comp("hello", "edabit"))



// Uzd 22

//Create a function that returns true if a string is empty and false otherwise.

function isEmpty(txt){
    return txt.length === 0
}

console.log(isEmpty(""))
console.log(isEmpty("a"))
console.log(isEmpty(" "))


// Uzd 23

/*
A bartender is writing a simple program to determine whether
he should serve drinks to someone. He only serves drinks
to people 18 and older and when he's not on break.

Given the person's age, and whether break time is in session,
create a function which returns whether he should serve drinks.
 */

function shouldServeDrinks(age, brk){
    return (age >= 18  && brk === false ? "Duoda" : "Neduoda")
}

console.log(shouldServeDrinks(17, true))
console.log(shouldServeDrinks(19, false))
console.log(shouldServeDrinks(30, true))