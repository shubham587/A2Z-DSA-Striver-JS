// Kadane's Algorithm : Maximum Subarray Sum in an Array

let arr = [-2,1,-3,4,-1,2,1,-5,-1,4]

function BFA(arr){
    let sum = 0
    let max = 0
    for(let i=0; i<arr.length; i++){
        sum = 0
        for(let j=i; j<arr.length; j++){
            sum += arr[j]
            if(sum > max){
                max = sum
            }
        }
    }
    return max
}
// TC: O(n^2) SC: O(1)
// console.log(BFA(arr));

function OPT(arr){
    let sum = 0
    let max = Number.MIN_SAFE_INTEGER
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
        if(sum < 0){
            sum = 0
        }
        if(sum > max){
            max = sum
        }
        
    }
    return max
}
console.log(OPT(arr));