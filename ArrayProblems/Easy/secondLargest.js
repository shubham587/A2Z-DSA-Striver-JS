// Example 1:
// Input:
//  [1,2,4,7,7,5]
// Output:
//  Second Smallest : 2
// 	Second Largest : 5
// Explanation:
//  The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

// BruteForce: we'll sort the array and return the value which is just less than arr[n-1] TC: nlogn

// Better: Here first we'll find the largest and we'll again if the value is greater less than largest and larger than other values in array
// TC: 2 linear i.e O(2n)
let arr = [1,2,4,7,7,6,8,5]

function better(arr) {
    let largest = -Infinity
    let slargest = -Infinity
    let smallest = Infinity
    let ssmallest = Infinity
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > largest){
            largest = arr[i]
        }
        if(arr[i] < smallest){
            smallest = arr[i]
        }
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] < largest && arr[i] > slargest){
            slargest = arr[i]
        }
        if(arr[i] > smallest && arr[i] < ssmallest){
            ssmallest = arr[i]
        }
    }
    console.log("largest", largest);
    console.log("slargest", slargest);
    console.log("smallest", smallest);
    console.log("ssmallest", ssmallest);
}

// better(arr)

// Optimal: TC: O(n) 1 linear

42
arr = [28,43,26,65,60,54,51,35,42,48,33,40,58,38,64,47,44,49,46,25,57,39,55,45,29,32,61,53,31,36,56,63,30,52,27,34,50,41,37,66,62,59]

function optimal(arr) {
    let largest = -Infinity
    let slargest = -Infinity
    let smallest = Infinity
    let ssmallest = Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }else if(arr[i] > slargest && arr[i] !== largest){
            slargest = arr[i]
        }
        if(arr[i] < smallest){
            smallest = arr[i]
        }else if(arr[i] < ssmallest && arr[i] !== smallest){
            ssmallest = arr[i]
        }
    }
    console.log("largest", largest);
    console.log("slargest", slargest);
    console.log("smallest", smallest);
    console.log("ssmallest", ssmallest);
}

optimal(arr)