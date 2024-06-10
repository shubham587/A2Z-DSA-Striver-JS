// Find the Largest element in an array
// Example 1:
// Input:
//  arr[] = {2,5,1,3,0};
// Output:
//  5

// Brute Force: Sort the array and return arr[n-1] which is largest TC: nlogn

// Better: using max variable

let arr = [2,5,1,334,0]

function largestElement (arr) {
    let max = -Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log(largestElement(arr))