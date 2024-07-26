// Problem statement: You are given a sorted array of integers and a target, your task is to search for the target in the given array. 
// Assume the given array does not contain any duplicate numbers.
// // 
// Let’s say the given array is = {3, 4, 6, 7, 9, 12, 16, 17} and target = 6.

let arr = [3, 4, 6, 7, 9, 12, 16, 17]
let k = 6;
function binary(arr, k) {
    let low = 0, high = arr.length - 1; n = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        if (arr[mid] == k) {
            return mid
        }
        if (arr[mid] > k) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}
// TC: O(logn)
// console.log(binary(arr, k))

function recursive(arr, low, high, k) {
    if (low > high) return -1
    let mid = Math.floor((low + high) / 2)
    if (arr[mid] == k) {
        return mid
    }
    if (arr[mid] < k) {
        return recursive(arr, mid + 1, high, k)
    } else {
        return recursive(arr, low, mid - 1, k)
    }
}

console.log(recursive(arr, 0, arr.length - 1, k))