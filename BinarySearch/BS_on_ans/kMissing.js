// Kth Missing Positive Number

// Problem Statement: You are given a strictly increasing array ‘vec’ and a positive integer 'k'. Find the 'kth' positive integer missing from 'vec'.

// Example 1:
// Input Format:
//  vec[]={4,7,9,10}, k = 1
// Result:
//  1
// Explanation:
//  The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 1, the first missing element is 1.
// Example 2:
// Input Format:
//  vec[]={4,7,9,10}, k = 4
// Result:
//  5
// Explanation:
//  The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 4, the fourth missing element is 5.

let arr = [4,7,9,10], k = 1
// arr = [2,3,4,7,11] ,k = 5

function BFA(arr, k){   
    let maxi = Math.max(...arr)
    let miss = []

    for(let i=1; i<=maxi; i++){
        if(!(arr.includes(i))){
            miss.push(i)
        }
    }
    return miss[k-1]
}
// TC: O(N^2) SC: O(maxi-N) 
// console.log(BFA(arr, k))

function BTR(arr, k){
    let maxi = Math.max(...arr)
    let count = 0
    for(let i=1; i<=maxi; i++){
        if(!(arr.includes(i))){
            count++
        }
        if(k == count){
            return i
        }
    }
}
// TC: O(maxi) * O(N) SC: O(1)
// console.log(BTR(arr, k))

function OPT(arr, k){
    let maxi = Math.max(...arr)

    let low = 1, high = maxi
    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        
    }
}
console.log(OPT(arr, k))