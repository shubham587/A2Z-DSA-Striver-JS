// count the char in the string 

// let str = "abbbhhgggsgeh"
// let countStr = "agbhsd"

// let str = "abbbhhgggsgeh".toUpperCase()
// let countStr = "agbhsd".toUpperCase()

let str = "aAbBbHHgggsgeh"
let countStr = "aBHbhsd"

// const hash = new Array(26).fill(0)
const hash = new Array(256).fill(0) //if the string having both upper and lower case

// pre-storing
for(let i=0; i<str.length; i++){
    // hash[str[i].charCodeAt(0) - "a".charCodeAt(0)] += 1 //for Lower Case
    // hash[str[i].charCodeAt(0) - "A".charCodeAt(0)] += 1 //for Upper Case
    hash[str[i].charCodeAt(0)]++ //for comb of lower and upper case
}

for(let i=0; i<countStr.length; i++){
    // console.log(countStr[i], ":", hash[countStr[i].charCodeAt(0) - "a".charCodeAt(0)])
    // console.log(countStr[i], ":", hash[countStr[i].charCodeAt(0) - "A".charCodeAt(0)]) //for uppercase
    console.log(countStr[i], ":", hash[countStr[i].charCodeAt(0)]) //for comb of lower and upper case
}