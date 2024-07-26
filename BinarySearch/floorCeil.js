// Floor and Ceil in Sorted Array
// Problem Statement: You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].
// The floor of x is the largest element in the array which is smaller than or equal to x.
// The ceiling of x is the smallest element in the array greater than or equal to x.

// Example 1:
// Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
// Result: 4 7
// Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.


function findFloor(arr, k) {
    let low = 0, high = arr.length - 1
    let ans = -1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] <= k) {
            ans = arr[mid]
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return ans
}

function findCeil(arr, k) {
    let low = 0, high = arr.length - 1
    let ans = -1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] > k) {
            ans = arr[mid]
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
}

function cal() {
    let arr = [3, 4, 4, 7, 8, 10]
    let k = 4

    let floor = findFloor(arr, k)
    let ceil = findCeil(arr, k)

    return [floor, ceil]
}

console.log(cal())