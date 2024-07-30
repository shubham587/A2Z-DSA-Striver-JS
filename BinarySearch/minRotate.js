// Minimum in Rotated Sorted Array

// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). 
// Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array. 

// Example 1:
// Input Format:
//  arr = [4,5,6,7,0,1,2,3]
// Result:
//  0
// Explanation:
//  Here, the element 0 is the minimum element in the array.

let arr = [3,4,5,6,7,2,3,3,3,3, 3] 
// arr = [4,5,6,7,0,1,2,3]
function OPT(arr){
    let ans = 1000
    let low = 0, high = arr.length-1
    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        // if the array contain duplicates
        if(arr[low] == arr[mid] && arr[mid] == arr[high]){
            ans = Math.min(arr[low], ans)
            low++
            high--
            continue
        }

        // if(arr[low] < arr[high]){
        //     ans = Math.min(arr[low], ans)
        //     break
        // }

        if(arr[low] <= arr[mid]){
            ans = Math.min(arr[low], ans)
            low = mid + 1
        }else{
            ans = Math.min(arr[mid], ans)
            high = mid - 1
        }
    }
    return ans
}
console.log(OPT(arr))