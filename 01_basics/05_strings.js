const name = "soham"
const repoCount = 10
//console.log(name + repocount+ "Value");

console.log(`Hello there my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sk-jexter')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));


 const newString = gameName.substring(0, 4) 
 console.log(newString);

 const anotherString = gameName.slice(-6, 4)
 console.log(anotherString);
 
 const newStringOne = "     skjexter   "
 console.log(newStringOne)
 console.log(newStringOne.trim());

 const url = "https://soham.com/soham%20khedkar"

console.log(url.replace("%20", "-"))
console.log(url.includes("soham"))

console.log(gameName.split('-'))