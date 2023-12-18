const user ={
    username:"Soham",
    age:18,

    welcomeMessage: function(){
        console.log(`${this.username},Welcome to my world`);
        console.log(this)
    }

}
//user.welcomeMessage()
//user.username ="Sam"
//user.welcomeMessage();

//console.log(this);
//function hi(){
    //let username="soham"
    //console.log(this.username);

//}
//hi();

const hi = () => {
    let username ="soham"
    //console.log(this) 
}

//hi()

//const addTwo = (num1,num2)=>  num1+num2

//const addTwo = (num1,num2)=>  (num1+num2)
const addTwo = (num1,num2)=> ( {username:"soham"})

//console.log(addTwo(3,4))

