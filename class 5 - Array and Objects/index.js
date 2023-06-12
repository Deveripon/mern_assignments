//Array================================================================================
/* 
1. How do you declare an empty array in JavaScript?
2. How do you access the value at a specific index in an array?
3. How do you add an element to the end of an array?
4. How do you remove the last element from an array?
5. How do you find the length of an array?
6. How do you check if a specific value exists in an array?
7. How do you sort an array in ascending order?
8. How do you iterate over each element in an array using a loop?
9. How do you remove an element from a specific index in an array?
10. How do you merge two arrays together in JavaScript?
11. How do you find the index of a specific value in an array?
12. How do you remove a specific value from an array?
13. How do you check if an array is empty?
14. How do you convert an array to a string in JavaScript?
15. How do you convert a string to an array in JavaScript?
16. How do you check if an array contains only unique values?
17. How do you reverse the order of elements in an array?
18. How do you check if two arrays are equal in JavaScript?
19. How do you find the maximum and minimum values in an array?
20. How do you create a new array by extracting a portion of another array? */

/* =================================================================================== */
//Solution number 1. How do you declare an empty array in JavaScript?

/* const emptyArray = []; */

/* =================================================================================== */
//Solution number 2. How do you access the value at a specific index in an array?
const arr = ["jamal", "kamal", "rahim", "kalam"];
const index = arr[2];
/* console.log(index); */

/* =================================================================================== */
//Solution number 3. How do you add an element to the end of an array?

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = arr1.push(10);
/* console.log(arr1); */

/* =================================================================================== */
//Solution number 4. How do you remove the last element from an array?
const arr3 = [1, 2, 3, 4, 5, 6, 7];
const arr4 = arr3.pop();
/* console.log(arr3); */

/* =================================================================================== */
//Solution number 5. How do you find the length of an array?
const arr5 = [1, 2, 3, 4, 5];
const length = arr5.length;
/* console.log(length); */

/* =================================================================================== */
//Solution number 6. How do you check if a specific value exists in an array?
//we can find any value of array by includes() method.

const arr6 = ["jamalo", "kamal", "rahim", "jarina", "marjina"];
const value = "kamal";
const exx = arr6.includes(value);
/* console.log(exx); */

//another example://we can find any value of array by indexOf() method.
const arr7 = ["jamalo", "kamal", "rahim", "jarina", "marjina"];
const val = "rahim";
const check = arr7.indexOf(val) ? "value matched" : "not exist";
/* console.log(check); */

//another example: //we can find any value of array by loop.
const arr8 = ["jamalo", "kamal", "rahim", "jarina", "marjina"];
const desire = "jarina";
let result = arr8.filter((data) => {
	return data === desire;
});
/* console.log(result); */

/* =================================================================================== */
//Solution number 7. How do you sort an array in ascending order?
const arr9 = ["alo", "jamalo", "kamal", "rahim", "jarina", "marjina"];
const sortedArray = arr9.sort();
/* console.log(sortedArray); */

/* =================================================================================== */
//Solution number ****. How do you sort a two digit number array in ascending order?
const arr10 = [11, 14, 16, 17, 45, 50, 35, 24, 27, 3];
const sortArray = arr10.sort((a, b) => a - b);
/* console.log(sortArray); */

/* =================================================================================== */
//Solution number 8. How do you iterate over each element in an array using a loop?
const arr11 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
/* for (let i = 0; i < arr11.length; i++) {
	console.log(arr11[i]);
} */
//another iteration by foreach loop

const arr12 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
let res = [];
/* arr12.forEach((data) => {
	console.log(data);
});
 */
/* =================================================================================== */
//Solution number 9. How do you remove an element from a specific index in an array?
const arr13 = ["alo", "jamalo", "kamal", "rahim", "jarina", "marjina"];
const splised = arr13.splice(2, 2, "ripon", "rohim", "mony");

/* =================================================================================== */
//Solution number 10. How do you merge two arrays together in JavaScript?

const arr14 = ["alo", "tomato", "potol"];
const arr15 = ["lao", "kumra", "jhinga"];
const merged = arr14.concat(arr15);

