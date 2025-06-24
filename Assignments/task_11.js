 var modelName = prompt("Model Name");
 var price = +prompt("Price");

 var tax = (price / 100) * 10;
 console.log(`${modelName} ${price}  will cost you ${tax} Galleons (after tax).`);