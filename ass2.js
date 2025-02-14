//Q1. Your school has the following grading system based upon the marks (M) obtained by a student:
/* If M≤10, the grade will be E.
 If 11≥M≤20, the grade will be D.
 If 21≥M≤30, the grade will be C.
 If 31≥M≤40, the grade will be B.
 If 41≥M≤50, the grade will be A.*
 Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement.*/

 const Number=prompt("Enter your marks out of 50");

 let grade1;

 switch(true)
 {
    case Number<=10:
          grade1="Got E Grade";
          break;

    case Number<=20 &&Number>=11:
        grade1="Got D Grade";
        break;
    
    case Number<=30 && Number>=21:
            grade1="Got C Grade";
            break;
    
    case Number<=40 && Number>=31:
        grade1="Got B Grade";
        break;

    case Number<=50 && Number>=41:
        grade1="Got A Grade";
        break;
    
    default: grade1= "You Enter Invalid Marks";
             break;

 }
 console.log(grade1);

 /*Q2.You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the
table corresponding to an input character and return it.
| P or p - PrepBytes |
| Z or z - Zenith |
| E or e - Expert Coder |
| D or d - Data Structure |*/

const char=prompt("Enter a character from P,p,Z,z,E,e,D,d");

let value;

switch(char)
{
    case 'P':
    case 'p':
        value="PrepBytes";
        break;
    case 'Z':
    case 'z':
            value="Zenith";
            break;
    case 'E':
    case 'e':
            value="Expert Coder";
            break;
    case 'D':
    case 'd':
            value="Data Structure";
            break;
    default: value="Invalid Character";
            break;
} 
console.log(value);

//Q3. Take three numbers and print the largest number among them if all of three are same print −1−1.

let num1=90, num2=65, num3=110;
console.log("The largest number is from the series :",num1,num2,num3,"is :");


if(num1>num2 && num1>num3)
{
    console.log(num1);
} 
else if(num2>num1 && num2>num3)
{
    console.log(num2);
}
else if(num3>num1 && num3>num2)
{
    console.log(num3);
}
else{
    console.log(-1);
}

//Q4. You are given 3 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided
//integers.

let X=10, Y=20, Z=30;
let secondSmallest;

if ((X > Y && X < Z) || (X > Z && X < Y)) {
    secondSmallest = X;
} else if ((Y > X && Y < Z) || (Y > Z && Y < X)) {
    secondSmallest = Y;
} else {
    secondSmallest = Z;
}

console.log(secondSmallest);

//Q5.Write a program takes takes three angles and checks whether the triangle is acute or obtuse


let angle1 = 60, angle2 = 100, angle3 = 20;

if (angle1 + angle2 + angle3 === 180) {
    if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
        console.log("The triangle is acute.");
    } else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
        console.log("The triangle is obtuse.");
    } else {
        console.log("The triangle is right-angled.");
    }
} else {
    console.log("The angles do not form a valid triangle.");
}



