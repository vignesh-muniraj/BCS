const marks = [90,84,82,95,30];

var result = marks.reduce((acc,cur) => acc < cur ? cur : acc);
console.log(result);

const scores = [
  {
    marks: 32,
    name: "Yvette Merritt",
  },
  {
    marks: 57,
    name: "Lillian Ellis",
  },
  {
    marks: 22,
    name: "Mccall Carter",
  },
  {
    marks: 21,
    name: "Pate Collier",
  },
  {
    marks: 91,
    name: "Debra Beard",
  },
  {
    marks: 75,
    name: "Nettie Hancock",
  },
  {
    marks: 20,
    name: "Hatfield Hodge",
  },
];

// Task 1.2
// Use Reduce
// Find the top scorer name
// Output
// Debra Beard


var topperName = scores.reduce((max,student) => max.marks > student.marks ? max : student);
console.log(topperName.name);

// var topperName = scores.reduce((max,student) =>{ if(max.marks > student.marks){
//     return max;
// }else{ 
//     return student;
// } });
// console.log(topperName.name);

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


const getAllRatings = (movies) => {
  return movies 
  .reduce((acc,cur) => [...acc,...cur.ratings],[]);
  
};

console.log(JSON.stringify(getAllRatings(movies)));