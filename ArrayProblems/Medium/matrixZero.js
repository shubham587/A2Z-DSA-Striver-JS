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

let arr = [[1,1,1],[1,1,1],[1,1,0]]
let n=3 ,m=3;
let str = ""

function print(n, m, row, col, arr){
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(i == row || j == col){
                arr[i][j] = 0
            }
        }
    }
}

function findZero(arr){
    let col=-1, row=-1;
    let ptr = []
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(arr[i][j] == 0){
                row = i
                col = j
                ptr.push([row, col])
            }
        }
    }

    for(let i=0; i<ptr.length; i++){
        print(n, m, ptr[i][0], ptr[i][1], arr)
    }
    

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            str += arr[i][j] + " "
        }
        str += "\n"
    }
    console.log(str)
    
}
findZero(arr)