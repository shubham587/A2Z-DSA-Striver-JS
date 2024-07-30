// Find out how many times the array has been rotated

// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). 
// Now the array is rotated between 1 to N times which is unknown. Find how many times the array has been rotated. 

// Example 1:
// Input Format:
//  arr = [4,5,6,7,0,1,2,3]
// Result:
//  4
// Explanation:
//  The original array should be [0,1,2,3,4,5,6,7]. So, we can notice that the array has been rotated 4 times.

let arr = [3,4,5,6,7,0,1,2,3]

function OPT(arr){
    let low = 0, high = arr.length-1, ans = Number.MAX_SAFE_INTEGER
    let index = -1
    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        if(arr[low] < arr[high]){
            if(arr[low] < ans){
                ans = arr[low]
                index = low
            }
            break
        }

        if(arr[low] <= arr[mid]){
            if(arr[low] < ans){
                ans = arr[low]
                index = low
            }
            low = mid+1
        }else{
            if(arr[mid] < ans){
                ans = arr[mid]
                index = mid
            }
            high = mid - 1
        }
    }
    return index
}
console.log(OPT(arr))