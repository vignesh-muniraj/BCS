
const student = {
  name: "Abishek",
  age: 20,
  address: {
    city: "Trichy",
    state: "TN",
  },
  hobbies: ["cricket", "football", "carrom"],
};

const {
    address:{city},
    // hobbies:[h1,h2,h3],
    hobbies:[,h2],
}= student;

// console.log(city);
// console.log(h2);
// console.log(student.age);

//Spread (used to merge 2 array)
const z1 = [100,200];
const z2 = [...z1,500];
const z3 = [...z1,z2];

/// ...Rest
// Rest = spread
const [t1 , t2, ...t3]=[100,200,300,400,500,600];// 100,200,300,400,500,600

//const [t1 , ...t2, t3]=[100,200,300,400,500,600]; (error)

//0-----------------------------------------------------------------------


const book = {
  name: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
  age :45
};

const details = {
  year: 2002,
  price: 1200,
  age:55
};

// console.log(book.author);

const fullDetails = {...book,...details};
console.log(fullDetails);
