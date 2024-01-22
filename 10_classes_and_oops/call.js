function  setUserName(username){
    // complex DB calls 
    this.username = username
    console.log("called");
}
function createUser(username,email,password){
    setUserName.call(this,username)
    
    this.email = email
    this.password = password
}
const soham = new createUser('soham','sk@google.com','1234')
console.log(soham)