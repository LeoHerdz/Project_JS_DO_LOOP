/* Question 6: Multiplication Table of 6
Create a do-while loop that prints the multiplication table of 6 from 6 × 1 to 6 × 10.
Expected Output: 6 x 1 = 6, 6 x 2 = 12, 6 x 3 = 18, ... and so on until 6 x 10 = 60 */

let num = 6
let i = 1;

do
{
        let table = i * num;
        console.log(num + "x" + i + "=" + table);
        i++;

}while (i<=10)