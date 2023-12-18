//Immediately Invoked Function Expressions(iife)

(function one(){
    //named iife
    console.log("DB Connected")
})();

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("Soham")