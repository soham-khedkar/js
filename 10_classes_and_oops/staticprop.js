class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    createId(){
       return '1234'
    }
}
const Soham = new User('sk')
console.log(Soham.createId())

class Teacher extends User {
    constructor(username,email){
    super(username)
    this.email = email
    }
}
const iphone = new Teacher('iphone','sk@google.com')
console.log(iphone.createId())