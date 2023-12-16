const Bumble = new Object()
//console.log(Bumble)
Bumble.id = "4522"
Bumble.name = "Bruhh"
Bumble.isCool = true

//console.log(Bumble)

const regularUser = {
    email:"soham@google.com",
    fullname: {
        userFullName: {
            firstname:"Soham",
            lastname:"Khedkar"
        }
    }
}
//console.log(regularUser.fullname.userFullName.lastname)

const obj1 = {1:"A",2:"b"}
const obj2 = {3:"C",4:"D"}
const obj4 = {5:"A",6:"D"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({}, obj1, obj2,obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const users = [
    {
        id:1,
        email:"sk@gmail.com"
    },
    {

    },
    {

    },
]
//console.log(users[1].email)
//console.log(Bumble)
//console.log(Object.keys(Bumble))
//console.log(Object.entries(Bumble))
//console.log(Bumble.hasOwnProperty('isCool'))


const course = {
    courseName: "how to rizz up girls",
    price: "Worth your life bruh",
    courseInstructor: "andrew tate"
}
const {courseInstructor} = course
//console.log(courseInstructor)

const {courseInstructor:instructor} = course
//console.log(instructor);

//{
   // name:"Soham",
    //courseName:"How to get your life f",
    //price:"I wont charge you dude"
//}

