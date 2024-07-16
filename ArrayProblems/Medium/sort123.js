// Sort an array of 0s, 1s and 2s
let arr = [1,2,2,0,2,0,1]

function BFA(arr){
    let sort = []
    for(let i=0; i<3; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j] == i){
                sort.push(arr[j])
            }
        }
    }
    return sort
}
// TC: O(n^2) SC: O(n)
// console.log(BFA(arr))

function BTR(arr){
    let hashArr = new Array(3).fill(0)
    for(let i=0; i<arr.length; i++){
        hashArr[arr[i]]++
    }
    for(let i=0; i<hashArr[0]; i++){
        arr[i] = 0
    }
    for(let i=hashArr[0]; i<hashArr[1]+hashArr[0]; i++){
        arr[i] = 1
    }
    for(let i=hashArr[1]+hashArr[0]; i<arr.length; i++){
        arr[i] = 2
    }
    return arr
}
// TC: O(n) SC: O(n)
console.log(BTR(arr))