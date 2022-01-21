
var message;

// let login = undefined
// let login = ''
let login = 'Owner'
// let login = 'Pitter'

// if (login == 'Pitter') {
//   message = 'Hi';
// } else if (login == 'Owner') {
//   message = 'Hello';
// } else if (login == '') {
//   message = 'unknown';
// } else {
//   message = '';
// }

message = login == 'Pitter'
  ? 'Pitter'
  : login == 'Owner'
    ? 'Hello'
    : login == ''
      ? 'unknown'
      : ''
console.log('result is:', message)