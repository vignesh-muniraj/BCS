
//function - Declare once and reuse many times.
// sum- function name
// function declaration
// {} - function body
// return ans.tofixed(2);12.00 (2 decimal point).
// a ,b - parameter.
// 12,13 - arguments





// n1, n2 -> parameter
// n1 = 0 -> Default value
// 1. Terms
// 2. Working
// 3. Default value
// 4. Rest
function sum(n1 = 0, n2 = 0, ...arr) {
 // console.log(arr);
  const ans = n1 + n2;
  return ans.toFixed(2);
}

// 60, 80 -> Arguments
var result1 = sum(60, 80); // function call // Reuse
var result2 = sum(70, 100); // Reuse
var result3 = sum(70.7867, 100.1111);

var result4 = sum(100);
var result5 = sum();

// arguments  > parameter
var result6 = sum(50, 60, 80, 90, 100);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);


var ans= 0;
function sum(a,b){
 ans =  a+b;
    return ans;
}

sum(12,13);
console.log(ans);


