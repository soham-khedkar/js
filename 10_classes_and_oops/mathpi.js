const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor)
const soham = {
    name: 'sk',
    age :18,
    isAvaialble : true,

    makeLeader: function(){
        console.log('is capable')
    }
}

console.log(Object.getOwnPropertyDescriptor(soham,"name"));
Object.defineProperty(soham,'age',{
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(soham,"name"));


for(const[key,value] of Object.entries(soham)){
    if(typeof value !== 'function'){
        console.log(`${key}; ${value}`)
    }
}