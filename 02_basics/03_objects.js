//object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "Soham",
    [mySym]: "mykey1",
    age: 18,
    location: "Nagpur",
    email: "soham@google.com",
    isCool: true,
    lastLoginDays: ["Today","Daybeforetoday"]

}
//console.log(jsUser["location"])
//console.log(jsUser[mySym])
//Object.freeze(jsUser)
jsUser.email = "soham@chatgpt.com"
//console.log(jsUser)

jsUser.greeting1 = function(){
    console.log('Hello MF')
}
console.log(jsUser.greeting1())
jsUser.greeting2 = function(){
    console.log(`Hello there, ${this.name}`)
}
console.log(jsUser.greeting2())