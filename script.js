// QUESTION 1
// function displayCurrentDateTime() {
//     const now = new Date();
//     const formattedDateTime = now.toString(); // Converts to the full date and time string format
//     document.getElementById('dateTime').textContent = formattedDateTime;
//   }
//   displayCurrentDateTime();

// QUESTION 2
// function greetUser(firstName, lastName) {
//     const fullName = `${firstName} ${lastName}`;
//     document.write(`Hello, ${fullName}! Welcome!`);
// }
// greetUser("Habiba", "Khan");

// QUESTION 3

// function addNumbers() {
//     const firstNumber = Number(prompt("Enter the first number:"));
//     const secondNumber = Number(prompt("Enter the second number:"));
//     const sum = firstNumber + secondNumber
//     return sum;
// }
// const result = addNumbers();
// alert("The sum of the two numbers is: " + result);

// QUESTION 4
    // function calculate(num1, num2, operator) {
    //   let result;
    //   switch (operator) {
    //     case '+':
    //       result = num1 + num2;
    //       break;
    //     case '-':
    //       result = num1 - num2;
    //       break;
    //     case '*':
    //       result = num1 * num2;
    //       break;
    //     case '/':
    //       result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    //       break;
    //     case '%':
    //       result = num2 !== 0 ? num1 % num2 : "Error: Division by zero";
    //       break;
    //     default:
    //       result = "Invalid operator";
    //   }
    //   document.getElementById('result').textContent = `Result: ${result}`;
    //   return result;
    // }
    // const num1 = parseFloat(prompt("Enter the first number:"));
    // const num2 = parseFloat(prompt("Enter the second number:"));
    // const operator = prompt("Enter the operator (+, -, *, /, %):");
    // calculate(num1, num2, operator);

// QUESTION 5
// function square(num) {
//     return num * num;
// }
// const result = square(6);
// document.write("The square of 6 is : ",  result);


// QUESTION 6
// function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }
// const factResult = factorial(4);
// document.write("The factorial of 4 is : ",   factResult);



// QUESTION 7
    // function displayCounting(start, end) {
    //   let countingText = '';
    //   for (let i = start; i <= end; i++) {
    //     countingText += i + " ";
    //   }
    //   document.getElementById('countingDisplay').textContent = countingText;
    // }
    // const startNumber = parseInt(prompt("Enter the start number:"));
    // const endNumber = parseInt(prompt("Enter the end number:"));

    // displayCounting(startNumber, endNumber);
 

// QUES8
// function calculateHypot(base, perpendicular) {
//     function calculateSquare(number) {
//         return number * number;
//     }
//     const hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     return hypotenuse;
// }
// const base = parseFloat(prompt("Enter the base:"));
// const perpendicular = parseFloat(prompt("Enter the perpendicular:"));
// document.write("The hypotenuse is:", calculateHypot(base, perpendicular));

// QUEWSTION 9  Passing Arguments as Values
// function calculateArea(width, height) {
//     return width * height;
// }
// document.write("Area of rectangle:", calculateArea(5, 10)); 

// Passing Arguments as Variables
// const width = 7;
// const height = 10;
// document.write("Area of rectangle:", calculateArea(width, height));




// 10
// function isPalindrome(str) {
//     const checkstr = str.toLowerCase()
//     return checkstr === checkstr.split('').reverse().join('');
// }
// const word = prompt("Enter a word to check if it is a palindrome:");
// document.write(`Is "${word}" a palindrome?`, isPalindrome(word));



// // 11
// function capitalizeWords(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
// console.log(capitalizeWords('the quick brown fox')); 




// // 12
// function LongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// document.write(LongestWord('Web Development Tutorial')); 



// // 13
// function countOccurrences(str, letter) {
//     return str.split(letter).length - 1;
// }
// document.write(countOccurrences('JSResourceS.com', 'o')); 


// // 14
// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     document.write("The circumference is", circumference.toFixed(2));
// }
// calcCircumference(5); 

// To calculate area
// function calcArea(radius) {
//     const area = Math.PI * Math.pow(radius, 2);
//   document.write("The area is", area.toFixed(2));
// }
// calcArea(2); 
