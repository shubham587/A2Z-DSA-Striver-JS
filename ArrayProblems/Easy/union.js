// Union of Two Sorted Arrays

// Example 1:
// Input:

// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}
// arr2[] = {2,3,4,4,5}
// Output:
//  {1,2,3,4,5}

// BruteForce: We'll be using set to get the unique numbers from both sorted array and then returning the set array

// optimal:

let arr1 = [1, 2, 3, 4, 5, 8, 9, 9, 10, 10, 12];
let arr2 = [2, 3, 4, 4, 5];
let res = [];
function union(arr1, arr2) {
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (res.length == 0 || res[res.length - 1] != arr1[i]) {
        res.push(arr1[i]);
      }
      i++;
    } else {
      if (res.length == 0 || res[res.length - 1] != arr2[j]) {
        console.log(arr2[j]);
        res.push(arr2[j]);
      }
      j++;
    }
  }
  while (i < arr1.length) {
    if (res[res.length - 1] != arr1[i]) {
      res.push(arr1[i]);
    }
    i++;
  }
  while (j < arr2.length) {
    if (res[res.length - 1] != arr2[j]) {
      console.log(arr2[j]);
      res.push(arr2[j]);
    }
    j++;
  }
  console.log(res);
}

function unionStriver(arr1, arr2) {
  let i = 0, j = 0; // Pointers
  let union = []; // Union array

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      // Case 1 and 2
      if (union.length === 0 || union[union.length - 1] !== arr1[i])
        union.push(arr1[i]);
      i++;
    } else {
      // Case 3
      if (union.length === 0 || union[union.length - 1] !== arr2[j])
        union.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    // If any elements left in arr1
    if (union[union.length - 1] !== arr1[i]) union.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    // If any elements left in arr2
    if (union[union.length - 1] !== arr2[j]) union.push(arr2[j]);
    j++;
  }
  console.log(union);
}

union(arr1, arr2);
