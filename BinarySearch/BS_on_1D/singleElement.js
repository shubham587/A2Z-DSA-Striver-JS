// // Search Single Element in a sorted array
// // Problem Statement: Given an array of N integers. Every number in the array except one appears twice. Find the single number in the array.

// // Example 1:
// // Input Format:
// //  arr[] = {1,1,2,2,3,3,4,5,5,6,6}
// // Result:
// //  4
// // Explanation:
// //  Only the number 4 appears once in the array.

let arr = [1,1,2,2,3,3,4,4, 5,6,6]

function BFA(arr){
    let obj = {}
    for(let i=0; i<arr.length; i++){
        arr[i] in obj ? obj[arr[i]]++ : obj[arr[i]] = 1
    }
    for(let ele in obj){
        if(obj[ele] == 1){
            return ele
        }
    }
}
// TC: O(N) SC: O(N)
// console.log(BFA(arr))


function BTR(arr){
    for(let i=0; i<arr.length; i=i+2){
        if(arr[i] != arr[i+1]){
            return arr[i]
        }
    }
    return -1
}
// TC: O(N/2) SC: O(1)
// console.log(BFA(arr))

function OPT(arr){
    let low = 1, high = arr.length -2, n=arr.length
    if(arr.length == 1)return arr[0]
    if(arr[1] != arr[0])return arr[0]
    if(arr[n-1] != arr[n-2])return arr[n-1]

    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        if(arr[mid] != arr[mid-1] && arr[mid] != arr[mid+1]){
            return arr[mid]
        }

        if(mid%2==1 && arr[mid] == arr[mid-1] || mid%2==0 && arr[mid] == arr[mid+1]){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    
}

console.log(OPT(arr))