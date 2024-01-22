class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return `${this._email.toUpperCase()}whoisthat`
    }
    set email(value){
      this._email = value
    }
    get password(){
        return `${this._password}sk`
    }
    set password(val){
        this._password = val
    }
}

const soham = new User("sohamkhedkar@gmail.com",'abc');
console.log(soham.password)
console.log(soham.email)