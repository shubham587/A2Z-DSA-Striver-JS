// Print Name N times using Recursion

let n = 5
// printName(1, n)

function printName(i, n){
    console.log("shubTush")
    if(i == n)return
    printName(i+1, n)
}

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

// sum till n

const sumBack = (i, n) => {
    if(i>n) return 0
    return i + sumBack(i+1, n)
}


n=5
console.log(sumBack(1, n))
