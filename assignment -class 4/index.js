/**
 * Ans of the assignment number 1;
 * Question: create a function that will return children teenagers young people,old people from the age;
 * Solution are given below
 * 0-12 years are = children;
 * 13-17 years are = teenagers;
 * 18-38 years are = Young;
 * 39 < years are = old;
 */

let ageCal = (name, date_of_birth) => {
  //lets find the age
  let date = new Date();
  let current_date = date.getFullYear();
  let age = current_date - date_of_birth;

  //lets make a age range to identify that he/she is younger or children or Old.
  let age_status;
  if (age >= 0 && age <= 12) {
    age_status = "Children";
  } else if (age >= 13 && age <= 17) {
    age_status = "Teenager";
  } else if (age >= 18 && age <= 38) {
    age_status = "Young";
  } else if (age >= 39) {
    age_status = "Old";
  }
  //lets get the output
  let result = `Hi ${name} you are ${age} years old and you are ${age_status}`;
  return result;
};

let user_name = "Ripon Miah";
let date_of_birth = 1997;
console.log(ageCal(user_name, date_of_birth));

/////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Ans of the assignment number 2
 * Question: create a function that will return the area of a rectangle square and triangle
 * Solution are given below;
 */

let areaCal = (type, height, width) => {
  let area;

  switch (type) {
    case "rectangle":
      area = height * width;
      break;
    case "triangle":
      area = 0.5 * width * height;
      break;
    case "square":
      area = Math.pow(height, 2);
      break;
    default:
      area = "Please type valid type";
      break;
  }
  return `The area of the ${type} is ${area}`;
};

console.log(areaCal("square", 10, 10));

/////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Ans of the assignment number 3
 * Question: create a function that will return GPA, CGPA, GRADE function for result publishing
 * Solution are given below;
 */

let resultCal = (ban, eng, math, sci, rel) => {
  //let calculate GPA of each subject first

  let gpaCal = (marks) => {
    let gpa;
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
    } else if (marks >= 80 && marks < 100) {
      gpa = 5;
    }
    return gpa;
  };

  let ban_gpa = gpaCal(ban);
  let eng_gpa = gpaCal(eng);
  let math_gpa = gpaCal(math);
  let sci_gpa = gpaCal(sci);
  let rel_gpa = gpaCal(rel);
  let total_cgpa = (ban_gpa + eng_gpa + sci_gpa + math_gpa + rel_gpa) / 5;

  let gradeCal = (gpa) => {
    let grade;
    if (gpa >= 0 && gpa < 1) {
      grade = "F";
    } else if (gpa >= 1 && gpa < 2) {
      grade = "D";
    } else if (gpa >= 2 && gpa < 3) {
      grade = "B";
    } else if (gpa >= 3 && gpa <= 3.5) {
      grade = "A-";
    } else if (gpa > 3.5 && gpa < 4) {
      grade = "A";
    } else if (gpa >= 4 && gpa <= 5) {
      grade = "A+";
    } else {
      grade = "Invalid grade";
    }
    return grade;
  };
  //lets validate is any subject fail or not

  if (
    ban_gpa == 0 ||
    eng_gpa == 0 ||
    math_gpa == 0 ||
    sci_gpa == 0 ||
    rel_gpa == 0
  ) {
    return `
		Subject 				GPA				GRADE 									
		========================================================================
		Bangla					${ban_gpa}				${gradeCal(ban_gpa)}
		English					${eng_gpa}				${gradeCal(eng_gpa)}	
		Mathmatics				${math_gpa}				${gradeCal(math_gpa)}	
		Science					${sci_gpa}				${gradeCal(sci_gpa)}	
		Religion				${rel_gpa}				${gradeCal(rel_gpa)}	
		
		==========================================================================
		Total CGPA Score		FAILED				FAILED			
		
		
		`;
  } else {
    return `
		Subject 				GPA				GRADE 									
		========================================================================
		Bangla					${ban_gpa}				${gradeCal(ban_gpa)}
		English					${eng_gpa}				${gradeCal(eng_gpa)}	
		Mathmatics				${math_gpa}				${gradeCal(math_gpa)}	
		Science					${sci_gpa}				${gradeCal(sci_gpa)}	
		Religion				${rel_gpa}				${gradeCal(rel_gpa)}	
		
		==========================================================================
		Total CGPA Score		${total_cgpa}				${gradeCal(total_cgpa)}			
		
		
		`;
  }
};

//For better view test the result in browser console and increase the console width 50% of the monitor
console.log(resultCal(80, 90, 50, 70, 80));

/////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Ans of the assignment number 4
 * Question: Create an age calculator function
 * Solution are given below;
 */

//lets find the current date with date Constructor
let ageCalculator = (name, dob) => {
  let date = new Date();
  let current_date = date.getFullYear();
  let age = current_date - dob;
  return `Hi ${name} your age is ${age} years`;
};

console.log(ageCalculator("Ripon Miah", 1995));

/////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Ans of the assignment number 5
 * Question: Create a BMI function for health
 * Solution are given below;
 */

let bmiCalculator = (name, height, weight) => {
  let bmi = weight / Math.pow(height, 2);
  let actual_Bmi = bmi.toFixed(2);
  let overWeightBmi = actual_Bmi - 24.9;
  let underWeightBmi = 24.9 - actual_Bmi;
  let heightSquared = height * height;
  let underWeight = underWeightBmi * heightSquared;
  let overWeight = overWeightBmi * heightSquared;
  if (actual_Bmi < 18.5) {
    return `Hi ${name} your BMI is ${actual_Bmi} and you are ${underWeight.toFixed(
      2
    )} Kg  Under Weight`;
  } else if (actual_Bmi >= 18.5 && actual_Bmi <= 24.9) {
    return `Hi ${name} your BMI is ${actual_Bmi} and you are NORMAL`;
  } else if (actual_Bmi >= 25 && actual_Bmi <= 29.9) {
    return `Hi ${name} your BMI is ${actual_Bmi} and you are ${overWeight.toFixed(
      2
    )} Kg Over Weight`;
  } else if (actual_Bmi >= 30 && actual_Bmi <= 34.9) {
    return `Hi ${name} your BMI is ${actual_Bmi} and you are Obesity(Class 1) and you are  ${overWeight.toFixed(
      2
    )} Kg over weight`;
  } else if (actual_Bmi >= 35 && actual_Bmi <= 39.9) {
    return `Hi ${name} your BMI is ${actual_Bmi} and you are Obesity(Class 2)and you are  ${overWeight.toFixed(
      2
    )} Kg over weight`;
  } else if (actual_Bmi >= 40) {
    return `Hi ${name} your BMI is ${actual_Bmi} and you are Extreme Obesity and you are  ${overWeight.toFixed(
      2
    )} Kg over weight`;
  }
};
/**
 * give thr height and weight in metrick unit
 * height = meter
 * weight = kilogram
 */
console.log(bmiCalculator("ripon", 1.651, 60));
/////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Ans of the assignment number 6
 * Question: Create a currency converter function from taka to USD, CAD, POUND, EURO etc
 * Solution are given below;
 */

let currencyConverter = (currency = "BDT", amount) => {
  let rate;
  switch (currency) {
    case "USD":
      rate = 107.09;
      break;
    case "CAD":
      rate = 78.75;
      break;
    case "POUND":
      rate = 132.4;
      break;
    case "EURO":
      rate = 115.18;
      break;

    default:
      rate = 1;
      break;
  }
  return `${amount} ${currency} == ${amount * rate} BDT`;
};

console.log(currencyConverter("USD", 500));
