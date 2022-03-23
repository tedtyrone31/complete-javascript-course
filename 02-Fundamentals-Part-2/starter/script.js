"use strict";

// function myName(employee) {

//     const person = `The Entry-level Web developer's full name
// is ${employee}.`;

//     return person;
// }

// const employee1 = myName("Ted Tyrone Bolanio");
// console.log(employee1);

// const employee2 = myName("Kathlaine Carousel Astillero");
// console.log(employee2);

// let myYear = prompt("Please enter your birth year.")

// function calcAge(birthYear) {
//     let yearNow = 2022;
//     let x = yearNow - birthYear;
//     return x;
// }

// const age = calcAge(myYear);
// console.log(age);

// function showFullName(namecontainer) {
//     let x = namecontainer;
//     return x;
// }

// let fullName = prompt("Please enter your full name.")
// const yourName = showFullName(fullName);
// console.log(yourName);

// function showColor(color) {
//     let theColor = `${color}green`;
//     return theColor;
// }

// const colorContainer = prompt("Pick your color.")
// const myColor = showColor(colorContainer);

// alert(myColor);

// function yearsUntilRetirement(name, birthYear) {
//     let retirementAge = 65;
//     let yearNow = 2022;
//     let age = yearNow - birthYear;
//     let yearsNeeded = retirementAge - age;
//     return `Your Name is ${name}.
// And you need ${yearsNeeded} years for retirement. `;

// }

// const name = prompt(`Enter your name`);
// const birthYear = prompt(`Enter your birth year`);
// const YearsUntilRetirement = yearsUntilRetirement(name, birthYear);

// alert(YearsUntilRetirement);

// const name = prompt(`Enter your name`);
// const birthYear = prompt(`Enter your birth year`);
// const YearsUntilRetirement = yearsUntilRetirement(name, birthYear);

// alert(YearsUntilRetirement);

// function yearsUntilRetirement(name, birthYear) {
//     let retirementAge = 65;
//     let yearNow = 2022;
//     let age = yearNow - birthYear;
//     let yearsNeeded = retirementAge - age;
//     return `Your Name is ${name}.
// And you need ${yearsNeeded} years for retirement. `;

// }

// const name = prompt(`Enter your name`);
// const birthYear = prompt(`Enter your birth year`);
// const YearsUntilRetirement = yearsUntilRetirement(name, birthYear);

// alert(YearsUntilRetirement);

// function doubleYearsNeeded(double) {
//     return double * 2;
// }

// function yearsUntilRetirement(name, birthYear) {
//     let retirementAge = 65;
//     let yearNow = 2022;
//     let age = yearNow - birthYear;
//     let yearsNeeded = retirementAge - age;
//     let doubleNeededYears = doubleYearsNeeded(yearsNeeded);
//     return `Your Name is ${name}.
// And you need ${yearsNeeded} years for retirement.
// Lets multiply it by 2. And now you need ${doubleNeededYears} years for retirement. `;

// }

// function yearlySalary(salary) {
//     return salary * 12;
// }

// function personInfo(namecontainer, salarycontainer) {
//     let salaryYearly = yearlySalary(salarycontainer);
//     return `Your full name is ${namecontainer}
// Your salary is ${salarycontainer}
// So your yearly salary is ${salaryYearly}`;
// }

// const namecontainer = prompt(`Enter your full name:`);
// const salarycontainer = prompt(`Enter your salary:`);
// const personFinalInfo = personInfo(namecontainer, salarycontainer);

// alert(personFinalInfo);
// console.log(typeof salarycontainer);
// console.log(typeof namecontainer);

// function personInfo(namecontainer, salarycontainer) {
//     return `Your full name is ${namecontainer}
// And your salary is ${salarycontainer}`;
// }

// const namecontainer = prompt(`Enter your full name:`);
// const salarycontainer = prompt(`Enter your salary:`);
// const personFinalInfo = personInfo(namecontainer, salarycontainer);

// alert(personFinalInfo);

