/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
const upperCaseFirst = (string) => {
  if (typeof string !== 'string') {
    return 'Not a string'
  }
  return string.slice(0, 1).toUpperCase() + string.slice(1)
}

console.log(upperCaseFirst('havanaUnaNa'))
console.log(upperCaseFirst('asdasd', 876))
console.log(upperCaseFirst(''))

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
