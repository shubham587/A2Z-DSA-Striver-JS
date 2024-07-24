// Set Matrix Zero

// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.
// Examples 1:
// Input:
//  matrix=[[1,1,1],[1,0,1],[1,1,1]]
// 1 1 1   1 0 1 
// 1 0 1   0 0 0
// 1 1 1   1 0 1

// Output:
//  [[1,0,1],[0,0,0],[1,0,1]]

let arr = [[1, 1, 1], [1, 1, 1], [1, 1, 0]]
let n = 3, m = 3;
let str = ""

function print(n, m, row, col, arr) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i == row || j == col) {
                arr[i][j] = 0
            }
        }
    }
}

function BFA(arr) {
    let col = -1, row = -1;
    let ptr = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j] == 0) {
                row = i
                col = j
                ptr.push([row, col])
            }
        }
    }

    for (let i = 0; i < ptr.length; i++) {
        print(n, m, ptr[i][0], ptr[i][1], arr)
    }


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            str += arr[i][j] + " "
        }
        str += "\n"
    }
    console.log(str)

}
// BFA(arr)

function BTR(arr) {
    let row = new Array(n).fill(0)
    let col = new Array(m).fill(0)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j] == 0) {
                row[i] = 1
                col[j] = 1
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                arr[i][j] = 0
            }
        }
    }
    let str = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            str += arr[i][j] + " "
        }
        str += "\n"
    }
    return str
}

// console.log(BTR(arr), "BTR")

function OPT(arr){
    let col0 = 1

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(arr[i][j] == 0){
                arr[i][0] = 0 // Mark i-th row:
                if(j != 0){
                    arr[0][j] = 0  // Mark j-th column:
                }else{
                    col0 = 0
                }
            }
        }
    }

    for(let i=1; i<n; i++){
        for(let j=1; j<m; j++){
            if(arr[i][j] !== 0){
                if(arr[i][0] == 0 || arr[0][j] == 0){
                    arr[i][j] = 0
                }
            }
        }
    }

    let str = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            str += arr[i][j] + " "
        }
        str += "\n"
    }
    return str
}

console.log(OPT(arr), "OPT")
