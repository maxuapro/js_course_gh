const value = 'a';

// switch (value) {
//   case 'a':
//     console.log('a');
//     break;

//   case 'b':
//   case 'c':
//   case 'd':
//   case 'e':
//     console.log('others');
//     break;

//   default:
//     console.log('unknown');
// }

if (value === 'a') {
  console.log('a');
} else if (['b', 'c', 'd', 'e'].includes(value)) {
  console.log('others');
} else {
  console.log('unknown');
}