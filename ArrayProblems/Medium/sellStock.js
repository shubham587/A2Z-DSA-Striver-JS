let arr = [7,1,5,3,6,4]

function BFA(arr){
    let maxProfit = 0
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            let profit = arr[j] - arr[i]
            maxProfit = Math.max(maxProfit, profit)
        }
    }
    return maxProfit
}
// TC: O(n^2) SC: O(1)
// console.log(BFA(arr));

function OPT(arr){
    let mini = arr[0]
    let profit = -1
    let maxProfit = 0
    for(let i=0; i<arr.length; i++){
        mini = Math.min(mini, arr[i])
        profit = arr[i] - mini
        maxProfit = Math.max(maxProfit, profit)
    }
    return maxProfit
}
// TC: O(n) SC: O(1)
console.log(OPT(arr));