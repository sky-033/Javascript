let mySym=Symbol("key1")


let JsUser={
    name:"SKY",
    age:20,
    [mySym]:"UsingSymbol",
    location:"Manhattan",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(JsUser);

JsUser.greeting=function(){
    console.log(`hi there, ${this.name}`);
}

console.log(JsUser.greeting())


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {coursename,price,courseInstructor} = course

console.log(price);