// function dolphinsAverageScore(dolphins1stScore, dolphins2ndScore, dolphins3rdScore) {
//     let finalScore = (Number(dolphins1stScore) + Number(dolphins2ndScore) + Number(dolphins3rdScore));
//     let averageDolphins = finalScore / 3;
//     return averageDolphins.toFixed(0);
// }

// function koalasAverageScore(koalas1stScore, koalas2ndScore, koalas3rdScore) {
//     let finalScore = (Number(koalas1stScore) + Number(koalas2ndScore) + Number(koalas3rdScore));
//     let averageKoalas = finalScore / 3;
//     return averageKoalas.toFixed(0);
// }

// alert(`Input Scores for Dolphins Team`);

// let dolphins1stScore = prompt(`Input first score for Dolphins:`)
// let dolphins2ndScore = prompt(`Input second score for Dolphins:`)
// let dolphins3rdScore = prompt(`Input third score for Dolphins:`)

// alert(`Input Scores for Dolphins Team`);
// let koalas1stScore = prompt(`Input first score for Koalas:`)
// let koalas2ndScore = prompt(`Input second score for Koalas:`)
// let koalas3rdScore = prompt(`Input third score for Koalas:`)

// // console.log(`Average Score for the Koalas is:` + dolphinsAverageScore(dolphins1stScore, dolphins2ndScore, dolphins3rdScore));
// // console.log(`Average Score for the Dolphins is:` + koalasAverageScore(koalas1stScore, koalas2ndScore, koalas3rdScore));

// const dolphinScore = (dolphins1stScore, dolphins2ndScore, dolphins3rdScore) => (Number(dolphins1stScore) + Number(dolphins2ndScore) + Number(dolphins3rdScore)) / 3;
// let dolphinScore1 = dolphinScore1(dolphins1stScore, dolphins2ndScore, dolphins3rdScore);
// console.log(dolphinScore1)
// const koalaScore = (koalas1stScore, koalas2ndScore, koalas3rdScore) => (Number(koalas1stScore) + Number(koalas2ndScore) + Number(koalas3rdScore)) / 3;
// console.log(`Average score for Koalas is: ` + koalaScore);

// const checkWinner = function (dAverageScore, kAverageScore) {
//     if (dAverageScore >= 2 * kAverageScore) {
//         console.log("Dolphins is the Winner!")
//     }
//     else if (kAverageScore >= 2 * dAverageScore) {
//         console.log("Koalas is the Winner!")
//     }
//     else {
//         console.log("No team Wins!")
//     }
// }
// checkWinner(123, 555);

// alert(`Which phone is more expensive?`)
// const vivoPrice = prompt(`Input price of Vivo Phone:`)
// const iphonePrice = prompt(`Input price of  iPhone:`)
// const vivoScore = ["Vivo", "Great", "Fast"];
// const iPhoneScore = ["iPhone", "The Best", "Phone"];

// function calcPrice(vivoPrice, iphonePrice) {
//     const vivoFinalPrice = Number(vivoPrice);
//     const iphoneFinalPrice = Number(iphonePrice);

//     console.log(`Vivo's Price is:`, vivoFinalPrice);
//     console.log(`Iphone's Price is:`, iphoneFinalPrice);

//     if (vivoFinalPrice > iphoneFinalPrice) {
//         console.log(`Vivo is more Expensive!
// With the price of ${vivoFinalPrice}`);
//         return vivoScore;
//     }
//     else {
//         console.log(`iPhone is more Expensive!
// With the price of ${iphoneFinalPrice}`);
//         return iPhoneScore;
//     }

// }

// console.log(calcPrice(vivoPrice, iphonePrice));

// alert(`Input your Scores:`);
// let firstScore = prompt(`Input first Score:`);
// let secondScore = prompt(`Input second Score:`);
// let thirdScore = prompt(`Input third Score:`);

// const scores = new Array(firstScore, secondScore, thirdScore);
// const average = Number(firstScore) + Number(secondScore) + Number(thirdScore);

// console.log(`Your scores are`, scores);
// console.log(`your average is`, average);

// const name = prompt(`Enter your name`);
// const birthYear1 = prompt(`Enter your birth year`);
// const birthYear2 = prompt(`Enter your birth year`);
// const birthYear3 = prompt(`Enter your birth year`);

