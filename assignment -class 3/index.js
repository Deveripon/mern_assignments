/**
 * Ans of the Ques number 1
 * Ques: Find GPA and Grade with respect to Marks in any subject
 * Solution are given below
 */

//GPA AND GRADE WILL CALCULATE FROM BELOW 4 SUBJECT,AND WILL SET A STATIC MARK VALUE TO SOLVE THE PROBLEM

let student_name = "Shahadat Hussain Ripon";
let bangla = 30;
let english = 30;
let math = 75;
let religion = 85;
/**
 * GPA and Grade Will distribute as follow
 * Mark Between           GPA       GRADE
 * 0 - 32                 0         = F
 * 33-39                  1         = D
 * 40 - 49                2         = B
 * 50-59                  3         = B+
 * 60-69                  3.5       = A-
 * 70 - 79                4         = A
 * 80 - 100               5         = A+
 */

//Now Lets Find the GPA Of Each Subject Respectivly by javascript function

function gpaCal(sub) {
  if (sub >= 0 && sub < 33) {
    return 0;
  } else if (sub >= 33 && sub <= 39) {
    return 1;
  } else if (sub >= 40 && sub <= 49) {
    return 2;
  } else if (sub >= 50 && sub <= 59) {
    return 3;
  } else if (sub >= 60 && sub <= 69) {
    return 3.5;
  } else if (sub >= 70 && sub <= 79) {
    return 4;
  } else if (sub >= 80 && sub <= 100) {
    return 5;
  } else {
    return NaN;
  }
}
gpaCal;

//lets assign the function into variable to increase code readability
let bn = gpaCal(bangla);
let en = gpaCal(english);
let mt = gpaCal(math);
let rel = gpaCal(religion);

//lets find has any subject fail or not
let total_Gpa;
bn === 0 || en === 0 || mt === 0 || rel === 0
  ? (total_Gpa = 0)
  : (total_Gpa = (bn + en + mt + rel) / 4);

//Now lets find the Grade based on GPA

if (total_Gpa === 0) {
  console.log(`Hi ${student_name} ! sorry, You are faild and your Grade = F`);
} else if (total_Gpa >= 1 && total_Gpa < 2) {
  console.log(
    `Hi ${student_name} ! Congratulations, You are Passed and your Grade = D and Your GPA ${total_Gpa}`
  );
} else if (total_Gpa >= 2 && total_Gpa < 3) {
  console.log(
    `Hi ${student_name} ! Congratulations, You are Passed and your Grade = C and Your GPA ${total_Gpa}`
  );
} else if (total_Gpa >= 3 && total_Gpa < 3.5) {
  console.log(
    `Hi ${student_name} ! Congratulations, You are Passed and your Grade = B and Your GPA ${total_Gpa}`
  );
} else if (total_Gpa >= 3.5 && total_Gpa < 4) {
  console.log(
    `Hi ${student_name} ! Congratulations, You are Passed and your Grade = A- and Your GPA ${total_Gpa}`
  );
} else if (total_Gpa >= 4 && total_Gpa < 5) {
  console.log(
    `Hi ${student_name} ! Congratulations, You are Passed and your Grade = A and Your GPA ${total_Gpa}`
  );
} else if (total_Gpa === 5) {
  console.log(
    `Hi ${student_name} ! Congratulations, You are Passed and your Grade = A+ and Your GPA ${total_Gpa}`
  );
} else {
  console.log("invalid result");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Ans of the Ques number 2
 * Ques: Create a loop that will rotate from 1000 to 300
 * Solution are given below
 */

for (let i = 1000; i > 300; i--) {
  console.log(`loop rotation number ${i}`);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Ans of the Ques number 3
 * Ques: Find the even and odd numbers from 1 and 1000 through for loop
 * Solution are given below
 */

for (let i = 1; i <= 1000; i++) {
  //lets find the even numbers
  if (i % 2 == 0) {
    console.log(`${i} is a even number`);
  }
  //lets find the odd numbers
  if (!(i % 2 == 0)) {
    console.log(`${i} is a odd number`);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Ans of the Ques number 4
 * Ques: Find the number divisable by 7 between 1 and 1000
 * Solution are given below
 */

for (let i = 1; i <= 1000; i++) {
  if (i % 7 == 0) {
    console.log(`${i} is a number that are divisable by 7`);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Ans of the Ques number 5
 * Ques: Create a loop using 'for' that will incriment 3 per step and break the loop when it finds a number divisable by 11
 * Solution are given below
 */

for (let i = 50; i < 1000; i = i + 3) {
  if (i % 11 == 0) {
    console.log(i);
    break;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Ans of the Ques number 6
 * Ques: Create a loop that rotates 500 times using the for loop where you just pull out the number divisable by 3 and 4
 * Solution are given below
 */

for (let i = 1; i <= 500; i++) {
  if (i % 3 == 0) {
    console.log(`${i} is a number that is divisable by 3`);
  } else if (i % 4 == 0) {
    console.log(`${i} is a number that is divisable by 4`);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Ans of the Ques number 7
 * Ques: Create a loop where the initial value is 10000, you need to rotate the loop 50 times by using the incriment and decriment operator twice.
 * Solution are given below
 */

//rotate the loop 50 times by incriment operator
let index = 1;
for (let i = 10000; i < 10050; i++) {
  console.log(`${index} : rotation number ${i}`);
  index++;
}
//rotate the loop 50 times by decriment operator
let serial = 1;
for (let i = 10000; i > 9950; i--) {
  console.log(`${serial} : rotation number ${i}`);
  serial++;
}
