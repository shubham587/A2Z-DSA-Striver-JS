// Spiral Traversal of Matrix
// Problem Statement: Given a Matrix, print the given matrix in spiral order.

// Example 1:
// Input: Matrix[][] = { { 1, 2, 3, 4 },
// 		                 { 5, 6, 7, 8 },
// 		                 { 9, 10, 11, 12 },
// 	                     { 13, 14, 15, 16 } 
// }

// Outhput: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.
// Explanation: The output of matrix in spiral form.


let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

function spiral(arr){
    let n = arr.length
    let m = arr[0].length
    let ans = []

    let left = 0, top = 0, right = m-1, bottom = n-1;
    while(left <= right && top <= bottom){
        // left to right
        for(let i=left; i<=right; i++){
            ans.push(arr[top][i])
        }

        top++
        // top to bottom
        for(let i=top; i<=bottom; i++){
            ans.push(arr[i][right])
        }
        right--

        // bottom right to bottom left
        for(let i=right; i>=left; i--){
            ans.push(arr[bottom][i])
        }
        bottom--

        // bottom to top
        for(let i=bottom; i>= top; i--){
            ans.push(arr[i][left])
        }
        left++
    }

    return ans
}

console.log(spiral(arr))