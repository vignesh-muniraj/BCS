


var goal = +prompt("How many Goals:");
var Snitch = parseInt(prompt("How many Snitch:"));
var score = (goal * 10) + (Snitch * 150);
if(score >= 200){
    console.log(`You scored ${score} points and won the match! 🧹🏆`);
}else{
    console.log(`You scored ${score}. Better luck next time!`);

}