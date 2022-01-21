/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение
const getDaysInMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
const currentDate = new Date()

person.salary = getDaysInMonth(currentDate) - currentDate.getDate() > 10 ? 'good salary' : 'bad salary'
console.log(person.salary)

person.salary; // good salary

exports.person = person;
