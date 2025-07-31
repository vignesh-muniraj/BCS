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
# Excercise 2

### Answer
```js
const greetUser = (name) => {
  return `Hello, ${name}!`;
};

console.log(greetUser("Alice"));
console.log(greetUser("Bob"))
```
# Expected Output
Hello, Alice!
Hello, Bob!

## Excercise 3
### Answer
```js
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob" };
const user3 = null;
const getUserAge = (user) => {
  return user?.age;
  
};
console.log(getUserAge(user1));
console.log(getUserAge(user2));
console.log(getUserAge(user3));
```

## Excercise 4
### Answer
```js 
const settings1 = { theme: "dark" };
const settings2 = { theme: null };
const settings3 = { theme: undefined };
const settings4 = {};

const getTheme = (settings) => {
  return settings.theme ?? "light";
  
};

console.log(getTheme(settings1));
console.log(getTheme(settings2));
console.log(getTheme(settings3));
console.log(getTheme(settings4));
```
## Excepted output
dark
light
light
light
## Excercise 5

### Answer
```js
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

const userWithAge = { user: { profile: { age: 25 } } };
const userWithoutProfile = { user: {} };

const getUserAge = (data) => {
  return data?.user?.profile?.age ?? "Age not provided";
  
};

console.log(getUserAge(userData));
console.log(getUserAge(userWithAge));
console.log(getUserAge(userWithoutProfile));

```
### Expected Output:
Age not provided
25
Age not provided
## Excercise 6
Calculate the total price of all products in your cart using arrow functions and array methods.
### Answer 
```js
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];
const getTotalPrice = (products) => products.reduce((acc, product) => acc + product.price,0);
console.log(getTotalPrice(products));
```

### Expected Output
2200

# Exercise 7
Write a function that takes a user object and returns a message indicating their activity status using template literals and ternary operator.
### Answer
```js
const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };
const user3 = { name: "Alice", active: null };

const getUserStatus = ( { name, active }) => {
  if (active == true)
    return `${name} is currently active`;
    return `${name} is currently inactive`;
};

console.log(getUserStatus(user1));
console.log(getUserStatus(user2));
console.log(getUserStatus(user3));
```
# Expected Output
Jane is currently active
John is currently inactive
Alice is currently inactive
## Excercise 8
Create a function that returns a greeting message based on the time of day using Date methods and template literals.
## Answer
```js
const greet = (name) => {
  const time = new Date().getHours();
  
  if (time >= 0 && time <= 11)
    return `Good morning, ${name}!`;
  else if (time >= 12 && time <= 17)
    return `Good afternoon, ${name}!`;
  else
    return `Good evening, ${name}!`;
};

console.log(greet("Alice"));
```
## Expected Output
Good morning, Alice!

## Excercise 9

Extract properties from an object using destructuring assignment.

### Answer
```js
const person = { name: "Alice", age: 30, city: "New York" };
const extractPersonInfo = ({ name,age }) => {

  return `${name} is ${age} years old`;
};

console.log(extractPersonInfo(person));
```

### Expected Output

Alice is 30 years old.
## Excercise 10

## Answer
```js
const colors = ["red", "green", "blue", "yellow"];
const coordinates = [10, 20];


const getFirstTwoColors = (colors) => {
  const[first,second] = colors;
  return `First: ${first}, Second: ${second}`;
};

console.log(getFirstTwoColors(colors));
```

Expected Output:
First: red, Second: green

# Excercise 11

Use the spread operator to combine arrays and copy objects.
 
### Answer
```js
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];
const combineArrays = (arr1, arr2) => {
  const combine = [...arr1, ...arr2];
  return combine;
};

console.log(JSON.stringify(combineArrays(fruits, vegetables)));
```
### Expected Output

