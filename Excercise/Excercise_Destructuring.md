# Destructuring
# Exercise 1
Create a basic arrow function that adds two numbers. This is your first step into ES6!
### Answer
```js
const add = (x, y) => x + y;
console.log(add(5, 3));
console.log(add(10, 7));
```
# Expected Output
8
17

## Excercise 9

Extract properties from an object using destructuring assignment.

### Answer
```js
const person = { name: "Alice", age: 30, city: "New York" };

// ===== YOUR CODE BELOW =====
// Use object destructuring to extract name and age
const extractPersonInfo = ({ name,age }) => {
  

  return `${name} is ${age} years old`;
};

console.log(extractPersonInfo(person));
```

### Expected Output

Alice is 30 years old.


# Excercise 11

Use the spread operator to combine arrays and copy objects.
 
### Answer
```js
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];

// ===== YOUR CODE BELOW =====
// Use spread operator to combine arrays
const combineArrays = (arr1, arr2) => {
  // Your code here - use spread operator
  const combine = [...arr1, ...arr2];
  return combine;
 
  
};

console.log(JSON.stringify(combineArrays(fruits, vegetables)));
```
### Expected Output

["apple","banana","carrot","broccoli"]

 # Excercise 15

Transform an array of numbers by doubling each value using the map method. 


### Answer
 ```js
 const numbers = [1, 2, 3, 4, 5];


const doubleNumbers = numbers =>  numbers.map((n) => n * 2);



console.log(JSON.stringify(doubleNumbers(numbers)));
```
### Expected Output
[2,4,6,8,10]

# Exercise 16

Filter an array to keep only even numbers using the filter method.
### Answer
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const getEvenNumbers = numbers => numbers.filter((num) => num %2 ==0 );
  


console.log(JSON.stringify(getEvenNumbers(numbers)));
```
# Excepted output
[2,4,6,8,10]

# Exercise 3.1
Please provide the list of book titles

### Answer 

```js
books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]

const getTitle = (books) => books.map((book) => book.title);
console.log(getTitle(books));

```
# Expected Output
["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]

 ## Exercise 3.2
  Please provide the only Fiction books
  ### Answer

  ```js
  const genreFiction = (books) =>{
   return  books
   .filter((book) =>  book.genre == "Fiction")
   .map((book) => book.title );
}
console.log(genreFiction(books));
```
# Expected Output
["Infinite Jest",  "The Catcher in the Rye"]




# Exercise 19
Write a function that finds a movie by ID and returns its title and genre in a formatted string using array methods and template literals.
### Answer
```js
const getMovieDetails = (movies, id) => {
  const movieDetails = movies.filter((movie) => movie.id == id);
  const vowels = ["a", "e", "i", "o","u"];
  if (movieDetails.length != 0) {
    const fname = movieDetails[0].genre.slice(0, 1).toLowerCase();
    if (vowels.includes(fname)) {
      return `${movieDetails[0].title} is an ${movieDetails[0].genre} movie`;
    } else {
      return `${movieDetails[0].title} is a ${movieDetails[0].genre} movie`;
    }
  }
  return `Movie Not Fount`;
};

console.log(getMovieDetails(movies, 1));
console.log(getMovieDetails(movies, 5));
console.log(getMovieDetails(movies, 6));
```
# Expected Output
Baahubali is an Action movie
Jersey is a Sports movie
Movie not found
# Exercise 21
Write a function that checks if all movies of a certain genre have ratings above a certain value using array methods.
### Answer
```js
const allRatingsAboveForGenre = (movies, rating, genre) => {
  const movieName = movies.filter((movie) => movie.genre == genre);
const ratingValue = movieName.every(movie => movie.ratings.every(rt => rt > rating))
if(ratingValue){   
     return `Yes, all ${genre} movies are above ${rating} ratings`;
}
else{
    return `No, not all ${genre} movies are above ${rating} ratings`;

}
};

console.log(allRatingsAboveForGenre(movies, 7, "Action"));
console.log(allRatingsAboveForGenre(movies, 8, "Biography"));
```
# Expected Output
Yes, all Action movies are above 7 ratings
No, not all Biography movies are above 8 ratings
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
# Exercise
### Answer
```js
```
# Expected Output
