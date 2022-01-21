// # Задача 7
// Напишите код, который посчитает сумму всех парных элементов в массиве.
// Использовать встроенные методы массивов — нельзя.

const array = [1, 2, 3, 4]; // 15

let theSum = 0
for (let i = 0; i < array.length - 1; i++) {
  theSum += array[i] + array[i + 1]
}

console.log(theSum)