console.clear()



//Задача №1

const weapons = [
new Knife(), 
new Staff(), 
new Axe(), 
new StormStaff(), 
new LongBow(), 
new Bow()
];
 
function getNames() {
	return weapons.map(weapon => weapon.name);
}
//console.log(getNames());


function getCountReliableWeapons(durability) {
	return weapons.filter(weapon => weapon.durability > durability).length;
}
//console.log(getCountReliableWeapons(250));

function hasReliableWeapons(durability) {
	return weapons.some(weapon => weapon.durability > durability);
}
//console.log(hasReliableWeapons(800));

function getReliableWeaponsNames(durability) {
	return weapons.filter(weapon => weapon.durability > durability).map((weapon) => weapon.name);
}
//console.log(getReliableWeaponsNames(300));

function getTotalDamage() {
 return weapons.reduce((totalDamage, weapon) => totalDamage += weapon.attack, 0)
}
//console.log(getTotalDamage());


function getValuestCountToSumValues (arr, neededSum) {
 	const values = [];

 	function getReduseArr(array) {
 	const reducer = (acc, curr) => acc + curr;
 	return array.reduce(reducer);
 	}

 	if (getReduseArr(arr) > neededSum) {
	do {
	values.push(arr.shift());
	}  while (getReduseArr(values) < neededSum);
    return values.length;
    } else {
    return arr.length;	 	  	
    }
}

//возвращает 4, т.к. 1+2+3=6 (3 числа), а 1+2+3+5=11 (4 числа)
getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 10);
//возвращает 6, т.к. 1+2+3+5+2=13 (5 чисел), а 1+2+3+5+2+7=20 (6 чисел)
getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 20);


//Задача №2
//2.1.1
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}
//2.1.2
function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}
//2.1.3
 function compareArrays( arr1, arr2 ) {
 	return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
 }
 
 //проверка
compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true



//2.2 и 2.2,2
function memorize(fn, limit) {
const memory = [];
return function (...args) {	
let arr = args;
let prop = memory.find(obj => compareArrays(obj.args, arr));
if (prop) {
return prop.result;	
}
let result = fn(...args);
memory.push({ args, result })
if (memory.length > limit) {
memory.shift();
}
return result;
}


//проверка
const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти

// Вызов этих функций даёт один и тот же результат
sum(3, 4); // 7
/* 
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
//mSum(3, 4); // 7
