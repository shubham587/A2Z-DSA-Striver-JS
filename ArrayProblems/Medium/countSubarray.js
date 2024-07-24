// Count Subarray sum Equals K
// Problem Statement: Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.

// Example 1:
// Input Format:
//  N = 4, array[] = {3, 1, 2, 4}, k = 6
// Result:
//  2
// Explanation:
//  The subarrays that sum up to 6 are [3, 1, 2] and [2, 4].
let arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3]
let k = 3;
function BFA(arr, k) {
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum == k) {
                cnt++
            }
        }
    }
    return cnt
}
// TC: O(N^2) SC: O(1)
console.log(BFA(arr, k))
// arr = [3, -3, 1, 1, 1]
// let arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3]
function OPT(arr, k) {
    let presum = 0, cnt = 0;
    let obj = {"0": 1}, remove = 0;
    for(let i=0; i<arr.length; i++){
        presum += arr[i]
        remove = presum - k
        if(remove in obj){
            cnt += obj[remove]
            obj[presum] ? obj[presum]++ : obj[presum]=1
        }else{
            obj[presum] = 1
        }
        console.log(obj, remove,presum)
    }
    return cnt
}

console.log(OPT(arr, k))