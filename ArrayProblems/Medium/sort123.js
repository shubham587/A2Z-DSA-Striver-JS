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
// console.log(BTR(arr))


// The optimal approach has acheived using Dutch National Flag Algo
function OPT(arr){
    let low = 0
    let mid = 0
    let high = arr.length - 1

    while(mid <= high){
        if(arr[mid] == 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            mid++
            low++
        }else if(arr[mid] == 1){
            mid++
        }else{
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--
        }
    }
    return arr
}
// TC: O(n) SC: O(1)
console.log(OPT(arr))