//=============================================================================================================================================================================================================
/* Object data */
/* 1. Create an object called "person" with properties for name, age, and occupation.

2. Add a method to the "person" object called "greet" that prints a greeting message including the person's name.

3. Create an object called "car" with properties for make, model, and year.

4. Add a method to the "car" object called "startEngine" that prints a message saying the engine has started.

5. Create an object called "book" with properties for title, author, and number of pages.

6. Add a method to the "book" object called "read" that prints a message saying the book has been read.

7. Create an object called "restaurant" with properties for name, cuisine, and rating.

8. Add a method to the "restaurant" object called "getRating" that returns the restaurant's rating.

9. Create an object called "shoppingCart" with properties for items (an array of items) and total (the total cost of the items).

10. Add a method to the "shoppingCart" object called "addItem" that adds an item to the items array and updates the total cost.

11. Create an object called "movie" with properties for title, director, and releaseYear.

12. Add a method to the "movie" object called "getAge" that calculates and returns the age of the movie (in years) based on the current year.

13. Create an object called "user" with properties for username, email, and password.

14. Add a method to the "user" object called "changePassword" that takes a new password as a parameter and updates the password property.

15. Create an object called "bankAccount" with properties for accountNumber, balance, and accountHolder.

16. Add a method to the "bankAccount" object called "withdraw" that takes an amount as a parameter and subtracts it from the balance.

17. Create an object called "product" with properties for name, price, and quantity.

18. Add a method to the "product" object called "getTotalPrice" that calculates and returns the total price of the product (price multiplied by quantity).

19. Create an object called "game" with properties for name, genre, and rating.

20. Add a method to the "game" object called "play" that prints a message saying the game is being played.

***********Create a complete Developer array and object data structure with monthly income. And search devs by stack, location, income, age 


***********Create a complete fifth class students array and object data structure and find their result with gpa, grade, cgpa and final result   
 */

const resultCal = (name, ban, eng, math, roll) => {
	//lets calculate gpa
	let gpa;
	const gpaCal = (marks) => {
		if (marks >= 0 && marks < 33) {
			gpa = 0;
		} else if (marks >= 33 && marks < 40) {
			gpa = 1;
		} else if (marks >= 40 && marks < 50) {
			gpa = 2;
		} else if (marks >= 50 && marks < 60) {
			gpa = 3;
		} else if (marks >= 60 && marks < 70) {
			gpa = 3.5;
		} else if (marks >= 70 && marks < 80) {
			gpa = 4;
		} else if (marks >= 80 && marks <= 100) {
			gpa = 5;
		} else {
			gpa = "invalid";
		}
		return gpa;
	};
	//lets calculate grade
	let grade;
	const gradeCal = (gpa) => {
		if (gpa > 0 && gpa < 1) {
			grade = "F";
		} else if (gpa > 1 && gpa < 2) {
			grade = "D";
		} else if (gpa > 2 && gpa < 3) {
			grade = "C";
		} else if (gpa > 3 && gpa < 3.5) {
			grade = "B";
		} else if (gpa > 3.5 && gpa < 4) {
			grade = "A-";
		} else if (gpa > 4 && gpa < 5) {
			grade = "A";
		} else if (gpa == 5) {
			grade = "A+";
		} else {
			grade = "invalid";
		}
		return grade;
	};
	//lets find out is any subject have fail or not and return the final result
	let result;
	if (gpaCal(ban) === 0 || gpaCal(eng) === 0 || gpaCal(math) === 0) {
		result = `Sorry ! ${name} You are failed`;
	} else {
		const cgpa = (gpaCal(ban) + gpaCal(eng) + gpaCal(math)) / 3;
		const finalCgpa = cgpa.toFixed(2);
		result = `Hi ${name} you are passed and your cgpa is ${finalCgpa} and Your Grade is ${gradeCal(
			finalCgpa
		)}`;
	}
	return result;
};
/* console.log(resultCal("Ripon", 90, 80, 80, 10)); */

//lets make the students array and object data structure

const students = [
	{
		id: 1,
		roll: 1,
		class: "five",
		name: "Ripon Miah",
		age: 18,
		marks: {
			ban: 50,
			eng: 90,
			math: 70,
		},
		result: function () {
			return resultCal(
				this.name,
				this.marks.ban,
				this.marks.eng,
				this.marks.math
			);
		},
	},
	{
		id: 2,
		roll: 2,
		class: "five",
		name: "Mony Akter",
		age: 28,
		marks: {
			ban: 80,
			eng: 90,
			math: 70,
		},
		result: function () {
			return resultCal(
				this.name,
				this.marks.ban,
				this.marks.eng,
				this.marks.math
			);
		},
	},
];

students.map((data) => {
	console.log(data.result());
});
