//call back

//write a function to add a number after two seconds with call back
function addAfter2Seconds(num, callback) {
  setTimeout(() => {
    callback(num);
  }, 3000);
}

function add(n) {
  console.log(n + 1);
}

addAfter2Seconds(3, add);

console.log('first line');

//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function func1(callback) {
  setTimeout(callback, 2000);
}

function holler() {
  console.log('heyyy!!!');
}

func1(holler);

//Write a JavaScript program that converts a callback-based function to a Promise-based function.

function func2(n1, n2, callback) {
  const res = n1 + n2;

  setTimeout(() => {
    if (res % 2 === 0) {
      callback(res, null);
    } else {
      callback(null, new Error('res is an odd number'));
    }
  }, 2000);
}

function function2Promisified(n1, n2) {
  return new Promise((resolve, reject) => {
    func2(n1, n2, (res, error) => {
      if (error) {
        reject(error);
      } else {
        resolve(res);
      }
    });
  });
}

function2Promisified(1, 2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

function2Promisified(2, 2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
