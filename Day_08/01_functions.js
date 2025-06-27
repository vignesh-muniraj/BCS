

const csk1 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    win: 5,
    loss: 11,
  },
};

const csk2 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    loss: 11,
    win :0
  },
};

// console.log(csk2.stats.win);

const csk3 = {
  captain: "MSD",
  color: "yellow",
};
 const csk = null;

const getWinStat = (team) =>
     team?.stats?.win ?? "Data not found" ;

console.log(getWinStat(csk1));
console.log(getWinStat(csk2));
console.log(getWinStat(csk3));
console.log(getWinStat(csk));


function sayHello(){
    return function(){
        console.log("Hello!");
    }
}
  console.log() ;
    
