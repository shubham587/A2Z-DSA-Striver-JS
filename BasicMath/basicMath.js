// Problem Statement: Given an integer N, return the number of digits in N.

// Example 1:
// Input:N = 12345
// Output:5
// Explanation:  The number 12345 has 5 digits

const countDigit = (n) => {
    let count = 1
    while(n > 9){
        n = n/10
        count++
    }
    
    // optimized approach
    // count = Math.floor(Math.log10(n)+1)
    
    console.log(count);
}

// countDigit(7789)

// Problem Statement: Given an integer N return the reverse of the given number.

// Example 1:
// Input:N = 12345
// Output:54321
// Explanation: The reverse of 12345 is 54321.

const reverse = (n) => {
    let rev = 0
    while(n){
        rev = rev * 10 + n%10
        n = Math.floor(n/10)
    }
    return rev
}

// console.log(reverse(1234))

// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

// Example 1:
// Input:N = 4554
// Output:Palindrome Number
// Explanation: The reverse of 4554 is 4554 and therefore it is palindrome number

const palindrome = (n) => {
    let org = n
    let rev = 0
    while(n){
        rev = rev * 10 + n%10
        n = Math.floor(n/10)
    }
    org == rev ? console.log("true") : console.log("false"); 
}

// palindrome(1223221)

// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

// Example 1:
// Input:N = 153
// Output:True
// Explanation: 13+53+33 = 1 + 125 + 27 = 153

const arm = (n) => {
    let val = 0
    let dub = n
    while(n){
        val += Math.floor(n%10) ** 3
        n = n/10
    }
    val == dub ? console.log("true") : console.log("false");
}

arm(371)

// 