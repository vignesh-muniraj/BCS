# Destructuring

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

 ```js
 const numbers = [1, 2, 3, 4, 5];


const doubleNumbers = numbers => numbers.map((n) => n * 2);


console.log(JSON.stringify(doubleNumbers(numbers)));
```
### Expected Output
[2,4,6,8,10]

# Excersice 16

Filter an array to keep only even numbers using the filter method.
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const getEvenNumbers = numbers => numbers.filter((num) => num %2 ==0 );
  


console.log(JSON.stringify(getEvenNumbers(numbers)));
```
# Excepted output
[2,4,6,8,10]

# Excersice 3.1
```js
Please provide the list of book titles

books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]
```
# Expected Output
["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]

 # # Excersice 3.2