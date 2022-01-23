/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение
const filter = (...args) => {
  if (args.length < 2) {
    throw new Error('Error: there should be two arguments! (array, function)')
  }
  if (!Array.isArray(args[0])) {
    throw new Error('Error: first argument should be an ARRAY (array, function)')
  }
  if (typeof args[1] !== 'function') {
    throw new Error('Error: second argument should be a FUNCTION (array, function)')
  }
  const newArr = []
  for (let i = 0; i < args[0].length; i++) {
    if (args[1](args[0][i], i, args[0])) {
      newArr.push(args[0][i])
    }
  }
  return newArr
}

const filteredArray = filter(array, function (item, i, arrayRef) {
  console.log(item); // элемент массива
  console.log(i); // индекс элемента
  console.log(arrayRef); // ссылка на обрабатываемый массив

  return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
