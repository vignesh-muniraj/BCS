// var days =  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
// var number = prompt("Enter a day number: ")
// if(number <= 7){
//     var day = days[number-1];
// }else{
// for(var i=0;i< number;i++){
//        var day =  days[(number % 7)-1];
//   }
// }
// if(number == 7){
//   console.log("sunday closed!");
// }else{
//   console.log(`It's ${day}. Store is open!`);
// }

var days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var number = prompt("Enter a day number: ");

var day = days[(number % 7) - 1];

if (day == "Sunday") {
  console.log("Sunday closed!");
} else {
  console.log(`It's ${day}. Store is open!`);
}
