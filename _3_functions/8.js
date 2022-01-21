/**
 * Задача 7.
 *
 * Дан массив с числами `[1, 2, 3]`.
 * Создайте функцию `f`, которая принимает массив в качестве параметра,
 * а затем последовательно выводит на экран его элементы.
 *
 * Условия:
 * - Входной параметр должен быть не пустым массивом;
 * - Обязательно использовать рекурсию;
 * - Использовать цикл запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение
const f = (arr, ind = 0) => {
  if (!Array.isArray(arr)){
    console.log('Error: parameter type should be an array')
    return 'Error: parameter type should be an array'
  }
  if (arr.length < 1){
    console.log('Error: parameter can\'t be an empty')
    return 'Error: parameter can\'t be an empty'
  }
  console.log(arr[ind])
  ind += 1
  if (ind !== arr.length - 1) {
    f(arr, ind)
  } else {
    console.log(arr[arr.length - 1])
    return
  }
}
/* не удалять */
f([1, 2, 3]);
// 1
// 2
// 3
f(1, 2, 3); // Error: parameter type should be an array
f('Content'); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty

exports.f = f;
/* не удалять */
