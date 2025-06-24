

// var output ;
// if(person1Height == person2Height){
//     output = `${person2} and  ${person1} are same height `;
// }else if(person1Height > person2Height){
//     output =`${person1} is taller than ${person2} by ${difference}cm`;
// }else if(person1Height < person2Height){
//     output =`${person2} is taller than ${person1} by ${difference}cm`;
// }
//  document.getElementById("result").innerHTML = output;
//  console.log(output);

if(person1Height == person2Height){
    console.log(`${person2} and  ${person1} are same height `);
    document.getElementById("result").innerHTML=`${person2} and  ${person1} are same height `;
}else if(person1Height > person2Height){
    console.log(`${person1} is taller than ${person2} by ${difference}cm`);
    document.getElementById("result").innerHTML=`${person1} is taller than ${person2} by ${difference}cm`;
}else if(person1Height < person2Height){
    console.log(`${person2} is taller than ${person1} by ${difference}cm`);
    document.getElementById("result").innerHTML=`${person2} is taller than ${person1} by ${difference}cm`;
}