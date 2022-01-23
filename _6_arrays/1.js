/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

// Решение
const forEach = (...args) => {
  if (args.length < 2) {
    throw new Error('Error: there should be two arguments! (array, function)')
  }
  if (!Array.isArray(args[0])) {
    throw new Error('Error: first argument should be an ARRAY (array, function)')
  }
  if (typeof args[1] !== 'function') {
    throw new Error('Error: second argument should be a FUNCTION (array, function)')
  }
  for (let i = 0; i < args[0].length; i++) {
    args[1](args[0][i], i, args[0])
  }
}

const result = forEach(array, function(item, index, arrayRef) {
    console.log(item); // элемент массива
    console.log(index); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

exports.forEach = forEach;
