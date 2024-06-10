// Left Rotate the Array by One

// Example 1:
// Input:
//  N = 5, array[] = {1,2,3,4,5}
// Output:
//  2,3,4,5,1

function RotateLeft(arr, k=1) {
    k = k%arr.length 
    for(let i=0; i<k; i++){
        let init = arr[0]
        for(let j=1; j<arr.length; j++){
             arr[j-1] = arr[j]
        }
        arr[arr.length-1] = init
    }
}

function RotateRight(arr, k=1){
    k = k%arr.length 
    for(let i=0; i<k; i++){
        let init = arr[arr.length-1]
        for(let j=arr.length-2; j>=0; j--){
            arr[j+1] = arr[j] 
        }
        arr[0] = init
    }
}

let arr = [1,2,3,4,5]
RotateLeft(arr, 23)
console.log(arr);
RotateRight(arr ,23)
console.log(arr);
