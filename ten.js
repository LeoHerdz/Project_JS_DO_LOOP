/* Question 10: Calculate 2 to the Power of 6
Use a do-while loop to calculate 2 raised to the power of 6 (2^6). Print the final result.
Hint: Multiply 2 by itself 6 times
Expected Output: 64 */
 
let start = 2;
let exp = 6;
let result = 1;
let count = 0;

do {
result *= start;
count++;
} while (count < exp)

console.log(result);
