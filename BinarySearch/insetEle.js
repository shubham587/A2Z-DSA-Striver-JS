// Search Insert Position
// Problem Statement: You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.

// If the value is present in the array, then return its index. Otherwise, determine the index where it would be inserted in the array while maintaining the sorted order.

// Example 1:
// Input Format: arr[] = {1,2,4,7}, x = 6
// Result: 3
// Explanation: 6 is not present in the array. So, if we will insert 6 in the 3rd index(0-based indexing), the array will still be sorted. {1,2,4,6,7}.
let arr = [1,2,2,4,7], k = 4

function insert(arr, k){
    let n = arr.length-1
    let low = 0, high = n, ans = -1
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] >= k){
            ans = mid
            high = mid-1
        }else{
            low = mid + 1
        }
    }
    return ans
}

console.log(insert(arr, k))