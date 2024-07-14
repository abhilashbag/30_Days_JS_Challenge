//Task 1

let num1  = 10;
let num2 = 12;

let sum = num1 + num2 ;

console.log(sum);

//Task 2
let one = 12;
let two = 10;

let sum1 = one - two;
console.log(sum1);

//Task 3
let mul1 = 5;
let mul2 = 5;

let sum3 = mul1 * mul2;
console.log(sum3);

// Task 4
let div1 = 120;
let div2 = 12;

let sum4 = div1 / div2;
console.log(sum4);

//Task 5
let rem1  = 10;
let rem2  = 2 ;

let res = rem1 % rem2;
console.log(res);

//Task 6
let num4 = 9 ;
num4 += 1;
console.log(num4);


//Task 7
let num5 = 12;
num5 -= 5;
console.log(num5);

//Task 8
let small = 20;
let big = 30;
let res1 = small > big
let res2 = big > small

console.log(res1);
console.log(res2);  

//Task 9

let small1 = 20;
let big1 = 30;
let res4 = small <= big
let res5 = big >= small

console.log(res4);
console.log(res5);

//Task 10
let  first = 90 ;
let second = "90";

console.log(first == second);  //true
console.log( first === second ) //false

//Task 11
let age = 18 ;
let time = 10;

if(age >18 && time < 10 ){
    console.log("go out")
}
// Task 12
if(age >18 || time > 10){
    console.log("stay home");
}


// Task 13
let user =true ;
if(!user) {
    console.log("No access to Dashboard");
}

//Feature Request
var number = 30;
var number2 = 10;

console.log(
    `
    Addition : ${number + number2} 
    Substraction: ${number - number2} 
    Multiplication: ${number * number2}
    Division: ${ number / number2}
      `
)


let z  = 10 ;
let y = 12;

console.log(
    `
    greater then : ${z >y}
    less than : ${z < y}
    greterthan equal : ${z >= y}
    lessthan equal : ${z <= y}
    logical and : ${z && y}
    logical or : ${z || y}
    `
)

//Ternary operator
let Age = 19;

(Age > 18 )? "Get a Voter ID" : " You are not Eligible";