["apple","banana","carrot","broccoli"]
# Excercise 12
Write a function that extracts the user's name and theme, providing default values if they are missing using destructuring with default values.
### Answer
```js
const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

const userWithoutSettings = { id: 2, name: "Adam" };
const getUserSettings = (user) => {
  const {name, settings: {theme = "light" } ={} } = user;
  return `${name} prefers the ${theme} theme`;
  
};

console.log(getUserSettings(userProfile));
console.log(getUserSettings(userWithoutSettings));
```
## Expected Output
Eve prefers the dark theme
Adam prefers the light theme

 # Excercise 13
 ```js
 const employees = [
  {
    id: 1,
    name: "Alice",
    position: "Developer",
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Bob",
    position: "Manager",
    skills: ["Leadership", "Communication"],
  },
  { 
    id: 3, 
    name: "Charlie", 
    position: "CEO", 
    skills: ["Strategy", "Vision"] 
  },
];
const addSkill = (employees, newSkill) => {
  return employees
    .map((employee) => ({...employee, skills:[...employee.skills,newSkill]}));
};

console.log(JSON.stringify(addSkill(employees, "Problem Solving"), null, 2));
 ```
 ###  Expected Output:
 ```js

[
  {
    "id": 1,
    "name": "Alice",
    "position": "Developer",
    "skills": [
      "JavaScript",
      "React",
      "Problem Solving"
    ]
  },
  {
    "id": 2,
    "name": "Bob",
    "position": "Manager",
    "skills": [
      "Leadership",
      "Communication",
      "Problem Solving"
    ]
  },
  {
    "id": 3,
    "name": "Charlie",
    "position": "CEO",
    "skills": [
      "Strategy",
      "Vision",
      "Problem Solving"
    ]
  }
]
 ```
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

# Exercise 17
### Answer
```js
const numbers = [1, 2, 3, 4, 5];
const sumNumbers = (numbers) => numbers.reduce((acc,curr)=> acc+curr)

console.log(sumNumbers(numbers));
```
# Expected Output
15

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


# Exercise 18
Write a function that generates a summary string for the top scorer using template literals and array methods.
### Answer
```js
const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
  { name: "Diana", score: 88 },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds and formats the top scorer
const getTopScorer = (scores) => {
  // Your code here - find the highest score and format the result
  const { name, score } = scores;
  return  filtered = scores.reduce((arr, cur) => arr.score > cur.score);
  
};

console.log(getTopScorer(scores));
```
# Expected Output
Charlie is the top scorer with a score of 92

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

# Exercise 20
Write a function that filters movies released after a certain year and calculates their average rating.
### Answer
```js
const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

const getAverageRatingAfterYear = (movies, year) => {
const filtered = movies.filter((movie)=> movie.year == year);
if(filtered == 0)
  return "No movies after the specified year";
const ratings = filtered.map((rating)=> rating.ratings).flat();
const total = ratings.reduce((cur,arr) => cur+arr)/3;
  return total.toFixed(2);

};

console.log(getAverageRatingAfterYear(movies, 2019));
console.log(getAverageRatingAfterYear(movies, 2020));

```
# Expected Output
8.83
No movies after the specified year

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

# Exercise 22
Write a function that returns a string with each movie's title and its ratings joined by commas using array methods.
### Answer
```js
const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
];


const getTitlesAndRatings = (movies) => {
  return movies
    .map((movie) => movie.title +": "+ movie.ratings.join(", ")).join(" | ");
  
};

console.log(getTitlesAndRatings(movies));
```
# Expected Output
Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8

# Exercise 23
### Answer
```js
const movies = [
  {
    id: 1,
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    id: 2,
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    id: 3,
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that compiles all ratings into a single array
const getAllRatings = (movies) => {
  return movies.map(movie => movie.ratings).flat()
  
};

console.log(JSON.stringify(getAllRatings(movies)));
```
# Expected Output
[8,9,10,9,8,9,10,9,8]

# Exercise 24
### Answer
```js
const movies = [
  {
    id: 1,
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    id: 2,
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    id: 3,
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
  {
    id: 4,
    title: "Eega",
    ratings: [7, 8, 9],
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds movie titles with high ratings
const getTitlesWithHighRatings = (movies, threshold) => {
 
 return movies.filter((movie)=> movie.ratings.some((rating) => rating >=threshold )).map(movie => movie.title)

};

console.log(JSON.stringify(getTitlesWithHighRatings(movies, 9)));
console.log(JSON.stringify(getTitlesWithHighRatings(movies, 10)));
```
# Expected Output
["Baahubali","Arjun Reddy","Mahanati","Eega"]
["Baahubali","Mahanati"]

