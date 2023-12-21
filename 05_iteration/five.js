const coding = ['js', 'ruby', 'java', 'python', 'cpp']
// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach((item) =>{
//     console.log(item);

// })
// function printME(item){
//     console.log(item)
// }
// coding.forEach(printME)

// coding.forEach( (item,index,arr)=>{
//  console.log(item,index,arr);
// })
const myCode = [
    {
        language:"Javascript",
        fileName:"js"
    },
    {
        language:"Python",
        fileName:"py"
    },
    {
        language:"C++",
        fileName:"cpp"
    },
]
myCode.forEach((item)=>{

    console.log(item.language);
})