// const years = [birthYear1, birthYear2, birthYear3]
// const YearsUntilRetirement = yearsUntilRetirement(name, years[1]);

// console.log(years)
// alert(YearsUntilRetirement);
// const newYear = years.push(1984);
// console.log(years)
// function yearsUntilRetirement(name, years) {
//     let retirementAge = 65;
//     let yearNow = 2022;
//     let age = yearNow - years;
//     let yearsNeeded = retirementAge - age;
//     return `Your Name is ${name}.
// And you need ${yearsNeeded} years for retirement. `;

// }

// alert(`Steven's tip calculator:`)

// const custBill = prompt(`Please Input customer's Bill.`)
// const Bill = Number(custBill);

// const calcTip = calculator;

// console.log(calcTip(custBill));

// function calculator() {
//     if (Bill < 301 && Bill >= 50) {
//         const Tip1 = Bill * .15
//         const Total15 = Tip1 + Bill;
//         return (`Customers Bill is:  $${Bill}
// Customers Tip for 15% is:  $${Tip1}
// Total for the tip and customer Bill is: $${Total15}`)
//     }
//     else if (Bill > 300) {
//         const Tip2 = Bill * .20;
//         const Total20 = Tip2 + Bill;
//         return (`Customers Bill is:  $${Bill}
// Customers Tip for 20% is:  $${Tip2}
// Total for the tip and customer Bill is: $${Total20}`)
//     }
//     else {
//         console.log(`No need to give tip.`)
//     }

// }

// const topic = {
//     person: 'Ted',
//     lastName: 'Bolanio',
//     birthYear: 1989,
//     job: 'Web Developer',
//     hobbies: ['Playing Guitar', 'Playing Billiard', 'Playing computer games'],
//     isAlsoAnIT: true,

//     // calcAge: function () {
//     //     return 2022 - this.birthYear;
//     // },

//     //     showName: function () {
//     //         return this.person;
//     //     }
//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     summary: function () {
//         return `${this.person} is a  ${this.calcAge()}-year old ${this.job}.
// And he is ${this.isAlsoAnIT ? 'also' : 'not also'} an IT.`;

//     }
// };

// // console.log(topic);
// // console.log(`${topic.person} has ${topic.hobbies.length} hobbies. And his favorite is: ${topic.hobbies[1]}`)

// // console.log(topic.calcAge());

// // console.log(topic.calcAge());
// // console.log(topic.age);
// // console.log(topic.summary());

// const markAttr = {
//     fullName: 'Mark Miller',
//     weight: 78,
//     height: 1.69,

//     // weight: 92,
//     // height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.weight / this.height ** 2;
//         return `Mark BMI is: ${this.BMI.toFixed(2)}`;
//     },

// };

// const johnAttr = {
//     fullName: 'John Smith',
//     weight: 92,
//     height: 1.95,

//     // weight: 78,
//     // height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.weight / this.height ** 2;
//         return `John BMI is: ${this.BMI.toFixed(2)}`;
//     },

//     calcHigherBMI: function () {
//         // return `${markAttr.BMI < johnAttr.BMI ? "John's" : "Mark's"}  is higher than ${markAttr.BMI > johnAttr.BMI ? "John's" : "Mark's"}`;

//         if (markAttr.BMI > johnAttr.BMI)
//             return (`${markAttr.fullName}'s (${markAttr.BMI.toFixed(2)}) BMI is higher than ${johnAttr.fullName} (${johnAttr.BMI.toFixed(2)})!`);
//         else {
//             return (`${johnAttr.fullName}'s (${johnAttr.BMI.toFixed(2)}) BMI is higher than ${markAttr.fullName} (${markAttr.BMI.toFixed(2)})!`);
//         }
//     }

// };

// // console.log(markAttr);
// // // console.log(johnAttr);
// console.log(markAttr.calcBMI());
// console.log(johnAttr.calcBMI());

// // console.log(markAttr.BMI);
// // console.log(johnAttr.BMI);

