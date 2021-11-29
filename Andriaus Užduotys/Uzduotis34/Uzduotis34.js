// Uzd 1
// const lyricsOne = "vejas man pasake vien tavo varda"
// const lyricsTwo = "bet taves surasti as negaliu,"
// const lyricsThree = "kai pilka kregzdute padangem nardo"
// const lyricsFour = "jai labai pavydziu zydru keliu"
// //
// //
// // Make lyricsTotalLength value to be length of all lyrics strings summed up
//
// let lyricsTotalLength = lyricsOne.length + lyricsTwo.length + lyricsThree.length + lyricsFour.length
//
// console.log(lyricsTotalLength)
//
//
// // let totalLengthInString;
// // Make totalLengthInString value to be " (NUMBER) is total length of lyrics"
//
// let totalLengthInString = `${lyricsTotalLength} is total length of lyrics`
// console.log(totalLengthInString)
//
//
// // make lyricsStringAverageLength value to be mathematical expression
// // which counts average length of lyrics string
//
// let lyricsStringAverageLength = lyricsTotalLength / 4
// console.log(lyricsStringAverageLength)
//
// // const firstLetters = [];
// // Get first letter of each lyrics string, add it array, using .push() or .unshift()
//
// const firstLetters = [];
//
// firstLetters.push (lyricsOne[0], lyricsTwo[0], lyricsThree[0],lyricsFour[0])
//
// console.log(firstLetters)


// const lastLetters = []
// Get last letter of each lyrics string, add it array, using .push() or .unshift()

// const lastLetters = [];
// lastLetters.push(lyricsOne[lyricsOne.length-1], lyricsTwo[lyricsTwo.length-1], lyricsThree[lyricsThree.length-1], lyricsFour[lyricsFour.length-1])
//
// console.log(lastLetters)

//
// const authorsNameHidden = [47, 'saldytuvas', ['5877', [654, 'Danute'], 99, '', [88, 6547, 686, 'paprika', 1, [44, 'Neimontaite']]]
// ]
// let authorsName = (authorsNameHidden[2][1][1]) + " "+(authorsNameHidden[2][4][5][1]);
//
// console.log(authorsName)
//
// // // Get authors name from array, make authorsName value to be string with authors name and surname

//Uzd 2
// const numbersRandom = [0, 5, 6, 8, 1, 2, 3, 7]
// const ascendingOrder = [4]
// // Using .push() and .unshift() put numbers from numbersRandom to ascendingOrder in ascending order
// // numbersRandom array should not be updated or edited
//
// ascendingOrder.push (numbersRandom[1], numbersRandom[2], numbersRandom[7], numbersRandom[3])
// ascendingOrder.unshift (numbersRandom[0], numbersRandom[4], numbersRandom[5], numbersRandom[6])
//
// console.log(ascendingOrder)
//
//Uzd 3
// const coldThings = ['hot', 'hot', 'cold', 'cold', 'cold']
// const hotThings = ['hot', 'hot']
// // get hot strings from coldThings array, using .shift() method, and .push() it to hotThings array
//
// hotThings.push (coldThings.shift(), coldThings.shift())
// console.log(hotThings)
//
// Uzd 4
// let arrayVariable = [2, 0, "any", [687, 'any', true, ['Black Cat', 0, false]]]
//
// let myCat = `arrayVariable has ${arrayVariable.length} items inside, I have ${arrayVariable[3][3].shift()}`
//
// console.log(myCat)
// // remove 'Black Cat' from arr, make myCat value to be "arrayVariable has (number) items inside, i have Black Cat"

//Uzd 5
//
// let person = {
//     name: "Indre",
//     surname: "Irbinskaite",
//     age: 31,
//     school: "Vytauto Zemkalnio gimnazija",
//     country: {
//         region: {
//          city: "Panevezys",
//         }
//     },
//     booksRed: ["Pirma knyga", "Antra knyga", "Trecia knyga"]
// }
//
// console.log(person)
//
// // log length of your name
// console.log(person.name.length)
//
// // log sum of you name and school
// console.log(person.name+" "+person.school)
//
// // create variable and make its value to be you age and city added together
// let nameAndCity = person.age + " "+ person.country.region.city
// console.log(nameAndCity)
//
// // create new variable and make it value to be first book from booksRed array
// let firstBook = person.booksRed[0]
// console.log(firstBook)

