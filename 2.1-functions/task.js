
"use strict";

//Задача №1 

function getSolutions( a, b, c ) {
 let discriminant = b ** 2 - 4 * a * c;

   if (discriminant < 0) {
	return { D: discriminant, roots: [] };
   } else if (discriminant === 0) { 
  	let x1 = -b / (2 * a);
  	return { D: discriminant, roots: [ x1 ] };
   } else if (discriminant > 0) {
    let x1 = ((-b + Math.sqrt(discriminant)) / 2 * a);
    let x2 = ((-b - Math.sqrt(discriminant)) / 2 * a); 
    return { D: discriminant, roots: [ x1, x2 ] };
   }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);

  if (result.roots.length === 0) {
    showRoots = `Уравнение не имеет вещественных корней`;
  }
  if (result.roots.length === 1) {
    showRoots = `Уравнение имеет один корень X₁ = ${result.roots}`;
  }
  if (result.roots.length === 2) {
    showRoots = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
  }
  message = `Значение дискриминанта: ${result.D} \nУравнение ${showRoots}`;
  console.log(
    `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c} \n${message}`
  );
}


console.log("Проверка первого задания");
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);


//Задача №2


function getAverageScore(data) {

let averageScore = {},
    allAverageMarks = [];

  for (let prop in data) {
    let marks = data[prop];
    averageScore[prop] = getAverageMark(marks);
  }
  for (let prop in averageScore) {
    let everageMark = averageScore[prop];
    allAverageMarks.push(everageMark);
  }
  averageScore.average = getAverageMark(allAverageMarks);
  return averageScore;
}

function getAverageMark(marks) {
let everageMark = 0,
    sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    everageMark = sum / marks.length;

return everageMark;
}

let data = {
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4],
};
console.log("Проверка второго задания.");
console.log(getAverageScore(data));


// Задача №3

function getPersonData(secretData) {
  let decipher = {};
  for (let prop in secretData) {
    let secret = secretData[prop];
    if (prop === "aaa") {
      decipher.firstName = getDecodedValue(secret);
    }
    if (prop === "bbb") {
      decipher.lastName = getDecodedValue(secret);
    }
  }
  return decipher;
}

function getDecodedValue(secret) {
  if (secret === 0) {
    return "Родриго";
  }
  if (secret === 1) {
    return "Эмильо";
  }
}

let secretData = {
  aaa: 0,
  bbb: 0,
};
let secretData2 = {
  aaa: 1,
  bbb: 1,
};
let secretData3 = {
  aaa: 1,
  bbb: 0,
};
let secretData4 = {
  aaa: 0,
  bbb: 1,
};

console.log("Проверка третьего задания");
console.log(getPersonData(secretData));
console.log(getPersonData(secretData2));
console.log(getPersonData(secretData3));
console.log(getPersonData(secretData4));