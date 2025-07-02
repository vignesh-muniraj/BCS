
// var arr = [2,3,4,5];
// var r = arr.unshift(1);
// console.log(arr,r);
// // console.log(arr.unshift(0));

// var rev = [1,2,3,4];
// var r1 = rev.reverse();
// console.log(rev,r1);


var y1 = "present";
var y2 = "absent";
var y3 = "present";

// if (y1 == "present" && y2 == "present" && y3 == "present") {
//   console.log("Class started");
// } else {
//   console.log("No Class");
// }

// if ([x1, x2, x3].every((n) => n > 15)) {
//   console.log("Cool");
// } else {
//   console.log("Hot");
// }

// if ([20, 10, 15].every((n) => n > 15)) {
//   console.log("Cool");
// } else {
//   console.log("Hot");
// }


//Task 1.1
if([y1,y2,y3].every((st) => st == "present")){
      console.log("Class started");
}else{
      console.log("No Class");
}
//Task 1.2

const students = [
  { name: "Aarav", status: "present" },
  { name: "Divya", status: "present" },
  { name: "Rohan", status: "present" },
];



if(students.every((stu )=> stu.status == "present")){
     console.log("Class started");
}else{
    console.log("No Class");
}

// Task 1.2.1  &&
if(students[0].status == "present" && students[1].status == "present" && students[2].status == "present"){
     console.log("Class started");
}else{
    console.log("Task 1.2.1"+" No Class");
}

// Task 1.2.2
if(students.every((stu) => stu.status == "present")){
     console.log("Class started");
}else{
    console.log("No Class");
}


// const numbers = [1, 2, 3, 4, 5];

// // ===== YOUR CODE BELOW =====
// // Use map to double each number
// const doubleNumbers = numbers => numbers.map((n) => n * 2);

// // console.log(typeof doubleNumbers)

// console.log(JSON.stringify(doubleNumbers(numbers)));


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ===== YOUR CODE BELOW =====
// Use filter to keep only even numbers
const getEvenNumbers = numbers => numbers.map((num) => num % 2 == 0);
  // Your code here
  


console.log(JSON.stringify(getEvenNumbers(numbers)));


var s= "-";
console.log(s.repeat(50));

// function Stocks(books){
//      books.map((book) => (opr));
//      function opr(){
//         if(book == "Fiction"){
//           console.log("The are no good books available 😔");
//         }
//      }
//  }

const books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]
const getTitle = (books) => books.map((book) => book.title);
console.log(getTitle(books));

const genreFiction = (books) =>{
   return  books
   .filter((book) =>  book.genre == "Fiction")
   .map((book) => book.title );
}
console.log(genreFiction(books));
var n = 25;
console.log(n/3);

// console.log("Hello");
// const numbers1 = [1, 2, 3, 4, 5];

// // ===== YOUR CODE BELOW =====
// // Use reduce to sum all numbers
// const sumNumbers = numbers1 => numbers1.map((num) => num += num ) ;
  


// console.log(sumNumbers(numbers1));
