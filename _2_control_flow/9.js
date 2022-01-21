// # Задача 9
// Отсортируйте массив по убыванию.
// Использовать встроенные методы массивов — нельзя.


const arr = [77, 1, 2, 3, 4, 5, 6];
const arr2 = [678, 123, 234, 345, 456];
// [6,5,4,3,2,1]


const isSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return false
    }
  }
  return true;
}

const sortIt = (arr) => {
  while (!isSorted(arr)) {
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr
}

console.log(sortIt(arr2))