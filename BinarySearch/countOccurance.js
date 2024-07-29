// Count Occurrences in Sorted Array

// Problem Statement: You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.

// Example 1:
// Input:
//  N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
// Output
// : 4
// Explanation:
//  3 is occurring 4 times in 
// the given array so it is our answer.

let arr = [1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5]
let k = 3

function BFA(arr, k) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            count++
        }
    }
    return count
}

// console.log(BFA(arr, k))

function OPT(arr, k) {
    if(!arr.includes(k)){
        return 0
    }
    
    let prelb = -1
    let ub = arr.length-1
    let low = 0
    let high = arr.length - 1

    // count = upperbound - preLowerbound 

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] == k){
            prelb = mid
            high = mid - 1
        }else if(arr[mid] < k){
            low = mid + 1
        }else{
            high = mid -1
        }
    }
    low = 0, high = arr.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] == k){
            ub = mid
            low = mid + 1
        }else if(arr[mid] < k){
            low = mid + 1
        }else{
            high = mid -1
        }
    }
    let count = ub - prelb + 1
    return count
}

console.log(OPT(arr, k))