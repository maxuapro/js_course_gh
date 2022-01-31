/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение
const postpone = (start, end, delay) => {
  if (![start, end, delay].every(el => typeof el === 'number')) {
    throw new Error('Arguments should be of type Number (start, end, delay)')
  }

  const normal = start < end

  const createArray = () => {
    let realStart, realEnd
    if (normal) {
      [realStart, realEnd] = [start, end]
    } else {
      [realEnd, realStart] = [start, end]
    }
    const arr = []
    let c = realEnd - realStart + 1;
    while (c--) {
      arr[c] = realEnd--
    }
    return arr
  }

  const theRange = createArray()
  if (!normal) {
    theRange.reverse()
  }

  let del = 0
  for (let i = 0; i <= theRange.length - 1; i++) {
    del += delay
    setTimeout(() => {
      console.log(theRange[i])
    }, del)
  }
}

postpone(1, 3, 1000);
// 1
// 2
// 3
// postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;