/* Question 9: Count by 10s Backward
Use a do-while loop to count backward from 100 to 10 by 10s (100, 90, 80...).
Expected Output: 100, 90, 80, 70, 60, 50, 40, 30, 20, 10 */

let i = 100;

 do {
    console.log(i);
    i -= 10

 }while(i>=1);
