// Remove Duplicates in-place from Sorted Array
// Example 1:
// Input:
//  arr[1,1,2,2,2,3,3]

// Output:
//  arr[1,2,3,_,_,_,_]

// Explanation:
//  Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.

// BruteForce: Iterate the array and place in set and then inset the set into array and return the set length

// Optimal: using 2 pointer method

let arr = [1,1,2,2,2,3,3,3,3,3,4]

function remove(arr) {
    let i=0
    for(let j= 1; j<arr.length; j++){
        if(arr[i] != arr[j]){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    return i+1
}

console.log(remove(arr))
