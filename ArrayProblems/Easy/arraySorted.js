// // Check if an Array is Sorted

// Example 1:
// Input:
//  N = 5, array[] = {1,2,3,4,5}
// Output
// : True.
// Explanation:
//  The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.


// BruteForce: TC: O(n^2)
// sudo:

// for(i=0 to n-1)
    //     for(j=i+1 to n-1)
        //         if(arr[i] > arr[j])
            //             return false

// Better: TC: O(n)

let arr = [1,2,3,4,5,3]

function better(arr) {
    for(let i=1; i<arr.length; i++){
        if(arr[i] < arr[i-1]){
            return false
        }
    }     
    return true
}

if(better(arr)){
    console.log("sorted");
}else{
    console.log("unsorted");
}


