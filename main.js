

// class ErrorREsponse extends Error{
//     constructor(message,status){
//     super(message);
//     this.status = status;

//     }

// }

// const  err = new ErrorREsponse ("auth", 401);
// console.log(err);
// console.log(err.message);
// console.log(err.status);

// let User = {
//     firstName: "1234567",
//     lastName: "Nabijonov",
//     age : 21,
// }

// let handler = {
//     get(target,property){
//      if(typeof target[property] !== "string" && property === "firstName"){
//      return target[property].toString();
//      }
//      return target[property]
//     },
//     set(target,property,value){
//         if(typeof value !== "number" && property === "age"){
//              target[property] = +value;
//         }

//     }
// }


// let newUser = new Proxy(User,handler)

// // console.log(User.firstName);
// // console.log(newUser.firstName); 

// newUser = "20";

// console.log(newUser);
// console.log(newUser.firstName);
// console.log(newUser.age);

// let arr = [10,20,30,40,50,];



// for(el of arr){
//     console.log(el);
// }


// let arriterator = arr[Symbol.iterator]();

// console.log(arriterator.next());
// console.log(arriterator.next());
// console.log(arriterator.next());
// console.log(arriterator.next());
// console.log(arriterator.next());
// console.log(arriterator.next());

// let str = "yahyojon";

// for(el of str){
//     console.log(el);
// }


// let striterator = str[Symbol.iterator]();

// console.log(striterator.next());
// console.log(striterator.next());
// console.log(striterator.next());
// console.log(striterator.next());
// console.log(striterator.next());
// console.log(striterator.next());
// console.log(striterator.next());
// console.log(striterator.next());
// console.log(striterator.next());



// let obj = {a:1, b:2, c:3}
// console.log(obj);

// let mapObj = new Map([["a",1],["b",2],["c",3],]);
// mapObj.set("d",4);
// mapObj.delete("c");
// // mapObj.clear();
// console.log(mapObj.has("a"));
// console.log(mapObj);
// // console.log(mapObj.size);
// console.log(mapObj.get("a"));

// mapObj.forEach((el, i ,arr) =>{

//     console.log(el,i);
// })

// const keys = mapObj.keys();
// console.log(keys);

// const value = mapObj.values();
// console.log(value);

// const entries = mapObj.entries();
// console.log(entries);

// let arr = [1,2,3,3,4,5,6,7,7,8,9,9];

// let setArr = new Set(arr);
// console.log(setArr);

// function* iteratorFunc(){
//     yield 1;
//     yield 2;
//     yield 2;
//     yield 3;
//     yield 5;
// }

// for(let el of iteratorFunc()){
//   console.log(el);
// }
// console.log(iteratorFunc()[Symbol.iterator]());

// const functioniterator = iteratorFunc()[Symbol.iterator]();

// console.log(functioniterator.next());
// console.log(functioniterator.next());
// console.log(functioniterator.next());
// console.log(functioniterator.next());
// console.log(functioniterator.next());
// console.log(functioniterator.next());

// class Sequence {
//     constructor( start = 0, end = Infinity, interval = 1 ) {
//         this.start = start;
//         this.end = end;
//         this.interval = interval;
//     }
//     [Symbol.iterator]() {
//         let counter = 0;
//         let nextIndex = this.start;
//         return  {
//             next: () => {
//                 if ( nextIndex <= this.end ) {
//                     let result = { value: nextIndex,  done: false }
//                     nextIndex += this.interval;
//                     counter++;
//                     return result;
//                 }
//                 return { value: undefined, done: true };
//             },
//             return: () => {
//                 console.log('cleaning up...');
//                 return { value: undefined, done: true };
//             }
//         }
//     }
// }

// const s1= new Sequence(3,30,3);
// // console.log(s1);

// for(let el of s1){
//     console.log(el);
// }


// class CustomMap {
//   #values;
//   constructor(values) {
//     this.#values = values;
//   }
//   get size() {
//     return this.#values.length;
//   }
//   [Symbol.iterator]() {
//     let counter = 0;
//     return {
//       next: () => {
//         if (counter !== this.#values.length) {
//           let res = { value: this.#values[counter], done: false };
//           counter++;
//           return res;
//         }
//         return { value: this.#values[counter], done: true };
//       },
// 			// cleaning
// 			return: () => {
//           console.log('cleaning up...');
//           return { value: undefined, done: true };
//       }
//     };
//   }
// }

// a = new CustomMap([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);

// console.log(a.size);

// for (key of a) {
//   console.log(key);
// }


// map 1


// function deleteMany(obj, ...keys) {
//   for (let key of keys) {
//     obj.delete(key);
//   }
//   return obj;
// }

// let obj = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
//   ['d', 4]
// ]);

// deleteMany(obj, 'a', 'c');
// console.log(obj);

// map 2

// function mapSum(obj) {
//   let sum = 0;
//   for (let value of obj.values()) {
//     sum += value;
//   }
//   return sum;
// }

// let obj = new Map([['a', 2], ['b', 5], ['c', 3]]);
// console.log(mapSum(obj));


// map 3

// function getMapIntersection(map1, map2) {
//   let intersection = new Map();

//   for (let [key, value] of map1) {
//     if (!map2.has(key)) {
//       intersection.set(key, value);
//     }
//   }

//   for (let [key, value] of map2) {
//     if (!map1.has(key)) {
//       intersection.set(key, value);
//     }
//   }

//   return intersection;
// }

// let map1 = new Map([['apple', 1], ['banana', 2], ['orange', 3]]);
// let map2 = new Map([['apple', 4], ['orange', 5], ['grape', 6]]);
// console.log(getMapIntersection(map1, map2));

// map 4


// let obj = new WeakMap([[{id: 1}, 'John'], [{id: 2}, 'Jane'], [{id: 3}, 'Alice']]);

// Object.defineProperty(obj, 'size', {
//   get: function() {
//     let count = 0;
//     for (let el of obj) {
//       count++;
//     }
//     return count;
//   }
// });

// console.log(obj.size); 

// set 5

// function setUnion(set1, set2) {
//   let union = new Set(set1);
//   for (let item of set2) {
//     union.add(item);
//   }
//   return union;
// }

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);
// console.log(setUnion(set1, set2));


// set 6


// function setIntersection(set1, set2) {
//   let intersection = new Set();
//   for (let item of set1) {
//     if (set2.has(item)) {
//       intersection.add(item);
//     }
//   }
//   return intersection;
// }

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);
// console.log(setIntersection(set1, set2));

// set 7

// function checkSetSubset(set1, set2) {
//   for (let item of set1) {
//     if (!set2.has(item)) {
//       return false;
//     }
//   }
//   return true;
// }

// let set1 = new Set([1, 2]);
// let set2 = new Set([1, 2, 3, 4]);
// console.log(checkSetSubset(set1, set2));

// spread 8

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// let arr = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(arr));

// spread 9

// function mergeArr(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// let arr1 = [1, 5, 8];
// let arr2 = [7, 9, 10];
// console.log(mergeArr(arr1, arr2));

// spread 10

// function concatArrays(...arrays) {
//   return [].concat(...arrays);
// }

// console.log(concatArrays([1, 2], [3, 4], [5, 6]));



