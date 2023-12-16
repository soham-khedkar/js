const marvelHeros = ["THOR", "IRONMAN", "SPIDERMAN"]
const dcHeros = ["FLASH","SUPERMAN","BATMAN"]

marvelHeros.push(dcHeros)

//console.log(marvelHeros)
//const allHeros = marvelHeros.concat(dcHeros)
//console.log(allHeros)

//Concat method does add array elements and results its in a new array so we need to store it in new variable

const allNewHeros = [...marvelHeros, ...dcHeros]
//console.log(allNewHeros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,8]]]
const realAnotherArray = anotherArray.flat(Infinity)
//console.log(realAnotherArray)

//console.log(Array.isArray("Soham"))
//console.log(Array.from("Soham"))
//console.log(Array.from({name: "Soham"}))

let score1 = 100
let score2= 200
let score3 = 300
console.log(Array.of(score1,score2,score3))