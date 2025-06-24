// const balance1 = prompt("Enter a  no:");
// const balance2 = prompt("Enter a no;")
// const total = parseInt(balance1) + parseInt(balance2) ;
// console.log(`Your total balance is ${total} credits.`)

// const celsius = +prompt("Enter a celsius");
// var ans;
// if(celsius >= 120){
//    ans = "🔥 Overheated!";
// }else if(celsius <= 10){
//     ans = "❄️ Frozen!";
// }else{
//     ans =  "🛡️ Stable.";
// }
// console.log(ans);

// var ans;
// var pow = +prompt("Power level");
// if (pow >= 90) {
//   ans = "Legendary 💎";
// } else if (pow >= 60) {
//   ans = "Potent ⚡";
// } else {
//   ans = "Weak 🪨";
// }
// console.log(ans);


// var name = prompt("Enter Name: ").trim().toLowerCase();
// var format = name +"@starkindustries.com";
// console.log(format);


// const code = +prompt("Enter a Code");
// var ans;
// if(code == 1700){
//     ans = "⚠️ Override mode activated";
// } else if(code >= 1000 && code <= 1999){
//     ans = "Access granted";
// }else{
//     ans = "Access denied";
// }
// console.log(ans);


// const person1 = prompt("Enter a first name:");
// const person1Speed = +prompt("Enter speed");
// const person2 = prompt("Enter a second name:");
// const person2Speed = +prompt("Enter speed");
// var ans;
// var diff = Math.abs(person1Speed - person2Speed);
// if(person1Speed > person2Speed){
//    ans = `${person1} is faster than ${person2} by ${diff} km/h.`;
// }else if(person2Speed > person1Speed){
//     ans = `${person2} is faster than ${person1} by ${diff} km/h.`;
// }else{
//     ans = `${person1} and ${person2} are same speed.`;
// }
// console.log(ans);




// const agents = prompt("Enter a name").trim().toLowerCase();
// if(agents == "natasha" || agents == "clint" || agents == "nick"){
//   console.log("🛡️ Access granted");
// }else{
//     console.log("⛔ Unauthorized");

// }

const name = prompt("Enter a name");
var lowerCase = name.toLowerCase();
var uppperCase = name.toUpperCase();
console.log(lowerCase);
console.log(uppperCase);