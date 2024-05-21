// Pattern-1: Rectangular Star Pattern

// Example 1:
// Input: N = 3
// Output:
// * * *
// * * *
// * * *

// Example 2:
// Input: N = 6
// Output:
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *


const RectangleStar = (n) => {
    let str = ""
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            str += "* "
        }
        console.log(str);
        str = ""
    }
}

RectangleStar(6)


