const user = {
    username: "Soham",
    age: 18,
    loggedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username:${this.username}`)
        // console.log(this)
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)
function User(username, loginCount, issLoggedIn){
    this.username = username 
    this.loginCount = loginCount
    this.issLoggedIn = issLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}

const userOne = new User("soham", 14, true)
const userTwo = new User("sagar", 16, false)
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);


