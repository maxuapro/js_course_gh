// # Задача 2

// Улучшить класс `DB` из предыдущей задачи.

// Добавить метод`find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
// Генерировать ошибку, если query не валидный
// Поля`name` и `country` ищут 100 % совпадение
// Поля`age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя - бы один из них
// Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса

const [STRING, NUMBER] = ['string', 'number']
const types = {
  'name': STRING,
  'age': NUMBER,
  'country': STRING,
  'salary': NUMBER,
}

const isValidValue = (key, value) => {
  return typeof value === types[key]
}

const isValidObject = (obj) => {
  for (key in obj) {
    if (!(obj.hasOwnProperty(key) && isValidValue(key, obj[key]))) {
      return false
    }
  }
  return true
}

const isValidQuery = (query) => {
  for (key in query) {
    if (typeof query[key] !== 'object') {
      if (!isValidValue(key, query[key])) {
        return false
      }
    } else {
      if (query[key].min) {
        if (typeof query[key].min !== 'number') {
          return false
        }
      }
      if (query[key].max) {
        if (typeof query[key].max !== 'number') {
          return false
        }
      }
    }
  }
  return true
}

const checkQueryString = (queryValue, dataValue) => {
  return queryValue === dataValue
}
const checkQueryRange = (queryValue, dataValue) => {
  const min = queryValue.min ? queryValue.min : 0
  const max = queryValue.max ? queryValue.max : Number.MAX_VALUE
  return (dataValue >= min && dataValue <= max)
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
    if (arguments.length < 0) {
      throw new Error('There should be 1 argument (id)')
    }
    if (typeof id !== 'string') {
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
  find(query) {
    if (!isValidQuery(query)) {
      throw new Error('Query is not valid: { name | country : String, age | salary: { min?: Number, max?: Number }')
    }
    const arr = []
    for (let item of this.data.values()) {
      let isGood = []
      for (key in query) {
        if (typeof query[key] === 'string') {
          isGood.push(checkQueryString(query[key], item[key]))
        }
        if (typeof query[key] === 'object') {
          isGood.push(checkQueryRange(query[key], item[key]))
        }
      }
      if (isGood.every(val => val === true)) {
        arr.push(item)
      }
    }
    return arr
  }
}

const db = new DB();

const query = {
  country: 'ua',
  age: {
    min: 22
  },
  salary: {
    min: 300,
    max: 600
  }
};

const person0 = { name: 'Pitter', age: 22, country: 'ua', salary: 500 }
const person1 = { name: 'Max', age: 12, country: 'ua', salary: 500 }
const person2 = { name: 'Fax', age: 30, country: 'uk', salary: 500 }
const person3 = { name: 'Tax', age: 40, country: 'us', salary: 1000 }

db.create(person0)
db.create(person1)
db.create(person2)
db.create(person3)
console.log(db.readAll())

const customers = db.find(query); // массив пользователей
console.log(customers)