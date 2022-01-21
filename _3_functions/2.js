/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
const f = (...args) => {
  let theSum = 0
  for (el of args) {
    if (!isNaN(el)) {
      theSum += el
    } else {
      return 'Error: all parameters should be a Number types'
    }
  }
  return theSum
}

console.log(f(1, 'sdfsdf', 2, 3, 4))

/* не удалять */
f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

exports.f = f;
/* не удалять */