// console.log(johnAttr.calcHigherBMI());
// let person = [
//     'Ted',
//     'Bolanio',
//     2022 - 1989,
//     'Web Developer',
//     ['Playing Guitar', 'Playing Billiard', 'Playing computer games'],
//     true
// ]

// for (let i = 0; i < person.length; i++) {

//     console.log(person[i], t       ypeof person[i]);
// }

// const years = [1989, 2015, 1988, 2022];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     let now = Number(2022);
//     let age = now - years[i];
//     console.log(`Age for year ${years[i]} is:`, age);
//     ages.push(age);

// }

// console.log(`Ages are`, ages)

// for (let i = person.length - 1; i >= 0; i--) {

//     console.log(i, person[i]);
// }

// const years = [1989, 2015, 1988, 2022];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     let now = Number(2022);
//     let age = now - years[i];
//     console.log(`Age for year ${years[i]} is:`, age);
//     ages.push(age);

// }

// console.log(`Ages are`, ages)

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`\n----------Starting exercise ${exercise}`)

//     for (let rep = 1; rep <= 5; rep++)
//         console.log(`Exercise ${exercise}: Weight lifting Exercise ${[rep]} 🏋️‍♂️`);
// }

// console.log()
// console.log(`-------------------------------------
//                 For Loop
// -------------------------------------`)
// for (let i = 1; i <= 10; i++) {
//     console.log(`Weight lifting Exercise ${i} 🏋️‍♂️`)
// }

// let i = 1;
// console.log()
// console.log(`-------------------------------------
//                 While Loop
// -------------------------------------`)
// while (i <= 10) {
//     console.log(`Weight lifting Exercise ${i} 🏋️‍♂️`)
//     i++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// console.log(`\n\n\n\n\n`)
// console.log(`-------------------------------------
// While Loop
// ------------------------------------- `)

// let dice = Math.trunc(Math.random() * 6) + 1;

// console.log(`Dice at a random Number: ${dice}`);
// while (dice !== 6) {

//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log(`Loop is about to end.`)
//     }
//     else {
//         console.log(`Dice is: ${dice}`)
//     }
// }

// alert(`Steven's tip calculator:`)

// // for (let i = 0; i <= 10; i++) {
// const custBill = prompt(`Please Input customer's Bill.`)
// const Bill = Number(custBill);

// const calcTip = calculator;
// console.log(calcTip(custBill));
// // }

// function calculator() {
//     if (Bill < 301 && Bill >= 50) {
//         const Tip1 = Bill * .15
//         const Total15 = Tip1 + Bill;
//         return (`Customers Bill is:  $${Bill}
// Customers Tip for 15% is:  $${Tip1}
// Total for the tip and customer Bill is: $${Total15}`)
//     }
//     else if (Bill > 300) {
//         const Tip2 = Bill * .20;
//         const Total20 = Tip2 + Bill;
//         return (`Customers Bill is:  $${Bill}
// Customers Tip for 20% is:  $${Tip2}
// Total for the tip and customer Bill is: $${Total20}`)
//     }
//     else {
//         console.log(`No need to give tip.`)
//     }

// }

// alert(`Steven's tip calculator:`)

// const calcTip = calculator;
// console.log(calcTip(Bill));
// }

// function calculator() {
//     if (Bill < 301 && Bill >= 50) {
//         const Tip1 = Bill * .15
//         const Total15 = Tip1 + Bill;
//         return (`Customers Bill is:  $${Bill}
// Customers Tip for 15% is:  $${Tip1}
// Total for the tip and customer Bill is: $${Total15}`)
//     }
//     else if (Bill > 300) {
//         const Tip2 = Bill * .20;
//         const Total20 = Tip2 + Bill;
//         return (`Customers Bill is:  $${Bill}
// Customers Tip for 20% is:  $${Tip2}
// Total for the tip and customer Bill is: $${Total20}`)
//     }
//     else {
//         console.log(`No need to give tip.`)
//     }

// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  // console.log(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    // sum+- arr[i];
  }
  // sum = sum + arr.length[i];
  // console.log(sum);
  console.log(`sum is ${sum}`);
  return sum / arr.length;
};

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
