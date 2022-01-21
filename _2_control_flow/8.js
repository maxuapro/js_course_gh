// # Задача 8
// Напишите код, который посчитает сумму всех парных элементов в массиве.В суммировании участвуют только элементы больше 3.
// Использовать встроенные методы массивов — нельзя.


const array = [1, 2, 3, 4, 5, 6]; // 24

const greaterThan3 = (num) => {
  return num > 3 ? num : 0
}

let theSum = 0
for (let i = 0; i < array.length - 1; i++) {
  theSum += greaterThan3(array[i]) + greaterThan3(array[i + 1])
}

console.log(theSum)