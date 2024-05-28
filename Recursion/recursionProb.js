// Print Name N times using Recursion

let n = 5
// printName(1, n)

function printName(i, n){
    console.log("shubTush")
    if(i == n)return
    printName(i+1, n)
}
// -----------------------------------
// Print 1 to N using Recursion

// printNumber(1, n)

function printNumber(i, n){
    console.log(i);
    if(i !== n){
        // printNumber(i+1, n)
    }else{
        return
    } 
}
// -----------------------------------

// Print N to 1 using Recursion

// printRevNumber(1, n)

function printRevNumber(i, n){
    if(0 !== n){
        console.log(n);
        printRevNumber(i, n-1)
    }else{
        return
    } 
}
// -----------------------------------

// backtracking

const backTrack = (i, n) => {
    if(i > n){
        return
    }else{
        backTrack(i+1, n)
        console.log(i);
        // return 
    }
}

n =5
// backTrack(1, n)
// -----------------------------------

// sum till n

const sumBack = (i, n) => {
    if(i>n) return 0
    return i + sumBack(i+1, n)
}


n=5
// console.log(sumBack(1, n))
// -----------------------------------

// Factorial of a Number : Iterative and Recursive
n = 3
// Functional approach recursion
const factFunctional = (i, n) => {
    if(i > n)return 1
    return i * factFunctional(i+1, n)
}

// console.log(factFunctional(1, n));

// parameterized approach recursion

const factPara = (n, fact=1) => {
    if(n == 0){
        console.log(fact);
        return
    }
    factPara(n-1, fact*n)
}

// factPara(5)
// -----------------------------------

// Reverse a given Array
let arr = [1,2,3,4,5]

const revArr = (i=0) => {
    if(arr.length < i)return
    let n = arr.length
    temp = arr[n-i]
    arr[n-i] = arr[i]
    arr[i] = temp
    revArr(i+1)
}

revArr(arr)
console.log(arr, "arr");