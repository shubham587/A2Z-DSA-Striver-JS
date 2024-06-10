// Move all Zeros to the end of the array

// Example 1:
// Input:
//  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output:
//  1 ,2 ,3 ,4 ,1 ,0 ,0 ,0

let arr = [1,1,1,1,0, 0, 0, 6, 0, 1, 2, 2, 0, 0, 0, 0, 0];

function zero(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[j] == 0 && arr[i] != 0) {
    //   console.log("swap", arr[i], i, arr[j], j);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
    if (arr[j] != 0 && arr[i] == 0) {
    //   console.log("other", arr[i], i, arr[j], j);

      j++;
    }
  }
}

// zero(arr);
// console.log(arr);

function striverZero(arr){
    // first we'll get the position of first zero
    let j=-1
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0){
            j=i
            break
        }
    }
    if(j == -1){
        return arr
    }
    for(let i=j+1; i<arr.length; i++){
        if(arr[i] != 0){
            [arr[j], arr[i]] = [arr[i], arr[j]]
            j++
        }
    }
}

striverZero(arr)
console.log(arr);
