// ES 6

class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encyptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const soham = new User("soham",'sk@gmail.com','456')
console.log(soham.encyptPassword());
console.log(soham.changeUsername());

// behind the scene

function User(username,email,password){
    this.username =username;
    this.email = email;
    this.password = password
}
User.prototype.encyptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return`${this.username.toUpperCase()}`
}
const sk = new User('sk','sk@google.com', "112")

console.log(sk.encyptPassword());
console.log(sk.changeUsername());