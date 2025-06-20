//  var quote = ("  Do Good, Be Good ");
//  var quote = ("12345678890");
//  console.log(quote.trim().toLowerCase());

// var stock1 = "vanilla";
// var stock2 = "chocolate";
// var stock3 = "butterscotch";
// var stock4 = "cotton candy";

// var balance= "30000";
// console.log(balance.padStart(2))

///-----------------------------------------------------------------------------------------------------
var stock1 = "vanilla";
var stock2 = "chocolate";
var stock3 = "butterscotch";
var stock4 = "cotton candy";

var stockname = prompt("Enter your fav icecream? ").trim();
//stockname.trim();
if (
  stockname == stock1 ||
  stockname == stock2 ||
  stockname == stock3 ||
  stockname == stock4
) {
  console.log(`Yes, we have ${stockname} 🍦in stock`);
} else {
  console.log(`We ran out of ${stockname}`);
}

//-----------------------------------------------------------------------------------------------------

var stockname = prompt("Enter your fav icecream? ").trim().toLowerCase();
//stockname.trim().toLowerCase();
if (
  stockname == stock1 ||
  stockname == stock2 ||
  stockname == stock3 ||
  stockname == stock4
) {
  console.log(`Yes, we have ${stockname}🍦 in stock in stores`);
} else {
  console.log(`We ran out of ${stockname}`);
}
 console.log()