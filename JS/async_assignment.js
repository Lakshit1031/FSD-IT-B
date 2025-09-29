const username = process.argv[2];

// console.log("Program started (callback)");

// function asyncAction(actionName, delay, callback) {
//   console.log(`${actionName}...`);
//   setTimeout(() => {
//     console.log(`${username} ${actionName.toLowerCase()}ed.`);
//     callback && callback();
//   }, delay);
// }

// asyncAction("Logging in", 2000, () => {
//   asyncAction("Coding", 1000, () => {
//     asyncAction("Logging out", 1000, () => {
//       console.log("Program ended (callback)");
//     });
//   });
// });

// promise.js

console.log("Program started (promise)");

function asyncAction(actionName, delay) {
  console.log(`${actionName}...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${username} ${actionName.toLowerCase()}ed.`);
      resolve();
    }, delay);
  });
}

asyncAction("Logging in", 2000)
  .then(() => asyncAction("Coding", 1000))
  .then(() => asyncAction("Logging out", 1000))
  .then(() => console.log("Program ended (promise)"));
