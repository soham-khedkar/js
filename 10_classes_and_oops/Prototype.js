// let myName = "Soham   "

// console.log(myName.truelength);
let myHeros = ["Thor","Spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: 'webshooter',

    getSpiderPower : function(){
        // console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.soham = function(){
    // console.log(`Soham is present in all objects`)
}
Array.prototype.heySoham = function(){
    // console.log(`Soham says hello`)
}
// heroPower.soham()
// myHeros.soham()
// myHeros.heySoham()
// heroPower.heySoham()

//  inheritance
const User = {
    name: "soham",
    email:"sk@google.com"
}
const teacher = {
    makeVideo: true
}
const teachingSupport = {
 isAvailable: false
}
const TASupport = {
    makeAssignment : 'JS Assignment',
    fulltime: true,
    __proto__ :teachingSupport
}

teacher.__proto__ = User

//  modern syntax 
Object.setPrototypeOf(teachingSupport,teacher)
let anotherUsername = "sohamhere    "
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is :${this.trim().length}`);
}

anotherUsername.truelength()
"soham".truelength()
"atharva".truelength()