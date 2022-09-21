// map using inversion of control priciple

const arrMethods = {
  squaring(arr) {
    return arr.map((el) => el * el);
  },
  dividing(arr, k) {
    return arr.map((el) => parseInt(el / k));
  },
  sqrRoot(arr) {
    return arr.map((el) => parseInt(Math.sqrt(el)));
  },
};

const arr = [1, 5, 62, 30, 3, 23, 10, 9];
console.log(arrMethods.squaring(arr));
console.log(arrMethods.dividing(arr, 5));
console.log(arrMethods.sqrRoot(arr));

// power of 3 generator
const powerGenerator = function* (k) {
  for (let i = 1; i < 1e10; i *= k) {
    yield i;
  }
};

const it = powerGenerator(3);
console.log(it.next()["value"]);
console.log(it.next()["value"]);
console.log(it.next()["value"]);

const promise1 = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("promise 1 completed");
  }, 1000);
});

const promise2 = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("promise 2 completed");
  }, 2000);
});

const promise3 = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("promise 3 completed");
  }, 3000);
});

// Here promise.race returns the fastest fullfilled promise
Promise.race([promise1, promise2, promise3, promise4]).then((data) =>
  console.log(data)
);
// promise.all waits for all the proimises and returns their results in an arr
Promise.all([promise1, promise2, promise3]).then((data) => console.log(data));
