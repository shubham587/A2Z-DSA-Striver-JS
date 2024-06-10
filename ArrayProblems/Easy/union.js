// Union of Two Sorted Arrays

// Example 1:
// Input:

// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}  
// arr2[] = {2,3,4,4,5}
// Output:
//  {1,2,3,4,5}

// BruteForce: We'll be using set to get the unique numbers from both sorted array and then returning the set array

// optimal: 

let arr1 = [1,2,3,4,5]
let arr2 = [2,3,4,4,5]
let res = []
function union(arr1, arr2){
    let i=0
    let j=0
    while(i < arr1.length-1 && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            if(arr1[i] in res){
                res.push(arr1[i])
            }
            i++
        }
    }
    
}

union(arr1, arr2)