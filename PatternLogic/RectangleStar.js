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
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str += "* ";
    }
    console.log(str);
    str = "";
  }
};

// RectangleStar(6)

// Pattern-2: Right-Angled Triangle Pattern

// Input Format: N = 6
// Result:
// *
// * *
// * * *
// * * * *
// * * * * *

const rightAngled = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
    str = "";
  }
};

// rightAngled(5)

// Pattern - 3: Right-Angled Number Pyramid

// Input Format: N = 6
// Result:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

const rightAngledNum = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += j + 1 + " ";
    }
    console.log(str);
    str = "";
  }
};

// rightAngledNum(6)

// Pattern - 4: Right-Angled Number Pyramid - II

// Input Format: N = 6
// Result:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

const rightAngledNumII = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += i + 1 + " ";
    }
    console.log(str);
    str = "";
  }
};

// rightAngledNumII(6)

// Pattern-5: Inverted Right Pyramid

// Input Format: N = 6
// Result:
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

const invertedPyramid = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = n - i - 1; j >= 0; j--) {
      str += "* ";
    }
    console.log(str);
    str = "";
  }
};

// invertedPyramid(5)

// Pattern - 6: Inverted Numbered Right Pyramid

// Input Format: N = 3
// Result:
// 1 2 3
// 1 2
// 1

const invertedNum = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      str += j + 1 + " ";
    }
    console.log(str);
    str = "";
  }
};

// invertedNum(5)

// Pattern - 7: Star Pyramid

//Input Format: N = 3
// Result:
//   *
//  ***
// *****

const star = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n * 2 - 1; j++) {
      if (j >= n - i - 1 && j <= n + i - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
    str = "";
  }
};

//OR
const starOR = (n) => {
  let start = n - 1;
  let end = n - 1;
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n * 2 - 1; j++) {
      if (j >= start && j <= end) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
    str = "";
    start--;
    end++;
  }
};
// starOR(5);
// star(3)

// Pattern - 8: Inverted Star Pyramid

// Input Format: N = 3
// Result:
// *****
//  ***
//   *

const starInverted = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n * 2 - 1; j++) {
      if (j >= i && j <= n * 2 - 2 - i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
    str = "";
  }
};

//OR
const starInvertedOR = (n) => {
  let start = 0;
  let end = n * 2 - 2;
  let str = "";
  for (let i = 0; i < n * 2; i++) {
    for (let j = 0; j < n * 2 - 1; j++) {
      if (j >= start && j <= end) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
    str = "";
    start++;
    end--;
  }
};

// starInverted(20)
// starInvertedOR(5)

// Pattern - 9: Diamond Star Pattern

// Input Format: N = 3
// Result:
//   *
//  ***
// *****
// *****
//  ***
//   *

const diamond = (n) => {
  let str = "";
  let tstart = n - 1;
  let tend = n - 1;
  let bstart = 0;
  let bend = n * 2 - 2;

  for (let i = 0; i < n * 2; i++) {
    if (i < n) {
      for (let j = 0; j < n * 2 - 1; j++) {
        if (j >= tstart && j <= tend) {
          str += "*";
        } else {
          str += " ";
        }
      }
      console.log(str);
      str = "";
      tstart--;
      tend++;
    } else {
      for (let j = 0; j < n * 2 - 1; j++) {
        if (j >= bstart && j <= bend) {
          str += "*";
        } else {
          str += " ";
        }
      }
      console.log(str);
      str = "";
      bstart++;
      bend--;
    }
  }
};

// diamond(5);

let lst = [1, 2, 4, 1, 2, 4, 5, 2, 3, 6];

const check = (lst) => {
  const obj = {};
  for (let num of lst) {
    obj[num] ? (obj[num] += 1) : (obj[num] = 1);
  }
  console.log(obj);
};

// check(lst)

// Pattern - 10: Half Diamond Star Pattern

// Input Format: N = 3
// Result:
//   *
//   **
//   ***
//   **
//   *

const halfDiamond = (n) => {
  let str = "";
  let star = 0;

  for (let i = 0; i < n * 2 - 1; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= star) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
    str = ""
    if (i < n - 1) {
      star++;
    } else {
      star--;
    }
  }
};

// halfDiamond(3);

// Pattern - 11: Binary Number Triangle Pattern

// Input Format: N = 3
// Result: 
// 1
// 01
// 101

const binary = (n) => {
  let str = ""
  let bin = 0
  for(let i=0; i<n; i++){
    bin = (i%2 == 1) ? 0 : 1
    for(let j=0; j<=i; j++){
      str += bin
      bin = (bin%2 == 1) ? 0 : 1
    }
    console.log(str);
    str = ""
  }
}

// binary(5)

// Pattern - 12: Number Crown Pattern

// Input Format: N = 3
// Result: 
// 1    1
// 12  21
// 123321

