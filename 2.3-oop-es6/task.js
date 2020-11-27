'use strict';
//Задача №1

class PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {
    //свойства
	this.name = name;
	this.releaseDate = releaseDate;
	this.pagesCount = pagesCount;
	//состояние
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
/* проверка
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock);
*/


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


/*
giveBookByName(bookName) {
}
Если запрошенная книга найдена,
метод должен удалять книгу из хранилища books, и возвращать её.
Если книга не была найдена, метод должен возвращать null.
}

/*Создайте библиотеку;
Добавьте в библиотеку несколько печатных изданий различных типов;
Найдите книгу, изданную в 1919 году (создайте такую книгу при необходимости);
Выдайте любую книгу;
Испортите выданную книгу;
Почините выданную книгу;
Попытайтесь добавить починенную книгу обратно в библиотеку.*/



//Задача №3

/*class StudentLog {
	constructor (name) {
        this.name = name;
        this.journaleClass = {};
    }
}
getName () {
        return this.name;
    }

addGrade(grade, subject)*/
