// Implement Upper Bound
// Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.

// Example 1:
// Input Format:
//  N = 4, arr[] = {1,2,2,3}, x = 2
// Result:
//  3
// Explanation:
//  Index 3 is the smallest index such that arr[3] > x.

let arr = [1, 2, 2, 3], k = 2
function upperBound(arr, k) {
    let n = arr.length - 1
    let low = 0, high = n;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] > k) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
}
// TC: O(logN)
console.log(upperBound(arr, k))