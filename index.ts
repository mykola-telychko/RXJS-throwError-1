import { throwError, of } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/throw

//emits an error with specified value on subscription
const source = throwError('This is an error!');
const src = of('This is not error!');

//output: 'Error: This is an error!'
// const subscribe = source.subscribe({
const subscribe = src.subscribe({
  next: (val) => console.log(val),
  complete: () => console.log('Complete!'),
  error: (val) => console.log(`Error: ${val}`),
});
