// Kadane's Algorithm : Maximum Subarray Sum in an Array

let arr = [-2,1,-3,4,-1,2,1,-3,4] 

function OPT(arr){
    let astart = -1, aend = -1, start = -1;
    let sum = 0
    let max = Number.MIN_SAFE_INTEGER
    for(let i=0; i<arr.length; i++){
        if(sum < 0){
            sum = 0
            start = i
        }
        sum+=arr[i]

        if(sum > max){
            max = sum
            astart = start
            aend = i
        }
    }
    return [astart, aend]
}
console.log(OPT(arr));