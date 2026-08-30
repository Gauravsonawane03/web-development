//--------basic fundamentals-----//
// let name = "Gaurav";
// let age = 22;
// let isStudent = true;
// let score = 95.5;
// let value = null;
// let x;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof score);
// console.log(typeof value);
// console.log(typeof x);

//------operator-------//

// let a = 10;
// let b = 3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a>b);
// console.log(a<b);
// console.log(a===b);
// console.log(a!==b);
// console.log(a>b && b<5);
// console.log(a>20 || b<5);
// console.log(!(a>b));

//----------conditionals------//

// let age = 10;

// if (age >= 18) {
//   console.log("Adult");
// } else if (age >= 13) {
//   console.log("Teenager.");
// } else 
//   console.log("Child.");

//----------------loops--------------//
// let sum=0;
// for(let i=1;i<11;i++){
//      sum=sum+i;
// }
//  console.log(sum);


// let i=10;
//  while(i>=1){
//   console.log(i);
//   i--;
//  }


//  for(let i=1;i<10;i++){
//   if(i===5){
//     continue;
//   }else if(i===8){
//     break;
//   }
//   console.log(i);
//  }


//-------------Functions----------//

// function square(number){
//         let result=number*number;
//         // console.log(result);
//         return result;
// }
// let answer=square(5);
// console.log(answer);

// function isEven(number){
//       if(number%2===0){
//         return true;
//       }else
//         return false;
// }
// let result = isEven(8);
// console.log(result);


// function sumEvenNumbers(n){
//   let sum=0
//   for(let i=1;i<=n;i++){
//     if(i%2===0){
//       sum=sum+i;
//     }
//   }
//   return sum;
// }
// let result=sumEvenNumbers(10);
// console.log(result);

//---------------------------------------//

// function sumOddNumbers(n){
//    let sum=0
//   for(let i=1;i<=n;i++){
//     if(i%2!==0){
//       sum+=i;
//     }
//   }
//   return sum;
// }
// let oddresult=sumOddNumbers(10);
// console.log(oddresult);

//---------------------------------------//

//  function countEvenNumbers(n){
//   let count=0;
//     for(let i=1;i<=n;i++){
//     if(i%2===0){
//       count++;
//     }
//   }
//   return count;
//  }
//  console.log(countEvenNumbers(10));

//-----------------------------------------//

//  function isPrime(n){
//   if(n<=1) return false;
//   for(let i=2;i<n;i++){
//     if(n%1===0){
//     return false;
//     }
//   }
//   return true;
//  }
//  console.log(isPrime(7));
//  console.log(isPrime(10));
//  console.log(isPrime(2));


 //---------ARRAYS----------------------//

//  let numbers=[10,20,30,40,50];
//  console.log(numbers[0]);
//  console.log(numbers[numbers.length-1]);
//  numbers[2]=0;
//  for(let i=0;i<numbers.length;i++){
//   console.log([numbers[i]]);
//  }
//  console.log(numbers.length);

//  let numbers=[3,7,2,9,4];
//  let sum=0;
//  for(let i=0;i<numbers.length;i++){
//   sum=sum+numbers[i];
//  }
//  console.log(sum);

//  let numbers = [12, 5, 8, 21, 4, 17];
//  let largest=numbers[0];
//  for(let i=0;i<numbers.length;i++){
//   if(numbers[i]>largest){
//     largest=numbers[i];
//   }
//  }
//  console.log(largest);


//--------objects--------------------//

// let book = {
//     title : "JAVASCRIPT",
//     author: "GAURAV",
//     price: 1000,
// };
// let student = {
//     name: "Gaurav",
//     age: 23,
//     marks: 90,
//     branch: "ENTC"
// };
// let mobile={
//     version: "ios 17",
//     manufactured: "sept 25",
//     price: 12500,
// };
// console.log(book.title);
// console.log(book.author);
// console.log(book.price);

// console.log(student.name);
// console.log(student.age);
// console.log(student.branch);
// console.log(student.marks);

// console.log(mobile.version);
// console.log(mobile.manufactured);
// console.log(mobile.price);

//---------practice-1-------//

// let numbers = [12, 5, 8, 21, 4, 17, 10, 3];

// function getEvenNumbers(numbers) {
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]%2===0){
//           console.log(numbers[i]);
//         }
        
//     }
// }

// console.log(getEvenNumbers(numbers));


//----------------Practice-2----------//

// let students = [
//     { name: "Gaurav", marks: 90 },
//     { name: "Rahul", marks: 72 },
//     { name: "Amit", marks: 85 },
//     { name: "Neha", marks: 65 }
// ];
// function getTopStudents(students) {
//     for(let i=0;i<students.length;i++){
//         if(students[i].marks>=80){
//             console.log(students[i].name);
//             console.log(students[i].marks);
//         }
//     }
// }

// getTopStudents(students);

//----------practice-3-------------//

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];
function getExpensiveProducts(products) {
    for(let i=0;i<products.length;i++){
        if(products[i].price > 5000){
            console.log(products[i].name);
        }
    }
}
function getTotalPrice(products){
    let total=0;
    for(let i=0;i<products.length;i++){
        total+=products[i].price;
    }
    console.log(total);
}

function getProductStatus(products){
    for(let i=0;i<products.length;i++){
        if(products[i].price >= 10000){
            console.log("EXPENSIVE: ",products[i].name);
        }else{
            console.log("AFFORDABLE: ",products[i].name);
        }
    }
}

function getAffordableProducts(products){
    let affordable=[];
    for(let i=0;i<products.length;i++){
        if(products[i].price < 10000){
          affordable.push(products[i].name);
        }
    }
    return affordable;
}

function getProductNames(products){
    let names=[];
    for(let i=0;i<products.length;i++){
       names.push(products[i].name);
    }
    return names;
}


let names=products.map(function(product) {
    return product.name;
});
// console.log(names);

let expensive = products.filter(function(product) {
    return product.price>=10000;
});

// console.log(expensive);

let cheapProducts = products.filter(function(product){
    return product.price<2000;
});

// console.log(cheapProducts);

let findproduct = products.find(function(product){
    return product.price > 10000;
});

// console.log(findproduct);

let cheapProd= products.filter(function(product){
    return product.price < 2000;
});

// console.log(cheapProd);

let affordableProductNames=products.filter(function(product){
    return product.price<10000;
}) .map(function(product){
    return product.name;
});

// console.log(affordableProductNames);

function getAffordableProductNames(products) {
    let result=products.filter(function(product){
    return product.price>10000;
}) .map(function(product){
    return product.name;
});
return result;
}
// console.log(getAffordableProductNames(products));

function findProductByName(products, name) {
    let result = products.find(function(product) {
        return product.name===name;
    });

    return result;
}
// console.log(findProductByName(products, "Phone"));
// console.log(findProductByName(products, "Mouse"));

function getAffordableProductNames(products, maxPrice){
    let result= products.filter(function(product){
            return product.price<maxPrice;
    }).map(function(product){
        
        return product.name;
    });
    return result;
}
console.log(getAffordableProductNames(products,10000));