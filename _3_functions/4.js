/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение
const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
const f = (num) => {
  if (isNaN(num)) {
    return 'Error: parameter type is not a Number'
  }
  if (![1, 2, 3, 4, 5, 6, 7].includes(num)) {
    return 'Error: parameter should be in the range of 1 to 7'
  }
  return days[num - 1]
}

console.log(f(8))

/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

exports.f = f;
/* не удалять */