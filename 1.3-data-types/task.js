"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

if (isNaN(Number(percent))) {
        return 'Ошибка. Укаите "Процентную ставку" по ипотеке.';
    }
    if (isNaN(Number(contribution))) {
        return 'Ошибка. Укажите "Начальный взнос".';
    }
    if (isNaN(Number(amount))) {
        return 'Ошибка. Не указана "Общая стоимость" желаемого кредита.';
    }
    if (isNaN(date)) {
        return 'Пожалуйста, укажите "Срок дейтсвия ипотеки"';
    }
    if (new Date(date).getFullYear() < new Date().getFullYear() ) {
        return 'Ошибка. Выбрана не верная дата ипотеки.';
    }
    
    date = {
        'month' : new Date(date).getMonth() + 1,
        'year' : new Date(date).getFullYear(),
    }

    let currentDate = {
        'month' : new Date().getMonth() + 1,
        'year' : new Date().getFullYear(),
    };
    let dateEnd = (12 * (date.year - currentDate.year)) - (currentDate.month - date.month);
    let creditBody = amount - contribution;
    let moneyInMounth = creditBody * (((1 / 12) * (percent / 100)) + ((1 / 12) * (percent / 100)) / ((( 1 + (( 1 /12) * (percent/100)) )**(dateEnd) ) - 1 ));
    let totalAmount = (moneyInMounth * dateEnd).toFixed(2);
        totalAmount = Number(totalAmount);
    
    if (isNaN(totalAmount)) {
        console.log((date.getFullYear() - new Date().getFullYear()) * 12);
        return 'Ошибка. Выбрана не верная дата ипотеки.';
    }
    return totalAmount;
}

function getGreeting(name) {
  
   if (!name || name == "null" || name == "undefined") {
    name = "Аноним";
   }
  let greeting = `Привет, мир! Меня зовут ${name}`;
  return greeting; 
}
//console.log(getGreeting());