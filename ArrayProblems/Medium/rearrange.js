// Rearrange Array Elements by Sign

// There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the
//  relative order of positive and negative elements, you must return an array of alternately positive and negative values.

// Example 1:

// Input:
// arr[] = {1,2,-4,-5}, N = 4
// Output:
// 1 -4 2 -5

let arr = [1,2,3,-4,-5, -6]

function BFA(arr){
    let pos = [], neg=[]
    let mid = arr.length/2
    let n = arr.length
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            pos.push(arr[i])
        }else{
            neg.push(arr[i])
        }
    }
    arr = []
    for(let i=0; i<n/2; i++){
        arr[2*i] = pos[i]
        arr[2*i+1] = neg[i] 
    }
    return arr
}
// TC: O(n+n/2) SC: O(n)
// console.log(BFA(arr));

function OPT(arr){
    let final = []
    let fpoint = 0
    let point = 0
    let swapper = 1
    while(point < arr.length && swapper < arr.length){
        let parity = point % 2 == 0 ? "even" : "odd"
        if(parity == "even"){
            if(arr[point] > 0){
                point++
                swapper = point + 1
            }else if(arr[swapper]>0){
                [arr[point], arr[swapper]] = [arr[swapper], arr[point]]
                point++
                swapper = point + 1
            }else{
                swapper++
            }
            console.log(arr, arr[point], point, swapper, "even");
        }else{
            if(arr[point] < 0){
                point++
                swapper = point + 1
            }else if(arr[swapper]<0){
                [arr[point], arr[swapper]] = [arr[swapper], arr[point]]
                point++
                swapper = point + 1
            }else{
                swapper++
            }
            console.log(arr, arr[point], point, swapper, "odd");
        }
    }
    return arr
}
// console.log(OPT(arr));

function StriverOPT(arr){
    let n =  arr.length
    let posIndex = 0
    let negIndex = 1
    let ret = []
    for(let i=0; i<n; i++){
        if(arr[i] > 0){
            ret[posIndex] = arr[i]
            posIndex += 2
        }else{
            ret[negIndex] = arr[i]
            negIndex += 2
        }
    }
    return ret
}

// console.log(StriverOPT(arr));

// Variety-2
// There’s an array ‘A’ of size ‘N’ with positive and negative elements (not necessarily equal). Without altering the relative 
// order of positive and negative elements, you must return an array of alternately
//  positive and negative values. The leftover elements should be placed at the very end in the same order as in array A.

// arr= [1,2,-4,-5,3,4]
function varirty2(arr){
    let pos = []
    let neg = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            pos.push(arr[i])
        }else{
            neg.push(arr[i])
        }
    }
    arr = []
    if(pos.length < neg.length){
        for(let i=0; i<pos.length; i++){
            arr[2*i] = pos[i]
            arr[2*i + 1] = neg[i]
        }
        let ind = pos.length * 2
        for(let i=pos.length; i<neg.length; i++){
            arr[ind] = neg[i]
            ind++
        }
    }else{
        for(let i=0; i<neg.length; i++){
            arr[2*i] = neg[i]
            arr[2*i + 1] = pos[i]
        }
        let ind = neg.length * 2
        for(let i=neg.length; i<pos.length; i++){
            arr[ind] = pos[i]
            ind++
        }
    }
    return arr
}

console.log(varirty2(arr))

// arr = [5,1,4,6,2,]

// function sort(arr){
//     let mini = arr[0]
//     let profit = -1
//     let maxProfit = -1
//     for(let i=0; i<arr.length; i++){
//         mini = Math.min(arr[i], mini)
//         profit = arr[i] - mini
//         maxProfit = Math.max(maxProfit, profit)
//     }
//     return maxProfit
// }
// console.log(sort(arr));