const crown = (n) => {
  let str = ""
  let left = 0
  let right = n*2-1
  for(let i=0; i<n; i++){
    for(let j=0; j<(n*2); j++){
      if(j <= left && j < n){
        str += j + 1
      }
      else if(j >= right && j >= n){
        str += (n*2) - j
      }else{
        str += " "
      }
    }
    console.log(str);
    str = ""
    left++;
    right--;
  }
}

// crown(5)

// Pattern - 13: Increasing Number Triangle Pattern

// Input Format: N = 3
// Result: 
// 1
// 2 3
// 4 5 6

const increaseNumber = (n) => {
  let str = ""
  let num = 1
  for(let i=0; i<n; i++){
    for(let j=0; j<=i; j++){
      str += num + " "
      num++
    }
    console.log(str);
    str = ""
  }
}

// increaseNumber(5)


// Pattern-14: Increasing Letter Triangle Pattern

// Input Format: N = 3
// Result: 
// A
// A B
// A B C

const increaseLetter = (n) => {
  let str = ""
  let char = 65
  for(let i=0; i<n; i++){
    for(let j=0; j<=i; j++){
      str += String.fromCharCode(char) +" "
      char++
    }
    console.log(str);
    str = ""
    char = 65
  }
}

// increaseLetter(3)

// Pattern-15: Reverse Letter Triangle Pattern

// Input Format: N = 3
// Result: 
// A B C
// A B
// A

const reverseLetter = (n) => {
  let str = ""
  let char = 65
  for(let i=n-1; i>=0; i--){
    for(let j=0; j<=i; j++){
      str += String.fromCharCode(char) +" "
      char++
    }
    console.log(str);
    str = ""
    char = 65
  }
}

// reverseLetter(3)

// Pattern - 16: Alpha-Ramp Pattern

// Input Format: N = 3
// Result: 
// A
// B B
// C C C

const alpha = (n) => {
  let str = ""
  let char = 65
  for(let i=0; i<n; i++){
    for(let j=0; j<=i; j++){
      str += String.fromCharCode(char) + " "
    }
    console.log(str);
    str = ""
    char++
  }
}

// alpha(3)

// Pattern - 17: Alpha-Hill Pattern

// Input Format: N = 3
// Result: 
//   A  
//  ABA 
// ABCBA

const alphaHill = (n) => {
  let str = ""
  let char = 65
  let left = n-1
  let right = n-1
  for(let i=0; i<n; i++){
    for(let j=0; j< (n*2)-1; j++){
      if(j >= left && j<= right){
        str += String.fromCharCode(char)
        if(j>n-2){
          char--
        }else{
          char++
        }
      }else{
        str += " "
      }
      
    }
    console.log(str);
    str = ""
    left--;
    right++;
    char = 65
  }
}

// alphaHill(5)

// Pattern-18: Alpha-Triangle Pattern

// Input Format: N = 3
// Result: 
// C
// B C
// A B C

const alphaTri = (n) => {
  let str = ""
  let char = 64+n
  for(let i=0; i<n; i++){
    let inChar = char - i
    for(let j=0; j<=i; j++){
      str += String.fromCharCode(inChar)+" "
      inChar++
    }
    console.log(str);
    str = ""
  }
}

// alphaTri(5)

// Pattern-19: Symmetric-Void Pattern

// Input Format: N = 3
// Result: 
// ******
// **  **
// *    *
// *    *
// **  **
// ******

const symmentric = (n) => {
  let left = n-1
  let right = n
  let str = ""
  for(let i=0; i<(2*n); i++){
    if(i < n){
      for(let j=0; j<(2*n); j++){
        if(j <= left || j >= right){
          str += "*"
        }else{
          str += " "
        }
      }
      left--;
      right++;
      if(i == n-1){left = 0; right=2*n-1}
    }else{
      for(let j=0; j<(2*n); j++){
        if(j <= left || j >= right){
          str += "*"
        }else{
          str += " "
        }
      }
      left++;
      right--;
    }
    console.log(str);
    str = ""
  }
}

// symmentric(8)

// Pattern - 20: Symmetric-Butterfly Pattern

// Input Format: N = 3
// Result: 
// *    *
// **  **
// ******
// **  **
// *    *

const butterfly = (n) => {
  let left = 0
  let right = (2*n) - 2
  let str = ""
  for(let i=0; i<2*n-1; i++){
    for(let j=0; j<2*n-1; j++){
      if(j <= left || j >= right){
        str += "*"
      }else{
        str += " "
      } 
    }
    console.log(str);
    str = ""
    if(i<n-1){
      left++
      right--
    }else{
      left--
      right++
    }
  }
}

// butterfly(3)

// Pattern - 21: Hollow Rectangle Pattern

// Input Format: N = 3
// Result: 
// ***
// * *
// ***

const hollow = (n) => {
  let str = ""
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(i==0 || i==n-1){
        str += "*"
      }else{
        if(j==0 || j==n-1){
          str += "*"
        }else{
          str += " "
        }
      }
    }
    console.log(str);
    str = ""
  }
}

// hollow(30)

