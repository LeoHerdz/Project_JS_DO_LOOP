/* Question 8: Sum of Even Numbers from 2 to 40
Write a do-while loop to calculate and print the sum of all even numbers from 2 to 40.
Expected Output: The sum should be 420 */
 let i = 2
 let sum = 0
do {
    sum = sum + i; 
   
    i = i + 2;
    
} while (i <=40);
console.log("The final total is "+  sum ); 
 