# Exercise 26    (need to verify)
### Answer
```js
const movies = [
  { id: 1, title: "Baahubali", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", ratings: [10, 9, 8] },
  { id: 4, title: "Eega", ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", ratings: [9, 9, 8] },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds movies with low ratings
const getTitlesWithLowRatings = (movies, threshold) => {
  return movies.filter((movie) => movie.ratings.some((rating) => rating < threshold)).map(movie => movie.title)
  
};

console.log(JSON.stringify(getTitlesWithLowRatings(movies, 8)));
console.log(JSON.stringify(getTitlesWithLowRatings(movies, 9)));
```
# Expected Output
["Eega"]
["Baahubali","Mahanati","Eega","Jersey"]


# Exercise 27
### Answer
```js
const movies = [
  { id: 1, title: "Baahubali", genre: "Action", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", genre: "Drama", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", genre: "Biography", ratings: [10, 9, 8] },
  { id: 4, title: "Eega", genre: "Fantasy", ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", genre: "Sports", ratings: [9, 9, 8] },
];


const getTotalRatingsByGenre = (movies, genre) => {

 const filtered =  movies.filter((movie) => movie.genre == genre)
 return filtered.map((movie)=> movie.ratings.length).join()
  
};

console.log(getTotalRatingsByGenre(movies, "Action"));
console.log(getTotalRatingsByGenre(movies, "Drama"));
```
# Expected Output
3
3

# Exercise 29
### Answer
```js
const movies = [
  { id: 1, title: "Baahubali", director: "S. S. Rajamouli", year: 2015 },
  { id: 2, title: "Arjun Reddy", director: "Sandeep Reddy Vanga", year: 2017 },
  { id: 3, title: "Mahanati", director: "Nag Ashwin", year: 2018 },
  { id: 4, title: "Eega", director: "S. S. Rajamouli", year: 2012 },
  { id: 5, title: "Jersey", director: "Gowtam Tinnanuri", year: 2019 },
];


const getTitlesByDirectorSortedByYear = (movies, director) => {
   const filtered= movies.filter((movie)=> movie.director == director)
  const sorted = filtered.sort((a,b)=> a.year -  b.year );
  return sorted.map((titles) => titles.title)
  
  
};

console.log(JSON.stringify(getTitlesByDirectorSortedByYear(movies, "S. S. Rajamouli")));
console.log(JSON.stringify(getTitlesByDirectorSortedByYear(movies, "Nag Ashwin")));
```
# Expected Output
["Eega","Baahubali"]
["Mahanati"]


# Exercise 30

## Answer
```js
const movies = [
  { id: 1, title: "Baahubali", year: 2015, ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", year: 2017, ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", year: 2018, ratings: [10, 9, 8] },
  { id: 4, title: "Eega", year: 2012, ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", year: 2019, ratings: [9, 9, 8] },
];

const getAverageRatingByYear = (movies, year) => {
const filteredYear = movies.filter((movie)=> movie.year == year)
if(filteredYear.length==0){
    return "no movie"
}
    const redc = filteredYear.map(movie => movie.ratings.reduce((acc,crr
) => acc + crr,0))
const res = redc /  3;
return res.toFixed(2);
};
console.log(getAverageRatingByYear(movies, 2018));
console.log(getAverageRatingByYear(movies, 2020));
```
## Expected Output:
9.00
No movies released in the specified year
# Exercise 31
### Answer
```js
const movies = [
  { id: 1, title: "Baahubali", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", ratings: [10, 9, 8] },
  { id: 4, title: "Eega", ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", ratings: [9, 9, 8] },
];

const getMoviesWithHighestRatings = (movies) => {

const getMoviesWithHighestRatings = (movies) => {
  return movies.map((movie) => ({
    title: movie.title,
    highestRating: Math.max(...movie.ratings)
  }));
};
};

console.log(JSON.stringify(getMoviesWithHighestRatings(movies)));
```
# Expected Output
[{"title":"Baahubali","highestRating":10},{"title":"Arjun Reddy","highestRating":9},{"title":"Mahanati","highestRating":10},{"title":"Eega","highestRating":9},{"title":"Jersey","highestRating":9}]



