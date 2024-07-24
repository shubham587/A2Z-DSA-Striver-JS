// Rotate Image by 90 degree
// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

// Example 1:
// Input:
// [
//  [1,2,3],
//  [4,5,6],
//  [7,8,9]
// ]

// Output
// : 
// [
//     [7,4,1],
//     [8,5,2],
//     [9,6,3]
// ]

let arr = 
[[1,2,3],
[4,5,6],
[7,8,9]]

let n = 3

function BFA(arr, n){
    let deg =  Array.from({ length: n }, () =>
        Array.from({ length: n }, () => 0)
    );

    // formula = [j][n-i-1] = [i][j] 
    for(let i=0 ;i<n; i++){
        for(let j=0; j<n; j++){
            deg[j][n-i-1] = arr[i][j]
        }
    }
    let str = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += deg[i][j] + " "
        }
        str += "\n"
    }
    return str
}
// TC: O(N^2) SC: O(N^2)
// console.log(BFA(arr, n))

function OPT(arr){
    // Transpose a matrix
    for(let i=0; i<n; i++){
        for(let j=0; j<i; j++){
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]
        }
    }
    for(let i=0 ;i<n; i++){
        arr[i].reverse()
    }
    let str = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += arr[i][j] + " "
        }
        str += "\n"
    }
    return str
}
// TC:  O(N*N) + O(N*N).One O(N*N) is for transposing the matrix and the other is for reversing the matrix.
console.log(OPT(arr))
