// Count Maximum Consecutive One's in the array

// Example 1:
// Input: prices = {1, 1, 0, 1, 1, 1}
// Output: 3


let arr = [1, 1, 0, 1, 1, 1,1,0,1,1,1,1,1]

function maxConsective(arr) {
    let max = 0
    let cnt = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 1){
            cnt++
            if(max < cnt){
                max = cnt
            }
        }else{
            cnt = 0
        }
    }
    console.log(max);
}

maxConsective(arr)

