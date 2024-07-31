// Search Element in a Rotated Sorted Array

// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. 
// Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.

// Example 1:
// Input Format: arr = [4,5,6,7,0,1,2,3], k = 0
// Result: 4
// Explanation: Here, the target is 0. We can see that 0 is present in the given rotated sorted array, nums. 
// Thus, we get output as 4, which is the index at which 0 is present in the array.

let arr = [4,5,6,7,0,1,2,3], k=0;

function BFA(arr, k){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == k){
            return i
        }
    }
}
// console.log(BFA(arr, k))

function OPT(arr, k){
    let low = 0, high = arr.length-1
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] == k){
            return mid
        }

        // Edge case if the arr contain duplicates
        if(arr[low] == arr[mid] && arr[mid] == arr[high]){
            low++
            high--
            continue
        }

        // left side is sorted
        if(arr[mid] >= arr[low]){
            if(arr[low] <= k && arr[mid] >= k){
                high = mid-1
            }else{
                low = mid + 1
            }
        }else{
            // right side is sorted
            if(arr[mid] <= k && arr[high] >= k){
                low = mid +1
            }else{
                hign = mid -1
            }
            low = mid + 1
        }
    }
}
console.log(OPT(arr, k))