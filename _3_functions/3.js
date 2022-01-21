/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
const f = (...args) => {
  if (args.every(el => !isNaN(el))) {
    return (args[0] - args[1]) / args[2]
  }
  return 'Error: all parameters type should be a Number'
}
console.log(f(9, 3, 2))
console.log(f('wer', 3, 2))

/* не удалять */
f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number

exports.f = f;
/* не удалять */