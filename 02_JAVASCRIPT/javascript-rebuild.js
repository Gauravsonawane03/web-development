// const name="Gaurav";
// const age=23;
// const CurrentLanguage="JAVASCRIPT";
// const targetLanguage="C++";
// const skills=42.5;

// console.log(name);
// console.log(age);
// console.log(CurrentLanguage);
// console.log(targetLanguage);
// console.log(skills);

//----------------------------------//

// let a = 20;
// let b = 10;
// console.log(a+b);
// console.log(a%b);
// console.log(a>b);
// console.log(a>0 && b>0);

//------------------------------------//

// let score=40;
// if(score>=50){
//     console.log("Pass");
// }else{
//     console.log("Fail");
// }

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

//------------------------------------//

// function multiply(a,b){
//     return a*b;
// }
// const result=multiply(6,7);
// console.log(result);

//-----------------------------------//

// const numbers=[10,20,30,40,50];
// console.log(numbers[0]);
// console.log(numbers[numbers.length-1]);
// console.log(numbers.length);

//-----------------------------------//

// const student={
//     name: "Gaurav",
//     age: 23,
//     language: "JAVASCRIPT"
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student.language);

// const book={
//     title: "MY JOURNEY",
//     author: "GAURAV",
//     pages: 500,
//     isRead: false
// };
// console.log(book.titleitle);
// console.log(book.author);
// console.log(book.pages);
// console.log(book.isRead);
// book.isRead= true;
// console.log(book.isRead);

//---------------------------------//

// const student={
//     name: "Gaurav",
//     age: 23,
//     marks: 85
// };
// function marks(a){
//     if(a>=50){
//         return "Pass";
//     }else{
//         return "Fail";
//     }
// }
// console.log(student.name);
// const result=marks(student.marks);
// console.log(result);

//-----------------------------------//

// const marks=[10,30,20,50,80,100];

// function sumMarks(){
//     let sum=0;
//     for(let i=0; i<marks.length; i++){
//         sum+=marks[i];
//     }

//     return sum;
// }

// console.log( sumMarks());

// const marks = [45, 72, 30, 90, 55, 40];
// function getPassedMarks(){
//     let sum=0;
//     let count=0
//     for(let i=0; i<marks.length; i++){
//         if(marks[i]>=50){
//             sum+=marks[i];
//             count++;
//         }
//     }
//     let average=sum/count;
//     return average;
// }
// console.log( getPassedMarks());

let name = "gaurav";
let age = 22;
let islearningJavaScript = true;
let targetLanguage = "JavaScript";

// console.log(name);
// console.log(age);
// console.log(islearningJavaScript);
// console.log(targetLanguage);

let a = 20;
let b = 6;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a > b);

// let marks=45;
// if(marks>=50){
//     console.log("Pass");
// }else{
// console.log("Fail");
// }

// let numbers = [10, 20, 30, 40, 50];
// for(let i=0;i<numbers.length;i++){
//     // console.log(numbers[i]);
// }

// let prices = [120, 50, 300, 80, 200];
// for(let i=0;i<prices.length;i++){
//     if(prices[i]>=100){
//         console.log(prices[i]);
//     }
// }

// function calculateTotal(a,b){
//         return a+b;
// }
// let total=calculateTotal(120,80);
// console.log(total);


// function add(a, b){
//     return a+b;
// }
// function addAndPrint(a, b){
//     console.log(a+b);
// }
// let result1=add(10,20);
// console.log(result1);

// let result2=addAndPrint(10,20);
// console.log(result2);

// function checkPass(marks){
//     if(marks>=50){
//         return "Pass";
//     }else{
//         return "Fail";
//     }
// }
// let result1=checkPass(75);
// console.log(result1);
// let result2=checkPass(45);
// console.log(result2);

// let prices = [100, 250, 80, 120];
// function calculateSum(prices){
//     let sum=0;
//     for(let i=0;i<prices.length;i++){
//         sum+=prices[i];
//     }
//     return sum;
// }
// let total=calculateSum(prices);
// console.log(total);

// let marks = [45, 72, 30, 90, 55, 40];
// function countPassedMarks(marks){
//     let count=0;
//     for(let i=0;i<marks.length;i++){
//         if(marks[i]>=50){
//             count++;
//         }
//     }
//     return count;
// }
// let totalPassed=countPassedMarks(marks);
// console.log(totalPassed);

// let numbers = [10, 55, 32, 80, 45, 100];
// function getLargeNumbers(numbers){
//     let largenumbers=[];
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]>=50){
//             largenumbers.push(numbers[i]);
//         }
//     }
//     return largenumbers;
// }
// console.log(getLargeNumbers(numbers));

let students = [
    { name: "A", marks: 72 },
    { name: "B", marks: 45 },
    { name: "C", marks: 88 },
    { name: "D", marks: 35 }
];
function getPassedStudents(students){
    let passedStudent=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=50){
            passedStudent.push(students[i].name);
        }
    }
    return passedStudent;
}
function getAveragePassedMarks(students){
    let sum=0;
    let count=0;
    let average=0;
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=50){
            sum+=students[i].marks;
            count++;
        }
    }
    return average=sum/count;
}
console.log(getAveragePassedMarks(students));
