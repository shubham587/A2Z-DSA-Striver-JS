// Finding Sqrt of a number using Binary Search

// Problem Statement: You are given a positive integer n. Your task is to find and return its square root. If ‘n’ is not a perfect square, 
// then return the floor value of 'sqrt(n)'.

// Note: The question explicitly states that if the given number, n, is not a perfect square, our objective is to find the maximum number, x, 
// such that x squared is less than or equal to n (x*x <= n). In other words, we need to determine the floor value of the square root of n.

// Example 1:
// Input Format:
//  n = 36
// Result:
//  6
// Explanation:
//  6 is the square root of 36.

// Example 2:
// Input Format:
//  n = 28
// Result:
//  5
// Explanation:
//  Square root of 28 is approximately 5.292. So, the floor value will be 5.

// needto find maximum sqrt of the number (FLOOR SQRT)

let n = 36

function BFA(n){
    if(n == 1) return 1
    let ans = -1
    for(let i=1; i<=n; i++){
        if(i**2 <= n){
            ans = i
        }
    }
    return ans
}

// console.log(BFA(n))

function OPT(n){
    let low = 0, high = n
    let ans = -1

    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        let val = mid * mid

        if(val <= n){
            ans = mid
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return ans
}

console.log(OPT(n))