// count the element present in array
// max value will be 15

let arr = [1,5,1,2,5,2,9,14]
let countArr = [1,3,5,6,14]

let hash = new Array(16).fill(0)

// pre storing or pre computing
for(let i=0; i<arr.length; i++){
    hash[arr[i]] += 1
}

// fetching
for(let i=0; i<countArr.length; i++){
    console.log(countArr[i], ":", hash[countArr[i]])
}