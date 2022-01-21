/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей
 * (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение
const getDivisors = (num) => {
  if (isNaN(num)) {
    return 'Error: parameter type is not a Number'
  }
  if (num === 0) {
    return 'Error: parameter can\'t be a 0'
  }
  if (num % 2 !== 0){
    return false
  }
  const dividers = []
  for (let i = 1; i < num; i++){
    if (num % i === 0) {
      dividers.push(i)
    }    
  }
  return dividers
}

console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors('Content')); // Error: parameter type is not a Number
console.log(getDivisors(0)); // Error: parameter can't be a 0
console.log(getDivisors(13)); // Error: parameter can't be a 0
if (getDivisors(24)){
  console.log('It is even')
}

/* не удалять */
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

exports.getDivisors = getDivisors;
/* не удалять */
