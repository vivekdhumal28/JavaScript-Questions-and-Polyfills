// let x = {
//   m: 42,
//   f: function () {
//     let a = [1, 2, 3];
//     let str = "";
//     a.forEach((e) => {
//       str += this.m;
//     });
//     return str;
//   },
// };
// console.log(x.f());

// var a = 10;
// if (a < 20) {
//   let b = "yes";
// } else {
//   let b = "No";
// }
// console.log(b);

// Addition
// let a = [1, 2, 1, 2, 4];
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   console.log(i, a[i]);
//   sum += i;
// }
// console.log(sum);

// Get unique
let a = [1, 2, 1, 2, 4];

let counts = {};
a.forEach((item) => {
  counts[item] = (counts[item] || 0) + 1;
});

let unique = a.filter((item) => counts[item] === 1); // [4] => remove array by find function

console.log(unique);
