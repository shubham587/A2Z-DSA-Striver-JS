// Minimum days to make M bouquets

// Problem Statement: You are given 'N’ roses and you are also given an array 'arr'  where 'arr[i]'  denotes that the 'ith' rose will bloom on the 'arr[i]th' day.
// You can only pick already bloomed roses that are adjacent to make a bouquet. 
// You are also told that you require exactly 'k' adjacent bloomed roses to make a single bouquet.
// Find the minimum number of days required to make at least ‘m' bouquets each containing 'k' roses. Return -1 if it is not possible.

// Example 1:
// Input Format:
//  N = 8, arr[] = {7, 7, 7, 7, 13, 11, 12, 7}, m = 2, k = 3
// Result:
//  12
// Explanation:
//  On the 12th the first 4 flowers and the last 3 flowers would have already bloomed. 
//  So, we can easily make 2 bouquets, one with the first 3 and another with the last 3 flowers.

let arr = [7, 7, 7, 7, 13, 11, 12, 7]
let m=2, k=3

// arr = [1, 10, 3, 10, 2], m = 3, k = 2

function possible(arr, day, fcnt){
    let count = 0, bcnt = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] <= day){
            count++
        }else{
            bcnt += Math.floor(count/fcnt)
            count = 0
        }
    }
    bcnt += Math.floor(count/fcnt)
    console.log(bcnt, "poss")
    return bcnt
}

function BFA(arr, m, k){
    let minDay = Number.MAX_SAFE_INTEGER
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    if(arr.length < m * k)return -1
    for(let i=min; i<=max; i++){
        let count = possible(arr, i, k)
        console.log(count, "from poss")
        if(count >= m){
            minDay = Math.min(minDay, i)
            return minDay
        }
    }
    return -1
}
// TC: O(n) * O((min-max+1)) SC: O(1)
// console.log(BFA(arr, m, k))

function OPT(arr, m, k){
    let minDay = Number.MAX_SAFE_INTEGER
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    if(arr.length < m * k)return -1

    let low = min, high = max
    while(low <= high){
        let mid = Math.floor((low+high)/2)

        let count = possible(arr, mid, k)
        if(count == m){
            minDay = Math.min(mid, minDay)
            high = mid - 1
        }else if(count < m){
            low = mid + 1
        }else{
            high = mid -1
        }
    }
    return minDay
}
// TC: O(n) * O(log2(min-max+1)) SC: O(1)
console.log(OPT(arr, m, k))