// Longest Subarray with given Sum K(Positives)

// Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
// Example 1:
// Input Format: N = 3, k = 5, array[] = {2,3,5}
// Result: 2

let arr = [-2,2,4,1,-2,0, 1,3]
// using MAP : optimized can be used for both negative positive and zero testcase
function longSubMap(arr, k){
    let maxlen = 0
    let map = new Map()
    let rem = 0
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
        if(sum == k){
            maxlen = Math.max(maxlen, i+1)
        }

        rem = sum - k
        if(map.has(rem)){
            let len = i - map.get(rem)
            maxlen = Math.max(maxlen, len)
        }
        if(!map.has(sum)){
            map.set(sum, i)
        }
        console.log(map);
    }
    return maxlen
}

// console.log(longSubMap(arr, 3))

// Pointer method: optimized can be for only zero and positive
arr = [1,4,0,0,0,3,2]
function longSubPointer (arr, k){
    let left = 0
    let right = 0
    let maxlen = 0
    let n = arr.length
    let sum = arr[0]
    while(right < n){
        while(right >= left && sum > k){
            sum -= arr[left]
            console.log(left, right, arr[right], "sum", sum);
            left++
        }

        if(sum == k){
            maxlen = Math.max(maxlen, right - left + 1)
        }

        right++
        if(right < n){
            sum += arr[right]
        }
    }
    return maxlen
}

console.log(longSubPointer(arr, 3))