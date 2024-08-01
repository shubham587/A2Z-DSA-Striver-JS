// Find the Smallest Divisor Given a Threshold

// Problem Statement: You are given an array of integers 'arr' and an integer i.e. a threshold value 'limit'. Your task is to find the smallest positive integer divisor, 
// such that upon dividing all the elements of the given array by it, the sum of the division's result is less than or equal to the given threshold value.

// Example 1:
// Input Format:
//  N = 5, arr[] = {1,2,3,4,5}, limit = 8
// Result:
//  3
// Explanation:
//  We can get a sum of 15(1 + 2 + 3 + 4 + 5) if we choose 1 as a divisor. 
// The sum is 9(1 + 1 + 2 + 2 + 3)  if we choose 2 as a divisor. Upon dividing all the elements of the array by 3, 
// we get 1,1,1,2,2 respectively. Now, their sum is equal to 7 <= 8 i.e. the threshold value. So, 3 is the minimum possible answer.

let arr = [1,2,3,4,5], limit = 8
// arr = [8,4,2,3], limit = 10

function calcSum(arr, div){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += Math.ceil(arr[i]/div)
    }
    return sum
}

function BFA(arr, limit){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let div = Number.MAX_SAFE_INTEGER

    for(let i=min; i<=max; i++){
        let sum = calcSum(arr, i)
        if(sum <= limit){
            return i
        }
    }
    return -1
}
// TC: O(N) * O(min-max+1) SC: O(1)
// console.log(BFA(arr, limit))

function OPT(arr, limit){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let div = Number.MAX_SAFE_INTEGER

    let low = min, high = max
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        let sum = calcSum(arr, mid)
        if(sum <= limit){
            div = Math.min(div, mid)
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return div
}
// TC: O(N) * O(log2(min-max+1)) SC: O(1)
console.log(OPT(arr, limit))