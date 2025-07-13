const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map);
for (const it of map) {
    console.log(it[0] ,`->`, it[1])
}
for (const [key,value] of map) {
    console.log(key ,`->`, value)
}


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val){
    console.log(val);
} )
coding.forEach( (item) => {
    console.log(item);
} )
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )