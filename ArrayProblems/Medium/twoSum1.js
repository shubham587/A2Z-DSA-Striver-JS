// Two Sum : Check if a pair with given sum exists in Array
// Problem Statement: Given an array of integers arr[] and an integer target.
// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

// BFA
// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

let arr = [4,2,8,1,9,6]
let k = 17

function BFA(arr, k ){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == k){
                return "YES"
            }
        }
    }
    return "NO"
}
// console.log(BFA(arr, k))

// In the BTR approach we need to store the diff value in hashMap, meaning arr[i] + diff = k ==> diff = k - arr[i]
function BTR(arr, k){
    let bmap = new Map()
    for(let i=0; i<arr.length; i++){
        console.log(bmap)
        let diff = Math.abs(arr[i] - k) 
        if(bmap.has(diff)){
            return "YES"
        }
        bmap.set(arr[i], i)
    }
    return "NO"
}
// TC: O(n) * O(logn)
// console.log(BTR(arr, k))

// In the Optimal approach we sort the array and use two pointer method 
function OPT(arr, k){
    arr = arr.sort((a,b) => a-b)
    let left = 0
    let right = arr.length - 1
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum == k){
            return "YES"
        }
        if(sum < k){
            left++
        }else{
            right++
        }
    }
    return "NO"
}
// TC: O(n) + O(nlogn)
console.log(OPT(arr, k))