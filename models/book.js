/**
 * @module Book
 * @description Класс книги.</br>
 * модуль включает методы управления книгами. </br>
 */

const MongoClient = require("mongoDB").MongoClient;

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/library");
/**
 * @class Book
 * @description Класс Book - книги
 */

class Book {

  constructor(nameBook) {
    this.nameBook = nameBook;
  }

  /**
   * @function
   * @name mongoDB_Client
   * @returns 1
   * Тестирует подключение к базе данных.</br>
   */
  mongoDB_Client() { mongoClient.connect(function(err, client) {
          // создание - подключение (обращение) к базе данных libraryDB
          const db = client.db("libraryDB");
      
          // метод command, проверяет подключение к базе данных (наприер: объектом ping);
          db.command({ping: 1}, function(err, result){
          
              if (!err) {
                console.log("Подключение с сервером успешно установлено");
                console.log(result);
                client.close();
                                  
              }
              else {
                  return console.log('Ошибка подключения к базе данных' + err);
              }
              //return result;
          });
      });
      return 1;
  }

  // метод поиск книги
  /**
   * @function
   * @name findBooks
   * @description метод выполняет поиск книги в библиотеке по названию </br>
   */
  findBooks () {mongoClient.connect(function(err, client) {

      // создание - подключение (обращение) к базе данных libraryDB
      const db = client.db("libraryDB");
  
      // создание - подключение к коллеции books
      const books = db.collection("books");
  
      // получение книг
      books.find().toArray(function (err, results) {
        console.log(results)
        client.close();
        console.log('Подклчючение закрыто!');
      });
    });
  }

  // добавление книги
  /**
   * @function
   * @name addBook
   * @param {string} answer 
   * @description Метод осуществляет добавление книги. </br>
   * Вызывается ряд вопросов, в которые передаются параметры книги.</br>
   * Параметры передается в метод, который формирует запрос в базу данных. </br>
   */
  addBook (answer) { mongoClient.connect((err, client) => {

          // создание - подключение (обращение) к базе данных libraryDB
          const db = client.db("libraryDB");
      
          // создание - подключение к коллеции books
          const books = db.collection("books");
      
          books.insertOne(answer, (err, results) => {
            if (err) {
              console.log('Произошла ошибка при добавлении: ' + err);
            }
            console.log('Книга добавлена в library' + results);
            console.log(answer);
            client.close();
            console.log('Подклчючение закрыто!');
          });
      });
  }

  // удаление книги
  /**
   * @function
   * @name deleteBook
   * @param {string} name 
   * @description Метод осуществляет удаление книги </br>
   */
  deleteBook (name) {mongoClient.connect((err, client) => {
      
      // создание - подключение (обращение) к базе данных libraryDB
      const db = client.db("libraryDB");
  
      // создание - подключение к коллеции books
      const books = db.collection("books");
      
      books.deleteOne(name, (err, results) => {
        
        if (err) return console.log(err);
        
        console.log('Книга ' + name.nameBook + ' удалена');
        console.log(results);
        client.close();
        console.log('Подклчючение закрыто!');

      });
    });
  }
}

module.exports = {
    Book,
}