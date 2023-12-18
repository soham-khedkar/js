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

function calculateCartPrice(...num1){
 return num1
}
//console.log(calculateCartPrice(200, 400, 500))
 const user = {
    username: "Soham",
    age:18
 }
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);


 }
 //handleObject(user)
 const newArr = [200, 400, 600, 800] 
 function returnSecondValue(getarray){
    return getarray[1]
 } 
  console.log(returnSecondValue(newArr))