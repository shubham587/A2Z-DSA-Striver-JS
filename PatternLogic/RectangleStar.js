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

// starInverted(20)

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
  for (let i = 0; i < n * 2; i++) {
    for (let j = 0; j < n * 2 - 1; j++) {
      if (i < n) {
        if (j >= n - i - 1 && j <= n + i - 1) {
          str += "*";
        } else {
          str += " ";
        }
      }else{
        if(j >= i-n && j <= n*2 -i +1){
            str += "*"
            console.log(i, j);
        }else{
            str = " "
        }
      }
    }
    console.log(str);
    str = "";
  }
};

diamond(3);

let lst = [1, 2, 4, 1, 2, 4, 5, 2, 3, 6];

const check = (lst) => {
  const obj = {};
  for (let num of lst) {
    obj[num] ? (obj[num] += 1) : (obj[num] = 1);
  }
  console.log(obj);
};

// check(lst)
