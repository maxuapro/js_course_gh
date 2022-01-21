/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
const f = (number) => {
  if (!isNaN(number)){
    return number ** 3
  }
  return 'Error: parameter is not a number type'
}
console.log(f(2))

/* не удалять */
f(2); // 8
f('Content'); // Error: parameter is not a number type

exports.f = f;
/* не удалять */

