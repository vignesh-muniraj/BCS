


var houses = {
 bravery : "Gryffindor",
 wisdom : "Ravenclaw",
 loyalty : "Hufflepuff",
 ambition : "Slytherin"

}
var trait = prompt("What quality do you value most?");

if(houses[trait]){
    console.log(`You belong to ${houses[trait]}!`);
}else{
    console.log(`Squib`);

}
 

