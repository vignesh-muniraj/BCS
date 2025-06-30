//For loop
// for(let i=1 ;i<= 10 ;i++){
//     console.log("hii");
// }
// const codes= ["a","b","c","d"];
// for(i = 0; i<4 ;i++){
//     console.log(i + codes[i]);
// }
// for of
// for in

// task 1.1

const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

function values(avengers) {
  for (var avenger of avengers) {
    console.log(`${avenger} contains ${avenger.length} Letters`);
  }
}
values(avengers);

//task 1.3

function printPattern(pattern = "❤️", number = 5) {
  for (var i = 1; i <= number; i++) {
    console.log(pattern.repeat(i));
  }
}
printPattern("❤️", 5);
printPattern();

// Arrow function
const printPattern1 = (pattern = "↗️", number = 5) => {
  for (var i = 1; i <= number; i++) {
    console.log(pattern.repeat(i));
  }
};
printPattern1("↗️", 5);

// task 1.4
function getEvenNumbers(nums) {
  var answer = [];
  for (var index of nums) {
    if (index % 2 == 0) {
      answer.push(index);
    }
  }
  console.log(answer);
}
const nums = [80, 43, 72, 47, 20, 21];
getEvenNumbers(nums);

// const books = [
//     {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
//     {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
//     {"title": "Sapiens", "rating": 4.9, "genre": "History"},
//     {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
//     {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
// ]
// 1
// function data(books){
//     const titles=[];
//     for(let book of books){
//         titles.push(book["title"]);
//     }
//     return titles;
// }

// console.log(data(books));
// ["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]------------
// 2
// function data(books){
//     let titles=[];
//     for(let book of books){
//         if(book.genre == "Fiction"){
//             titles.push(book.title);
//         }
//     }
//     return titles;
// }

// console.log(data(books));

// ["Infinite Jest",  "The Catcher in the Rye"]------------------------------------------
// function data(books){

//     let titles=[];
//     let fic=[];
//     for(let book of books){
//  const {
//  title,
//  genre
//  } = book;
//         if(title){
//             titles.push(title);
//         }if(genre == "Fiction"){
//             titles.push(title);
//         }
//     }
//     return titles;

// }
console.log("New task");
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];
// function Stocks(books){
//      books.map((book) => (opr));
//      function opr(){
//         if(book == "Fiction"){
//           console.log("The are no good books available 😔");
//         }
//      }
//  }
function Stocks(books) {
  var ans = [];
  const fictionBooks = books.filter((book) => {
    if (book.genre === "Fiction") {
      ans.push(book.title);
    }
  });
  return ans;
}
console.log(Stocks(books));


let ratingCount = 0;
let ratingBooks = [];
let display;
books.map((book) => {
  if (book.rating >= 4.7) {
    ratingCount += 1;
    ratingBooks.push(book.title);
  }
  if (ratingCount == 0) {
    display = "The are no good books available 😔";
  } else if (ratingCount == 1) {
    display = `Highest rated books is ${ratingBooks}`;
  } else {
    display = `Highest rated books are: ${ratingBooks} `;
  }
});

console.log(display);

console.log(ratingCount);
