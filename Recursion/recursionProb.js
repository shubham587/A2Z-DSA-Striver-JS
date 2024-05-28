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
let arr = [1,2,3,4,5,7]

const revArr = (i=0) => {
    if(arr.length/2 <= i)return
    let n = arr.length -1
    temp = arr[n-i]
    arr[n-i] = arr[i]
    arr[i] = temp
    console.log("arr", arr);
    revArr(i+1)
}

// revArr()
// console.log(arr, "arr");

// -----------------------------------

// Check if the given String is Palindrome or not
let str = "abaaaba"
const checkPalidrome = (i, j) => {
    if(i >= j){
        return "Palindrome"
    }else if(str[i] !== str[j]){
        return "Not Palindrom"
    }
    console.log(str[i], str[j]);
    return checkPalidrome(i+1, j-1)
}

// console.log(checkPalidrome(i=0, j=str.length -1))

// -----------------------------------

// Print Fibonacci Series up to Nth term

const fib = (n) => {
    if(n <= 1)return n
    // console.log(fib(n-1)+fib(n-2));
    return fib(n-1) + fib(n-2)
}
n=6

console.log(fib(n))