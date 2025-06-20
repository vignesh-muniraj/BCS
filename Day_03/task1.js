console.log("task")

      //prompt        
// var input1=prompt("enter celsis")
// var res= (input1* (9/5)+ 32);
// console.log(`the degree celsis is` +  ` `+ res);

// console.log(`${input1}°C is ${res}°F`);


// var radius = prompt("Enter the radius in cm")
// var area = Math.PI * radius * radius;
// console.log(`The Area for given ${radius}cm radius is ${area}cm²`)

// $ interpoliasan


// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)
    // console.log(true || true)
    // console.log(true || false)
    // console.log(false || true)
    // console.log(false || false)

//----------------------------------------------------------------------------------------------------------
            //confirm
//----------------------------------------------------------------------------------------------------------


    // Decision
    //if...else

    
var person1 = prompt("Enter person1 name: ");
var person2 = prompt("Enter person2 name: ");

var person1Height = +prompt(`${person1} tell me your height in cm: `);
var person2Height = +prompt(`${person2} tell me your height in cm: `);


var difference = Math.abs(person1Height - person2Height);

// if(person1Height == person2Height){
//     console.log(`${person2} and  ${person1} are same height `);
//     document.getElementById("result").innerHTML=`${person2} and  ${person1} are same height `;
// }else if(person1Height > person2Height){
//     console.log(`${person1} is taller than ${person2} by ${difference}cm`);
//     document.getElementById("result").innerHTML=`${person1} is taller than ${person2} by ${difference}cm`;
// }else if(person1Height < person2Height){
//     console.log(`${person2} is taller than ${person1} by ${difference}cm`);
//     document.getElementById("result").innerHTML=`${person2} is taller than ${person1} by ${difference}cm`;
// }
// console.log(!!true)

//Every line is a statement and its terminated by ;
// If a statement returns a value then a expression;
var output ;
if(person1Height == person2Height){
    output = `${person2} and  ${person1} are same height `;
}else if(person1Height > person2Height){
    output =`${person1} is taller than ${person2} by ${difference}cm`;
}else if(person1Height < person2Height){
    output =`${person2} is taller than ${person1} by ${difference}cm`;
}
 document.getElementById("result").innerHTML = output;
 console.log(output);
console.log(!!true)

//--------------------------------------------------------------------------------------------------------------




