
"use strict";

function getResult(a,b,c){

let discriminant = b ** 2 - 4 * a * c;
   
if (discriminant < 0) {
	return [];
  } else if (discriminant === 0) { 
  	let x1 = -b / (2 * a);
  	return [x1];
  } else if (discriminant > 0) {
    let x2 = ((-b + Math.sqrt(discriminant)) / 2 * a);
    let x3 = ((-b - Math.sqrt(discriminant)) / 2 * a); 
    return [x2,x3];
  }
}
//console.log (getResult(2,4,(-3)));

function getAverageMark(marks){

marks = marks.split(" ");
let averageMark = 0;

 if (marks.length === 0) {
   return averageMark;
    } 

 if (marks.length > 5) {
  marks = marks.slice(0, 5);
  }
 for (let i = 0; i < marks.length; i++) {
  averageMark += +marks[i];
  } 
  return averageMark / marks.length;
}
//console.log(getAverageMark("2 5 3 5"));



function askDrink(name,dateOfBirthDay){
   
 let now = new Date();
  let result;

  if (now.getFullYear() - dateOfBirthDay >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  return result;
} 
//console.log(askDrink("Kate",1997));










