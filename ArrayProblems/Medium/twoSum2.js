// Two Sum : Check if a pair with given sum exists in Array
// Problem Statement: Given an array of integers arr[] and an integer target.
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
                return [i, j]
            }
        }
    }
    return [-1, -1]
}
// console.log(BFA(arr, k))

// In the BTR approach we need to store the diff value in hashMap, meaning arr[i] + diff = k ==> diff = k - arr[i]
function BTR(arr, k){
    let bmap = new Map()
    for(let i=0; i<arr.length; i++){
        let diff = Math.abs(arr[i] - k) 
        if(bmap.has(diff)){
            return [i, bmap.get(diff)]
        }
        bmap.set(arr[i], i)
    }
    return[-1, -1]
}
// TC: O(n) SC: O(n)
// console.log(BTR(arr, k))

function OPT(arr, k){
    let bmap = new Map()
    for(let i=0; i<arr.length; i++){
        bmap.set(arr[i], i)
    }
    arr = arr.sort((a,b) => a-b)
    let left = 0
    let right = arr.length-1
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum  == k){
            return [bmap.get(arr[left]), bmap.get(arr[right])]
        }
        if(sum < k){
            left++
        }else{
            right++
        }
    }
    return [-1, -1]
}
// TC: O(nlogn) + O(n) SC: O(n)
console.log(OPT(arr, k))
