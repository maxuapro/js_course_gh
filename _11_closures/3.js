/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение
const fibonacci = (num) => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
const createFibonacciGenerator = () => {
  ind = -1
  const obj = {
    index: ind,
    print: () => {
      ind += 1
      return fibonacci(ind)
    },
    reset: () => {
      ind = -1
    }
  }
  return obj
}

const generator1 = createFibonacciGenerator();

// console.log(generator1.print())

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log('--'); // --
console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2


exports.createFibonacciGenerator = createFibonacciGenerator;
