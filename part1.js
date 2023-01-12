"use strict";
exports.__esModule = true;
var list1 = [1, 2, 3, 4];
var list2 = [];
var names = ['MARIA', 'JOAO', 'ANABELA'];
// -----------------------------------------------------------------------------------------------------------
// map: apply a function to each and every element from the original collection, 
//it will return a new collection
function double(x) {
    return x * 2;
}
function triple(x) {
    return x * 3;
}
var m1 = list1.map(double);
var m2 = list1.map(triple);
var m3 = list1.map(function (x) { return x * 2; });
console.log('MAP ---------------------------');
console.log(m1);
console.log(m2);
console.log(m3);
// -----------------------------------------------------------------------------------------------------------
// filter: it will return a new collection that contains only those elements of the orginal collection 
//that satisfy a given condition
function isEven(x) {
    return x % 2 == 0;
}
var f1 = list1.filter(isEven);
var f2 = list1.filter(function (x) { return x > 2; });
var f3 = list1.filter(function (x) { return x % 2 != 0; });
console.log('FILTER ------------------------');
console.log(f1);
console.log(f2);
console.log(f3);
// -----------------------------------------------------------------------------------------------------------
// reduce: cumulatively applies a function to the elements of a collection, returning the final result
function sum(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
var r1 = list1.reduce(sum);
var r2 = list1.reduce(multiply);
// let r3 = list2.reduce(sum);
var r4 = list2.reduce(sum, 0);
console.log('REDUCE ------------------------');
console.log(r1);
console.log(r2);
// console.log(r3);
console.log(r4);
// -----------------------------------------------------------------------------------------------------------
// sort: sorts the collection according to the comparison function informed as a parameter
function comparisonByName(s1, s2) {
    return s2.length - s1.length;
}
var s1 = names.sort(comparisonByName);
console.log('SORT --------------------------');
console.log(s1);
names.sort();
console.log(names);
names.sort(function (x, y) { return x.length - y.length; });
console.log(names);
