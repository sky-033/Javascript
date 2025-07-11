let name="SKY"     //always to be used ...modifiable
var name2="sky"     //scope problem not to be used
const name3="Sky"    //cannot be modified
name1="SUjal"        

console.table([name,name1,name2,name3])

console.log(typeof undefined)   //undefined
console.log(typeof null)        //object

let num="33"
let inti=Number(num)
console.log(inti);

let booli=Boolean(inti)
console.log(booli)

const id=Symbol('123')
const anId=Symbol('123')

console.log(id===anId);
