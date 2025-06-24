const x = 5;
const y = "5";

console.log(x == y); // true
console.log(x == y); //false

const student = {
  name: "Arjuna",
  age: 20,
  college: "SAC",
  isRich: true,
  "personal hobbies": ["Hockey", "Traveling", "Cricket"],
};

student.name = "Muthu";
student["personal hobbies"].push("VolleyBall");
console.log(student);

// Spread

const r1 = [100, 400];
const r2 = [700, 900];
const r3 = [...r1, ...r2];
console.log(r3);



const name = prompt("Enter a name");
