// # Задача 1

// Создать класс `DB` который будет имплементировать `CRUD` модель.

// В качестве структуры данных использовать`Map`.
// Метод`create`:
// принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
// возвращает`id`
// при создании пользователя генерирует уникальный`id`, который является ключом для объекта пользователя в структуре`Map`
// Метод`read`:
// принимает идентификатор пользователь
// если такого пользователя нет возвращать`null`
// если есть — возвращать объект пользователя с полем `id` внутри объекта.
// если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
// Метод`readAll`:
// возвращает массив пользователей
// генерировать ошибку если в метод `readAll` передан параметр
// Метод`update`:
// обновляет пользователя
// принимает 2 обязательных параметра
// генерирует ошибку если передан несуществующий`id`
// генерирует ошибку если передан `id` с типом не строка
// генерирует ошибку если второй параметр не валидный
// Метод`delete`:
// удаляет пользователя
// Генерировать ошибку если передан в метод `delete` несуществующий или невалидный`id`

// const isValidObject = (obj) => {
//   if (
//     (obj.hasOwnProperty('name') && typeof obj.name === 'string') ||
//     (obj.hasOwnProperty('age') && typeof obj.age === 'number') ||
//     (obj.hasOwnProperty('country') && typeof obj.country === 'string') ||
//     (obj.hasOwnProperty('salary') && typeof obj.salary === 'number')
//   ) {
//     return true
//   }
//   return false
// }

const isValidObject = (obj) => {
  const [STRING, NUMBER] = ['string', 'number']
  const types = {
    'name': STRING,
    'age': NUMBER,
    'country': STRING,
    'salary': NUMBER,
  }
  for (key in obj) {
    if (!(obj.hasOwnProperty(key) && typeof obj[key] === types[key])) {
      console.log('false')
      return false
    }
  }
  return true
}

class DB {
  constructor() {
    this.counter = 0
    this.data = new Map()
  }

  create(val) {
    if (!isValidObject(val)) {
      throw new Error('create: Object is not valid')
    }
    this.counter++
    const id = this.counter.toString()
    this.data.set(id, val)
    return id
  }
  read(id) {
    if (arguments.length < 0){
      throw new Error('There should be 1 argument (id)')
    }
    if (typeof id !== 'string'){
      throw new Error('The argument (id) should be of type String')
    }
    return this.data.has(id) ? { id: id, ...this.data.get(id) } : null
  }
  readAll() {
    if (arguments.length > 0) {
      throw new Error('There should be no arguments')
    }
    return this.data
  }
  update(id, val) {
    if (!isValidObject(val)) {
      throw new Error('update: Object is not valid')
    }
    if (this.data.has(id)) {
      this.data.set(id, { ...this.data.get(id), ...val })
      return id
    }
    throw new Error(`ID ${id} does not exist!`)
  }
  delete(id) {
    if (this.data.has(id)) {
      this.data.delete(id)
      return true
    }
    return false
  }
}

const db = new DB();

const person = {
  name: 'Pitter', // обязательное поле с типом string
  age: 21, // обязательное поле с типом number
  country: 'ua', // обязательное поле с типом string
  salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
db.update(id, { age: 99 }); // id
// db.delete(id); // true

console.log(customers, id)