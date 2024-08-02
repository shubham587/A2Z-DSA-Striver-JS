// Capacity to Ship Packages within D Days

// Problem Statement: You are the owner of a Shipment company.You use conveyor belts to ship packages from one port to another.The packages must be shipped within 'd' days.
// The weights of the packages are given in an array 'of weights'.The packages are loaded on the conveyor belts every day in the same order as they appear in the array. 
// The loaded weights must not exceed the maximum weight capacity of the ship.
// Find out the least - weight capacity so that you can ship all the packages within 'd' days.

// Example 1:
// Input Format:
//  N = 5, weights[] = { 5, 4, 5, 2, 3, 4, 5, 6}, d = 5
// Result:
//  9
// Explanation:
//  If the ship capacity is 9, the shipment will be done in the following manner:
// Day         Weights            Total
// 1 - 5, 4 - 9
// 2 - 5, 2 - 7
// 3 - 3, 4 - 7
// 4 - 5 - 5
// 5 - 6 - 6
// So, the least capacity should be 9.


//  we can say that the capacity lies in between max weight till summation of weights[]

let arr = [5, 4, 5, 2, 3, 4, 5, 6], d = 5
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function findDays(arr, capacity) {
    let days = 1, load = 0
    for (let i = 0; i < arr.length; i++) {
        if (load + arr[i] > capacity) {
            load = arr[i]
            days += 1
        } else {
            load += arr[i]
        }
    }
    return days
}

function BFA(arr, d) {
    let max = Math.max(...arr)
    let sum = arr.reduce((acc, ele) => acc + ele, 0)
    let leastCap = Number.MAX_SAFE_INTEGER

    for (let i = max; i <= sum; i++) {
        let dayCount = findDays(arr, i)
        if (dayCount <= d) {
            return i
        }
    }
    return leastCap
}
// TC: O(sum-max+1)*O(N) SC: O(1)
// console.log(BFA(arr, d))

function OPT(arr, d){
    let max = Math.max(...arr)
    let sum = arr.reduce((acc, ele) => acc + ele, 0)
    let leastCap = Number.MAX_SAFE_INTEGER

    let low = max, high=sum
    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        let dayCount = findDays(arr, mid)
        if(dayCount <= d){
            high = mid -1
        }else{
            low = mid + 1
        }
    }
    return low
}
// TC: O(log2(max-sum+1))*O(N) SC: O(1)
console.log(OPT(arr, d))