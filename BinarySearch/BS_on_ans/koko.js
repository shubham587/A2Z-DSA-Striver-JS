// Koko Eating Bananas

// Problem Statement: A monkey is given ‘n’ piles of bananas, whereas the 'ith' pile has ‘a[i]’ bananas. An integer ‘h’ is also given, 
// which denotes the time (in hours) for all the bananas to be eaten.
// Each hour, the monkey chooses a non-empty pile of bananas and eats ‘k’ bananas. 
// If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.

// Find the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.

// Example 1:
// Input Format:
//  N = 4, a[] = {7, 15, 6, 3}, h = 8
// Result:
//  5
// Explanation:
//  If Koko eats 5 bananas/hr, he will take 2, 3, 2, and 1 hour to eat the piles accordingly. So, he will take 8 hours to complete all the piles.  

// Example 2:
// Input Format:
//  N = 5, a[] = {25, 12, 8, 14, 19}, h = 5
// Result:
//  25
// Explanation:
//  If Koko eats 25 bananas/hr, he will take 1, 1, 1, 1, and 1 hour to eat the piles accordingly. So, he will take 5 hours to complete all the piles.

let arr = [7, 15, 6, 3], h = 8

function find_max(arr) {
    return Math.max(...arr)
}

function BFA(arr, h) {
    // check the max value 
    let max = find_max(arr)
    let ans = Number.MAX_SAFE_INTEGER
    for (let i = 1; i <= max; i++) {
        let sum_hr = 0
        for (let j = 0; j < arr.length; j++) {
            sum_hr += Math.ceil(arr[j] / i)
        }
        if (sum_hr <= h) {
            ans = Math.min(i, ans)
        }
    }
    return ans
}
// TC: O(arr[max]) * O(n)
// console.log(BFA(arr, h))

function OPT(arr, h) {
    let max = find_max(arr)
    let low = 1, high = max, ans = Number.MAX_SAFE_INTEGER

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let sum_hr = 0
        for(let i=0; i<arr.length; i++){
            sum_hr += Math.ceil(arr[i]/mid)
        }
        if(sum_hr <= h){
            ans = Math.min(ans, mid)
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return ans
}
console.log(OPT(arr, h))