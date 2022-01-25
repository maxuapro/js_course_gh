/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
 * и возвращать число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 * 
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение


const flattenArray = (arr) => {
  const newArr = [];
  return arr.reduce((total, value) => {
    return total.concat(Array.isArray(value) ? flattenArray(value) : value);
  }, newArr);
}

const collect = (arr) => {
  if (!arr) {
    throw new Error('There should be at least one arg (Array)')
  }
  if (!Array.isArray(arr)){
    throw new Error('The argument should be of type Array (Array)')
  }
  const flattened = flattenArray(arr)
  let res = 0
  for (el of flattened){
    if (!(typeof el === 'number' || Array.isArray(el))) {
      throw new Error('Some elemets are not of a proper type (number | array)')
    }
    res += el
  }
  return res
}

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

exports.collect = collect;
