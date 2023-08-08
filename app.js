
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."
var fuel=+prompt("Enter remaining fuel of your car in litres");
var curFuel=0.25;
if fuel alert("Please refill the fuel in your car");

// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).

// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.
var students = [['David', 80], ['ahmar;', 77], ['asad', 88], ['ali', 95], ['umer', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).
// Array of literals
const literalArr = [null, undefined, true, false];

// Array of strings
const stringArr = ["apple", "banana", "cherry", "date"];

// Array of numbers
const numberArr = [1, 2.5, -3, 4.75];

// Array of booleans
const boolArr = [true, false, true, true];

// Array with mixed 
const mixedArr = ["apple", 2.5, true, null, 42, false];

// Array of qualifications
const qualificationArr = ["High School", "Bachelor's Degree", "Master's Degree", "Ph.D."];

// 5)Write a program to store phone manufacturers in an array.
const phoneManufacturers = ["Apple", "Samsung", "Google", "Huawei", "OnePlus", "Xiaomi", "Sony", "LG", "Nokia"];

console.log("Phone Manufacturers:");
for (let i = 0; i < phoneManufacturers.length; i++) {
    console.log(`${i + 1}. ${phoneManufacturers[i]}`);
}


// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.
const studentScores = [80, 72, 94, 65, 78, 91, 88, 76, 83];

console.log("Original Scores:", studentScores);

// Sorting the array in ascending order
studentScores.sort((a, b) => a - b);

console.log("Sorted Scores (Ascending Order):", studentScores);
.

// 8)Implement the FIFO (First In First Out) approach using arrays

// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].
const words = ["This", "is", "my", "cat"];
const combinedString = words.join(" ");

console.log(combinedString);


// 9)// Implement the LIFO (Last In First Out) approach using arrays.
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const lifoStack = new Stack();

lifoStack.push("Apple");
lifoStack.push("Banana");
lifoStack.push("Cherry");

console.log("Stack size:", lifoStack.size());

console.log("Popped item:", lifoStack.pop());
console.log("Popped item:", lifoStack.pop());

console.log("Stack size:", lifoStack.size());

console.log("Popped item:", lifoStack.pop());

console.log("Stack size:", lifoStack.size());


// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.
function searchInArray(arr, searchTerm) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchTerm) {
            return true;
        }
    }
    return false;
}

const items = ["Apple", "Banana", "Cherry", "Date", "Orange"];

const userInput = prompt("Enter an item to search:");

if (searchInArray(items, userInput)) {
    console.log(`${userInput} is found in the list.`);
} else {
    console.log(`${userInput} is not found in the list.`);
}

// 11)Write a program to identify the largest number in the given array.
function findLargestNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

const numbers = [15, 3, 27, 8, 42, 11];

const largestNumber = findLargestNumber(numbers);
console.log("The largest number in the array is:", 42);


// 12)Write a program to identify the smallest number in the given array.
const numbers = [2, 5, 9, 1, 6, 7, 4, 8];

let result = numbers[0];
for (let i=0; i < numbers.length; i++) {
    if (numbers[i] < result) {
        result = numbers[i];
    }
}

console.log("Smallest number is: " + 1);

// 13)Write a program to print multiples of 5 ranging from 1 to 100.
console.log("Multiples of 5 from 1 to 100:");
for (let i = 1; i <= 20; i++) {
    console.log(i * 5);
}

// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.
const num1 = parseFloat(prompt(10));
const num2 = parseFloat(prompt(20));

if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 + num2;
    document.write(`The sum of ${num1} and ${num2} is: ${result}`);
} else {
    document.write("Invalid input. Please enter valid numbers.");
}


// 14)Repeat task1 for subtraction, multiplication, division & modulus.

//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."
const cityName = prompt("Enter the name of the city:");

if (cityName === "Karachi") {
    console.log("Welcome to the city of lights.");
} else {
    console.log("Welcome.");
}

// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."
const gender = prompt("Enter your gender (Male or Female):");

if (gender === "Male") {
    console.log("Good Morning Sir.");
} else if (gender === "Female") {
    console.log("Good Morning Ma'am.");
} else {
    console.log("Invalid gender input. Please enter Male or Female.");
}

//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."
const color = prompt("Enter the color of the traffic signal (Red, Yellow, or Green):");

if (color === "Red") {
    console.log("Must Stop.");
} else if (color === "Yellow") {
    console.log("Ready to move.");
} else if (color === "Green") {
    console.log("Move now.");
} else {
    console.log("Invalid color input. Please enter Red, Yellow, or Green.");
}
