// 1st approach
// function flattenArray(arr) {
//   return arr.reduce((prevVal, currentVal) => {
//     if (Array.isArray(currentVal)) {
//       prevVal = prevVal.concat(flattenArray(currentVal));
//     } else {
//       prevVal.push(currentVal);
//     }
//     return prevVal;
//   }, []);
// }

// Approach 2

// function flattenArray(arr) {
//   return arr.reduce(
//     (acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
//     []
//   );
// }
// console.log(
//   flattenArray([
//     [
//       [
//         [1, [1.1], 2, 3],
//         [4, 5],
//       ],
//     ],
//   ])
// );

//Flatten an array Non-Recusrsive Method

function flattenArr(array) {
  let stack = [...array];
  let result = [];

  while (stack.length) {
    let last = stack.pop();
    if (Array.isArray(last)) {
      stack.push(...last);
    } else {
      result.push(last);
    }
  }
  return result.reverse();
}

let numbers = [
  [
    [
      [1, [1.1], 2, 3],
      [4, 5],
    ],
  ],
];

console.log(flattenArr(numbers));
//Using toString() methods
console.log(numbers.toString());
console.log(numbers.toString().split(","));
console.log([...numbers.toString().split(",")]);
