/**
 * Задача 3.
 *
 * Улучшите имплементацию функции calculate() и назовите её calculateAdvanced().
 * Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её.
 *
 * После отлова ошибки перейдите к выполнению следующего коллбека.
 *
 * Улучшенная функция calculateAdvanced() должна возвращать объект с двумя свойствами: `value` и `errors`:
 * - свойство `value` содержит результат вычисления всех функций из цепочки;
 * - свойство `errors` содержит массив с объектами, где каждый объект должен обладать следующими свойствами:
 *     - index — индекс коллбека, на котором ошибка была возбуждена;
 *     - name — имя ошибки;
 *     - message — сообщение ошибки.
 *
 * Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт.
 *
 * Поэтому, для продолжения цепочки выполнения
 * необходимо брать результат последней успешно выполненной функции-коллбека.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией.
 */

// Решение
const calculateAdvanced = (...functions) => {
  const results = [];
  const errors = [];

  const init = (index, func, argument) => {
    try {
      const result = index === 0 ? func() : func(argument);

      if (typeof result === 'undefined') {
        throw new Error(
          `callback at index ${index} did not return any value.`,
        );
      }
      results.push(result);
    } catch (error) {
      const { name, message } = error;

      errors.push({ index, name, message });
    }
  };

  functions.forEach((func, index) => {
    if (!(typeof func === 'function')) {
      throw new Error('callback is not a function type.');
    }

    const argument = results[results.length - 1];

    if (index === 0) {
      init(index, func);
    } else {
      init(index, func, argument);
    }
  });

  return {
    value: results[results.length - 1],
    errors,
  };
};

// const calculateAdvanced = (...args) => {
//   if (!args.every(el => typeof el === 'function')) {
//     throw new Error('Some of arguments are not functions')
//   }
//   let res = null
//   for (let func of args) {
//     res = func(res)
//     if (!res) {
//       throw new Error(`Function returned bad value: ${res}`)
//     }
//   }
//   return res
// }

const result = calculateAdvanced(
  () => { },
  () => {
    return 7;
  },
  () => { },
  prevResult => {
    return prevResult + 4;
  },
  () => {
    throw new RangeError('Range is too big.');
  },
  prevResult => {
    return prevResult + 1;
  },
  () => {
    throw new ReferenceError('ID is not defined.');
  },
  prevResult => {
    return prevResult * 5;
  },
);

console.log(result);

// Функция вернёт:
// { value: 60,
//     errors:
//      [ { index: 0,
//          name: 'Error',
//          message: 'callback at index 0 did not return any value.' },
//        { index: 2,
//          name: 'Error',
//          message: 'callback at index 2 did not return any value.' },
//        { index: 4, name: 'RangeError', message: 'Range is too big.' },
//        { index: 6,
//          name: 'ReferenceError',
//          message: 'ID is not defined.' } ] }

exports.calculateAdvanced = calculateAdvanced;
