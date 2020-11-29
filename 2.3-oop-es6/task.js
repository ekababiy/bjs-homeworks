'use strict';
//Задача №1

class PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {
	this.name = name;
	this.releaseDate = releaseDate;
	this.pagesCount = pagesCount;
	this.state = 100;
	this.type = null;
    }
    set state(newstate) {
        if (newstate < 0 ) this._state = 0;
        else if (newstate > 100) this._state = 100;
        else this._state = newstate;
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
	this.type = magazine;
  }
}

class Book extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount);
    this.type = book;
    this.author = author;
   }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = novel;
  }
}


class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = fantastic;
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount,author) {
    super(name, releaseDate, pagesCount, author);
    this.type = detective;
   }
}

//проверка 

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock);



//Задача №2

class Library {
	constructor(name) {
		this.name = "name";
		this.books = [];
	}
};

addBook(book){
	if (book.state > 30) {
    return this.books.push(book);
	} else {
		return console.log("Errore,low state")
	}
};

findBookBy(type, value) {
	for (let i = 0; i < this.books.length; i++) {
      let newValue = this.books[i][type]; 
      if (newValue === value) {
      	return this.books[i];
      };
	};
return null
};


/*giveBookByName(bookName) {
}



Если запрошенная книга найдена,
метод должен удалять книгу из хранилища books, и возвращать её.
Если книга не была найдена, метод должен возвращать null.
}

*/

//проверка 


const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


//Задача №3

class StudentLog {
	constructor () {
        this.name = name;
        this.gradeList = {};
    }

getName () {
    return this.name;
}

addGrade(grade, subject) {
	if (!this.gradeList[subject]) {
		this.gradeList[subject] = [];
	}

	if (grade> 0 && grade< 6) {
		this.gradeList[subject].push(grade)
	} else {
		console.log("Вы пытались поставить оценку ${grade} по предмету ${subject}). Допускаются только числа от 1 до 5")
	}
	  return this.gradeList[subject]
}

getAverageSubject(subject) {
	if (!this.gradeList[subject]) {
		return 0;
	}
	return this.gradeList[subject].reduce((a, b) => a + b) / this.gradeList[subject].length
}

/*
второй способ
getAverageSubject(subject) {
	return this.gradeList[subject] ? this.gradeList[subject].reduce((a, b) => a + b) / this.gradeList[subject].length : 0;
}
a - промежуточный итог, b - текущий элемент.
*/

getTotalAverage () {
	let totalAverage = 0;

	for (let i in this.gradeList){
		totalAverage += this.getAverageSubject(i)
	}
	return totalAverage / Object.keys(this.gradeList).length;
 }
}

//проверка 

const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75