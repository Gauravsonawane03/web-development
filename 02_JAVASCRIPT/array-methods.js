let numbers = [10, 20, 30, 40, 50];
let revisedNum = numbers.filter((number) => {
  return numbers >= 25;
});
// console.log(revisedNum);

let products = [
  { name: "Laptop", price: 70000 },
  { name: "Mouse", price: 1200 },
  { name: "Keyboard", price: 2500 },
  { name: "Monitor", price: 15000 },
];
let result = products.filter((product) => {
  return product.price > 5000;
});
// console.log(result);

let Numbers = [10, 20, 30, 40, 50];
let newresult = Numbers.map((number) => {
  return number * 2;
});
// console.log(newresult);

let findresult = products.find((product) => {
  return product.name === "Keyboard";
});
// console.log(findresult);

let productname = products.map((names) => {
  return names.name;
});
// console.log(productname);

let students = [
  { name: "A", marks: 72 },
  { name: "B", marks: 45 },
  { name: "C", marks: 88 },
  { name: "D", marks: 35 },
  { name: "E", marks: 91 },
];
function getTopStudents(students) {
  let result = students.filter((student) => {
    return student.marks >= 80;
  });
  let names = result.map((student) => {
    return student.name;
  });
  return names;
}
console.log(getTopStudents(students));
