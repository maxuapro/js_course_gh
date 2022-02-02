// # Задача 3

// Создайте функцию `send` которая будет оберткой для функции `get` которая поддерживает только `callback` технологию.

// ** Обратите внимание **:

// 1. Функция `send` должна возвращать промис;
// 2. Использование`async & await` ** запрещено **.
// 3. Нужно использовать библиотеку для отправки запросов[fetch](https://github.com/andris9/fetch)
//   4. Использование посторонних библиотек кроме[библиотеки fetch](https://github.com/andris9/fetch) **запрещено**.
//     5. Если сервер ответил статус кодом `200` промис ** должен ** резолвиться с параметром, аргументом для которого будет массив который содержит список объектов - стран.
// 6. В том случае если сервер ответил статус кодом не`200` промис ** должен ** реджектится с текстом`We have error, status code: ${statusCode}`

// ** До рефакторинга **:

// const get = require('fetch').fetchUrl;

// const url = 'https://lab.lectrum.io/geo/api/countries?size=2';
// get(url, (error, meta, body) => {
//   const { data } = JSON.parse(body);
//   console.log(data);
// });

// ** После рефакторинга **

const get = require('fetch').fetchUrl;
const url = 'https://jsonplaceholder.typicode.com/posts/1';
// const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

const send = (url) => {
  return new Promise((resolve, reject) => {
    get(url, function (error, meta, body) {
      if (meta.status !== 200) {
        reject(`We have error, status code: ${meta.status}`)
      }
      resolve(body.toString())
    });
  })
}

send(url)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });