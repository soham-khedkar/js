const myNum =[1,2,3]

// const myTotal = myNum.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },0)
const myTotal = myNum.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js tutorial",
        price: 299
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile dev ",
        price: 5999
    },
    {
        itemName: "data science",
        price: 699
    },
    {
        itemName: "ml",
        price: 1299
    },
]
const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(priceToPay)