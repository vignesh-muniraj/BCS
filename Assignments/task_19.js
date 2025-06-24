var name = prompt("Enter name:");
var pow = +prompt("Tell me the power of spell?");
if (pow >= 90) {
  console.log(`${name} is an Legendary spell.`);
} else if (pow >= 60) {
  console.log(`${name} is an Advanced spell.`);
} else {
  console.log(`${name} is an Basic spell.`);
}
