// map polyfill
// Array.prototype.myMap = function (cb) {};

Array.prototype.myMap = function (cb) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    tempArr.push(cb(this[i], i, this));
  }
  return tempArr;
};

//Basic map operation --> replace myMap to map
// Returning a new array from existing array and modify each element of an array
// as per provided function.
arr = [1, 2, 3, 4, 5, 6];

let mappedArr = arr.myMap((num, i, arr) => {
  return num * 2;
});
console.log(mappedArr);

// filter polyfill
Array.prototype.myFilter = function (cb) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) tempArr.push(this[i]);
  }
  return tempArr;
};
// filter HOF is returning a new array from existing arr but o;ny contain thise elements
// who satisfy condition provided ny the function
unfilteredArr = [1, 2, 3, 4, 5, 6];

let filteredArr = unfilteredArr.myFilter((num, i, arr) => {
  return num > 2;
});
console.log(filteredArr);

// Reduce polyfill
Array.prototype.myReduce = function (cb, initVal) {
  let acc = initVal;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};
// Reduce an array into a single value by iterating each element of an array
// as per provided function store the return value inside accumalator
unreduceArr = [1, 2, 3, 4, 5, 6];

let reducedArr = unreduceArr.myReduce((acc, num, i, arr) => {
  return (acc += num);
}, 0);
console.log(reducedArr);
