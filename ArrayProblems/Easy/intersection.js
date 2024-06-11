// Intersection of two sorted arrays

// BruteForce: 

let a = [1,2,2,3,4,4,5, 5]
let b = [2,2,4,5, 5]


function brute(a, b, n, m) {
    let visit = new Array(m).fill(0)
    let inter = []
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(a[i] == b[j] && visit[j] == 0){
                visit[j] = 1
                inter.push(a[i])
                break;
            }
        }
    }
    console.log(inter);
}


// brute(a, b, a.length, b.length)
// TC: O(n*m) SC: O(n)

function optimal(a, b, n, m) {
    let i=0, j=0
    let inter = []

    while(i < n && j < m){
        if(a[i] < b[j]){
            i++
        }else if(a[i] > b[j]){
            j++
        }else{
            inter.push(a[i])
            i++
            j++
        }
    }
    console.log(inter);
}

optimal(a, b, a.length, b.length)
// TC: O(n+m) SC: O(n)