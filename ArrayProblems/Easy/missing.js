// Find the missing number in an array

// Example 1:
// Input Format:
//  N = 5, array[] = {1,2,4,5}
// Result:
//  3

// BruteForce: we'll iterate the array from 1 to N and check if the nnumber is missing 

// Better: here we'll use hash array, first we'll create a hash array of N length and place 0 as element if the number i present then put 1 in the hash and next
// we'll find the index where the index value is 0 and return that

// Optimal: 1. we'll be using summation approach 
// s1 = n*(n+1)/2
// s2 = sum of array
// res = s1-s2

// optimal2: using xor 
// note: same ^ same = 0 // 0 ^ number = number


function missingNumber(a, N) {
    let xor1 = 0;
    let xor2 = 0;
  
    for (let i = 0; i < N - 1; i++) {
      xor2 = xor2 ^ a[i]; // XOR of array elements
      xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
    }
    xor1 = xor1 ^ N; // XOR up to [1...N]
  
    return xor1 ^ xor2; // the missing number
  }
  
  function main() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
  }
  
  main();