//Uzd 6
//
// let person = {
//     personName: "John",
//     livesIn: "America",
//     hasKids: 3,
//     married: true,
// }
// // check if person name is Mike, if not console log "this person name is (TRUE NAME)"
//
// if (person.personName === "Mike") {
// } else {
//     console.log(`This person name is ${person.personName}`)
// }
//
// // check if person lives in America, if yes console log "(Name) lives in America and has (amount of kids)"
// if (person.livesIn === "America"){
//     console.log(`${person.personName} lives in America and has ${person.hasKids}`)
// }
//
// // check if amount of kids is more than 5, if no console log "we need (subtract hasKids from 5) kids to reach 5"
// if (person.hasKids > 5){
// } else {
//     console.log(`We need ${5-person.hasKids} kids to reach 5`)
// }
// // check if person is married if yes log "(Name) is married lives in (livesIn) and has (hasKids) kids"
//
// if (person.married === true){
//     console.log(`${person.personName} is married lives in ${person.livesIn} and has ${person.hasKids} kids`)
// }
// //or (person.married){
// //     console.log(`${person.personName} is married lives in ${person.livesIn} and has ${person.hasKids} kids`)
// // }

//Uzd 7
//
// let data = {
//     arrayItems: ['Zodziai ivairus', "naujas sakinys", 'sakinys BE 858 SKAICIU'],
//     firstLetters: [],
//     counter: 254 * 3,
//     totalNumber: true,
// }
//
// // check if counter is more than 74 * 8 if yes console.log length of firstLetters array
//
// if (data.counter > 74*8){
//     console.log(data.firstLetters.length)
// }
//
// // console log first item from arrayItems in upperCase
// console.log(data.arrayItems[0].toUpperCase())
//
// // console log last item from arrayItems in lowerCase
// console.log(data.arrayItems[2].toLowerCase())
//
// // create a new key in data object to have Boolean type
// data.newOne = true
//
// // check if newly created key is true or false if true create one more key in data object with (random string)
//
// if (data.newOne) {
//     data.random = "Tekstas"
// }

// Uzd 8
//
// let numbers = ['first', 1, 2, 3, 4, 'last']
// let words = ['word', 'any', 'word', 'world']
//
// // make numbers array to have only numbers
//
// words.unshift(numbers.shift(), numbers.pop())
//
// console.log(numbers)
//
// // make words array to have only words
//
// console.log(words)
//
// // move items using - .pop() .shift() - .push(arg) .unshift(arg)


//Uzd 9


//
// let data = {
//     name: "Jerry",
//     hasToys: ['teddy bear', 'ball', 'car', 'soldier'],
//     yearsOld: 12,
//     birthDay: true,
//     totalToys: null,
//     friends: {
//         susana: "at grandparents",
//         tommy: "on pc",
//         brad: "playing football"
//     }
// }
//
// // check if Jerry is having his birthday if yes do things:
//
// // remove teddy bear from hasToys array
// if (data.birthDay){
//     data.hasToys.shift()
//     data.hasToys.push("ps4")
//     data.yearsOld++
//     data.totalToys = data.hasToys.length
//     console.log(Object.keys(data.friends))
//     console.log(data.hasToys)
// }
// // add "ps4" to end of hasToys array
// // increment yearsOld by one
// // make totalToys key to always show length of hasToys array}
// // log each of Jerry friends

// Uzd 10

//
// let person = {
//     name: "John",
//     age: 120,
//     alive: false,
//     interest: ['swimming', 'dancing']
// }
// //
// // Change Johns name to Jonas
// //
// console.log(person.name = "Jonas")
// //
// // Change his age to 30
// //
// console.log(person.age = 30)
// //
// // check if john is younger than 100 if yes change his alive status to true
// //
// if (person.age < 100){
//     console.log(person.alive = true)
// }
// // check if john is alive, if yes, add on more interest 'enjoying life' to array
// if (person.alive) {
//     console.log(person.interest.push("Enjoy life"))
// }


