function sayMyName (){
console.log("S")
console.log("O")
console.log("H")
console.log("A")
console.log("M")
}
//sayMyName();

//function addTwoNumbers(number1,number2){
  //  console.log(number1 + number2)
//}
function addTwoNumbers(number1,number2){
    //let result = number1+number2
    //return result;
    return number1+number2
}
 const result = addTwoNumbers(4,null);
 //console.log("Result:",result)

 function loginUserMessage (username="sam"){
    if(!username){
        console.log("Please enter username")
        return
    }
return `${username} just logged in` 
 }
 //console.log(loginUserMessage("Soham"))
console.log(loginUserMessage("soham"))