// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// const promise = new Promise((resolve, reject) => {
//   const canFulFill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulFill) {
//       resolve('Succes');
//     }
//     reject('error');
//   }, 2000);
// });

// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log(`${result}`);
// }
// function onRejected(error) {
//   console.log(`${error}`);
// }
// Change value of isSuccess variable to call resolve or reject
// Change value of isSuccess variable to call resolve or reject
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Will run first
// console.log('Before promise.then()');

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log('onResolve call inside promise.then()');
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log('onReject call inside promise.then()');
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log('After promise.then()');
const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve('success value');
      } else {
        reject('error');
      }
    }, 2000);
  });
};

fetchUserFromServer('Mango')
  .then(user => console.log(user))
  .catch(error => console.error(error));
