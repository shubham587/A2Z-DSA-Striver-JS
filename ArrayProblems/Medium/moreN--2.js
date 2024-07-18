// Find the Majority Element that occurs more than N/2 times


let arr = [2,2,1,1,2,2,2,1,1,1,1,2,2]

function BFA(arr){
    for(let i=0; i<arr.length; i++){
        let cnt = 0
        for(let j=i; j<arr.length; j++){
            if(arr[i] == arr[j]){
                cnt++
            }
        }
        if(cnt > Math.floor(arr.length/2)){
            return add
        }
    }
    return -1
}
// TC: O(n^2) SC: O(1)
// console.log(BFA(arr))

// Better approach

function BTR(arr){
    let obj = {}
    for(let i=0; i<arr.length; i++){
        if(arr[i] in obj){
            obj[arr[i]]++
        }else{
            obj[arr[i]] = 1
        }
        
        if(obj[arr[i]] > Math.floor(arr.length/2)){
            return arr[i]
        }
        
    }
    // for(const key in obj){
    //     console.log(key, obj[key]);
    //     if(obj[key] > Math.floor(arr.length/2)){
    //         return key
    //     }
    // }
    return -1
}
// TC: O(n)"if unorderd map" else O(nlogn) SC: O(n)
// console.log(BTR(arr))


// Optimal approach: MOORE's approach

function OPT(arr){
    let count = 0
    let ele
    for(let i=0; i<arr.length; i++){
        if(count == 0){
            ele = arr[i]
            count = 1
        }
        if(ele == arr[i]){
            count++
        }else{
            count--
        }
    }
    let cnt  = 0
    for(let i=0; i<arr.length; i++){
        if(ele == arr[i]){
            cnt++
        }

        if(cnt > Math.floor(arr.length/2)){
            return ele
        }
    }
    return -1
}

console.log(OPT(arr))
