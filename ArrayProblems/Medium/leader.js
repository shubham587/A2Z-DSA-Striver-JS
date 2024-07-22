// Leaders in an Array

// Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all 
// of the elements on its right side in the array.

let arr = [10, 22, 12, 3, 0, 6]

function BFA(arr){
    let leader = []
    for(let i=0; i<arr.length; i++){
        if(i == arr.length-1){
            leader.push(arr[i])
            break
        }
        let fail = false
        for(j=i+1; j<arr.length; j++){
            if(arr[i] < arr[j]){
                fail = true
                break
            }
        }
        if(!fail){
            leader.push(arr[i])
        }
    }
    return leader
}
//  TC: O(N^2) SC: O(N)
// console.log(BFA(arr))

function OPT(arr){
    let i=0,n = arr.length; j=0;
    let maxVal = -1
    let leader = []
    for(let i=n-1; i>=0; i--){
        if(arr[i] > maxVal){
            maxVal = arr[i]
            leader.push(arr[i])
        }
    }
    return leader
}
console.log(OPT(arr))