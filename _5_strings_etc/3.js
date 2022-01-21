/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение

const truncate = (string, maxLength) => {
  if (!string || !maxLength) {
    return 'There should be 2 params (string, number)'
  }
  if (typeof string !== 'string') {
    return 'first param should be of type "string"'
  }
  if (typeof maxLength !== 'number') {
    return 'second param should be of type "number"'
  }
  let res = string.length > maxLength
    ? string.slice(0, maxLength)
    : string + '.'.repeat(maxLength - string.length)
  return res
}

console.log(truncate('sdfsdf', 30))

truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

exports.truncate = truncate;
