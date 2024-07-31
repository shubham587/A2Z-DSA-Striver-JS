// Last occurrence in a sorted array
// Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.

// Note: Consider 0 based indexing

// Example 1:
// Input: N = 7, target=13, array[] = {3,4,13,13,13,20,40}
// Output: 4
// Explanation: As the target value is 13 , it appears for the first time at index number 2.

function last(arr, k){
    let low = 0, high = arr.length-1
    ans = -1
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] > k){
            ans = mid
            high = mid -1
        }else{
            low = mid + 1
        }
    }
    return ans == -1 ? -1 : ans-1
}
let arr = [3,4,13,13,13, 13, 20,20,40]
let k = 20

console.log(last(arr, k))