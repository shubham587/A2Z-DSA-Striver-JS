// Peak element in Array

// Problem Statement: Given an array of length N. Peak element is defined as the element greater than both of its neighbors. 
// Formally, if 'arr[i]' is the peak element, 'arr[i - 1]' < 'arr[i]' and 'arr[i + 1]' < 'arr[i]'. Find the index(0-based) of a peak element in the array. 
// If there are multiple peak numbers, return the index of any peak number.

// Note: For the first element, the previous element should be considered as negative infinity as well as for the last element, the next element should be considered as negative infinity.

// Example 1:
// Input Format: arr[] = {1,2,3,4,5,6,7,8,5,1}
// Result: 7
// Explanation: In this example, there is only 1 peak that is at index 7.

// Example 2:
// Input Format: arr[] = {1,2,1,3,5,6,4}
// Result: 1
// Explanation: In this example, there are 2 peak numbers that are at indices 1 and 5. We can consider any of them.

// Example 3:
// Input Format: arr[] = {1, 2, 3, 4, 5}
// Result: 4
// Explanation: In this example, there is only 1 peak that is at the index 4.

// Example 4:
// Input Format: arr[] = {5, 4, 3, 2, 1}
// Result: 0
// Explanation: In this example, there is only 1 peak that is at the index 0.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1]
// arr = [1, 2, 1, 3, 5, 6, 4]
// arr = [1, 2, 3, 4, 5]
// arr = [5, 4, 3, 2, 1]

function BFA(arr) {
    let n = arr.length
    if (arr[0] > arr[1]) return arr[0]
    if (arr[n - 1] > arr[n - 2]) return arr[n - 1]

    for (let i = 1; i < n - 2; i++) {
        if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
            return arr[i]
        }
    }
    return -1
}

// console.log(BFA(arr))

function OPT(arr) {
    let n = arr.length
    if (arr[0] > arr[1]) return arr[0]
    if (arr[n - 1] > arr[n - 2]) return arr[n - 1]

    let low = 1, high = n - 2
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return arr[mid]
        }

        if (arr[mid] > arr[mid-1]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}

console.log(OPT(arr))