// Nth Root of a Number using Binary Search

// Problem Statement: Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M. 
// If the 'nth root is not an integer, return -1.

// Example 1:
// Input Format:
//  N = 3, M = 27
// Result:
//  3
// Explanation:
//  The cube root of 27 is equal to 3.

// Example 2:
// Input Format:
//  N = 4, M = 69
// Result:
//  -1
// Explanation:
//  The 4th root of 69 does not exist. So, the answer is -1.

let n=3, m=27
n = 4, n = 69
n= 2, m = 9

function BFA(n, m){
    let ans = -1
    for(let i=1; i<=m; i++){
        if(n ** i == m && n ** i <= m){
            return i
        }
    }
    return -1
}
// console.log(BFA(n, m))

function OPT(n, m){
    let low = 1, high = m
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        let val = mid ** n
        if(val == m){
            return mid
        }
        if(val < m){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return -1
}

console.log(OPT(n, m))