# -----------------------------------------------------------------------------------------------------

#  Advanced Patterns


# Exercise 33 (1)
Write a function that returns the user's age if available, or a default message if not, using nullish coalescing and optional chaining with complex nested objects.
### Answer
```js
const userWithFullProfile = {
  id: 1,
  name: "Alice",
  profile: {
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const userWithPartialProfile = {
  id: 2,
  name: "Bob",
  profile: {
    age: null,
  },
};
const getUserAge = (user) => user?.profile?.age ?? `Age not provided`;
console.log(getUserAge(userWithFullProfile));
console.log(getUserAge(userWithPartialProfile));
console.log(getUserAge({ id: 3, name: "Charlie" }));
```
# Expected Output
25
Age not provided
Age not provided

# Exercise 34
Write a function that merges two arrays of movies into one using the spread operator and provides a default value for the second array.

### Answer
```js
const movies = [
  { id: 1, title: "Baahubali", genre: "Action" },
  { id: 2, title: "Arjun Reddy", genre: "Drama" },
];

const moreMovies = [
  { id: 3, title: "Jersey", genre: "Sports" },
  { id: 4, title: "Eega", genre: "Fantasy" },
];


const mergeMovies = (movies, moreMovies =[] ) => {
  return [...movies, ...moreMovies];
  
};

console.log(JSON.stringify(mergeMovies(movies, moreMovies)));
console.log(JSON.stringify(mergeMovies(movies)));
```
# Expected Output
[{"id":1,"title":"Baahubali","genre":"Action"},{"id":2,"title":"Arjun Reddy","genre":"Drama"},{"id":3,"title":"Jersey","genre":"Sports"},{"id":4,"title":"Eega","genre":"Fantasy"}]
[{"id":1,"title":"Baahubali","genre":"Action"},{"id":2,"title":"Arjun Reddy","genre":"Drama"}]

# Exercise 35
Write a function that accepts any number of movie objects and returns an array of their titles using the rest operator.
### Answer
```js
const movie1 = { id: 1, title: "Baahubali", genre: "Action" };
const movie2 = { id: 2, title: "Arjun Reddy", genre: "Drama" };
const movie3 = { id: 3, title: "Jersey", genre: "Sports" };

const getTitles = (...movies) => {
  return [...movies.map((movie)=> movie.title)];
  
};

console.log(JSON.stringify(getTitles(movie1, movie2, movie3)));
console.log(JSON.stringify(getTitles(movie1, movie2)));
```
# Expected Output
["Baahubali","Arjun Reddy","Jersey"]
["Baahubali","Arjun Reddy"]


# --------------------------------------------------------------------------------------------------
# String Methods

# Exercise 40 
### Answer
```js
const sample = 'Hello World';

const reverseString = (str) => {
  const str1 = [...str];
  return str1.reverse().join("");
};

console.log(reverseString(sample));
```
# Expected Output
dlroW olleH

# Exercise 41
Convert a sentence into title case using string and array methods.
### Answer
```js
const sentence = "mastering javascript is fun";
      const toTitleCase = (str) => {
        return str
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

      };

      console.log(toTitleCase(sentence));
```
# Expected Output
Mastering Javascript Is Fun

# Exercise 42
Determine if a string is a palindrome ignoring case and non-alphanumerics.

### Answer
```js
const inputs = ['Madam', 'RaceCar!', 'Hello'];
const isPalindrome = (s) => {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === [...clean].reverse().join('');
};

console.log(inputs.map(isPalindrome)); 

```
# Expected Output
[true,true,false]


# Exercise 43
Mask username part of an email, leaving only first & last char.
### Answer
```js
const email1 = 'ragavkumarv@example.com'; const email2 = 'john.doe@gmail.com';


const maskEmail = (email) => {

  const mask = email.split("@");
 var name = mask[0]; 
 var firstLetter = name.charAt(0);
 var lastLetter = name.charAt(name.length-1);
 var star = "*".repeat(name.length-2);
 var result = firstLetter + star  +lastLetter +"@";
  return result + mask[1];
};

console.log(maskEmail(email1));
console.log(maskEmail(email2));
```
# Expected Output
r**********v@example.com
j*****e@gmail.com

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

