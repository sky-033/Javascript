const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${user.username} , welcome to website`);
    }

}

// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})

// console.log(addTwo(3, 4))

const chai=()=>{
    console.log(this)
}
chai()

function chai1(){
    console.log(this)
}
chai1()

const chai2=function(){
    console.log(this)
}
chai2()