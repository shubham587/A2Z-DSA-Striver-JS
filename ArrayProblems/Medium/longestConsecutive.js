// // Longest Consecutive Sequence in an Array

// // Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

// Example 1:
// Input:
//  [100, 200, 1, 3, 2, 4]

// Output:
//  4

let arr = [5, 101, 4, 1, 102, 2, 3, 103]

function linear(ele, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (ele == arr[i]) {
            return true
        }
    }
    return false
}

function BFA(arr) {
    let cnt = 1
    for (let i = 0; i < arr.length; i++) {
        let long = 1
        let ele = arr[i]
        while (linear(ele + 1, arr) == true) {
            ele = ele + 1
            long++
        }
        cnt = Math.max(cnt, long)
    }
    return cnt
}
// TC: O()
// console.log(BFA(arr))

function BTR(arr) {
    arr.sort((a, b) => a - b)
    let lsmaller = 0, cnt = 0, longest = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - 1 == lsmaller) {
            cnt++
            lsmaller = arr[i]
        } else {
            cnt = 1
            lsmaller = arr[i]
        }
        longest = Math.max(longest, cnt)
    }
    return longest
}
// TC: O(NlogN) SC: O(1)
// console.log(BTR(arr))

function OPT(arr) {
    let mset = new Set()
    let longest = 1;
    let curr = 0;
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        mset.add(arr[i])
    }
    for (let setVal of mset) {
        if (!(mset.has(setVal-1))) {
            cnt = 1
            curr = setVal + 1
            while (mset.has(curr)) {
                curr = curr + 1
                cnt++
            }
            longest = Math.max(cnt, longest)
        }
    }
    return longest
}
// TC: O(2N) SC: O(N)
console.log(OPT(arr))