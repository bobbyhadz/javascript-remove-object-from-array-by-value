// EXAMPLE 1 - Remove an Object from an Array by its Value in JavaScript

const arr = [{id: 1}, {id: 3}, {id: 5}];

const newArr = arr.filter(object => {
  return object.id !== 3;
});

console.log(newArr); // 👉️ [{id: 1}, {id: 5}]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove an Object from an Array by its Value using Array.findIndex()

// const arr = [{id: 1}, {id: 3}, {id: 5}];

// const indexOfObject = arr.findIndex(object => {
//   return object.id === 3;
// });

// console.log(indexOfObject); // 👉️ 1

// arr.splice(indexOfObject, 1);

// console.log(arr); // 👉️ [{id: 1}, {id: 5}]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove an Object from an Array by its Value using Array.slice()

// const arr = [{id: 1}, {id: 3}, {id: 5}];

// const indexOfObject = arr.findIndex(object => {
//   return object.id === 3;
// });

// const newArr = [
//   ...arr.slice(0, indexOfObject),
//   ...arr.slice(indexOfObject + 1),
// ];

// // 👇️ [ { id: 1 }, { id: 5 } ]
// console.log(newArr);
