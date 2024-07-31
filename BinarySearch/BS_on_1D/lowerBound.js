// Implement Lower Bound
// Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

// Example 1:
// Input Format:
//  N = 4, arr[] = {1,2,2,3}, x = 2
// Result:
//  1
// Explanation:
//  Index 1 is the smallest index such that arr[1] >= x.

let arr = [1, 2, 2, 3, 5, 8, 8, 10]
let k = 2

function lowerBound(arr, k) {
    let n = arr.length - 1
    let low = 0, high = n;
    let ans = -1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] >= k) {
            ans = mid // This might be my answer
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
}
// TC: O(logn)
console.log(lowerBound(arr, k))