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
