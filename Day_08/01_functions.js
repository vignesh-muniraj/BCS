

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
  var a=sayHello();
  a();
  sayHello()();
// console.log(sayHello)
// if function can be treated as a value.
// function -> value.
// function -> first class
// 1.value can be passsed as arg.
// 2.value can be returned.
// 3.value can be assigned.


//Currying (functional programming)
//1.currying
// partial Application
//3.Point-free style

//F#,Haskell,scala,lisp,Small
const sayHello1 = () => () => "Hello3";

const add = (x) => (y) => x + y;
console.log(add(4)(5));





