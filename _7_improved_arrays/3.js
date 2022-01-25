/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

const createArray = (value, numberOfCopies) => {

  if (!value || !numberOfCopies){
    throw new Error('there should be two args (number | string | object, number)')
  }
  const t = typeof value
  if (!(t === 'number' || t === 'object' || t === 'string')){
    throw new Error('First arg should be either: (number | string | object, number)')
  }
  if (isNaN(numberOfCopies)){
    throw new Error('Second arg should be a number (number | string | object, number)')
  }

  return new Array(numberOfCopies).fill(value)

}

const result = createArray('x', 6);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
