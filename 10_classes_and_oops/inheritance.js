class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password=password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const soham = new Teacher('soham','sk@google.com','4556')
soham.addCourse()
soham.logMe()
const heySoham = new User('jexter')
heySoham.logMe()
console.log(soham instanceof Teacher)