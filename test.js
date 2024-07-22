let arr = [1, 2, 5, 1, 2, 2, 5, 6, 3, 4, 6,250,3]

function BFA(arr) {
    let inc = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in inc) {
            inc[arr[i]]++
        } else {
            inc[arr[i]] = 1
        }
        console.log(inc);
    }
    return inc
}
// tc: O(n) sc: O(n)
// console.log(BFA(arr))

function OPT(arr){
    let max = Math.max(...arr)
    let hash = new Array(max).fill(0)
    for(let i=0; i<arr.length; i++){
        hash[arr[i]]++
    }
    // for(let i=0; i<arr.length; i++){
    //     console.log("ele: ", arr[i], ": ",hash[arr[i]])
    // }
    return hash[6]
}

// console.log(OPT(arr))

arr = [7,1,5,3,7,4]

function sell(arr){
    let minValue = arr[0]
    let maxProfit = -1
    let profit = 0
    for(let i=0; i<arr.length; i++){
        minValue = Math.min(minValue, arr[i])
        profit = arr[i] - minValue 
        maxProfit = Math.max(profit, maxProfit)
    }
    return maxProfit
}
// console.log(sell(arr));

arr = [1,2,3,5]

function miss(arr){
    let sum = 0
    let n = 5
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    // return sum
    return( (n * (n+1)) /2) - sum
}
console.log(miss(arr));

