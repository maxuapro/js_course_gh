/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
const reduce = (...args) => {
  if (args.length < 3) {
    throw new Error('Error: there should be three arguments! (array, function, number)')
  }
  if (!Array.isArray(args[0])) {
    throw new Error('Error: first argument should be an ARRAY (array, function, number)')
  }
  if (typeof args[1] !== 'function') {
    throw new Error('Error: second argument should be a FUNCTION (array, function, number)')
  }
  if (isNaN(args[2])) {
    throw new Error('Error: third argument should be a NUMBER (array, function, number)')
  }
  let res = args[2]
  for (let i = 0; i < args[0].length; i++){
    res = args[1](res, args[0][i], i, args[0])
  }
  return res
}

const result = reduce(
    array,
    function(accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
