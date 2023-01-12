export { }

let list1 = [1, 2, 3, 4];

let list2 = [];

let names = ['MARIA', 'JOAO', 'ANABELA'];

// -----------------------------------------------------------------------------------------------------------
// map: apply a function to each and every element from the original collection, 
//it will return a new collection

function double(x : number) : number {
    return x * 2;
}

function triple(x : number) : number {
    return x * 3;
}

let m1 = list1.map(double);
let m2 = list1.map(triple);
let m3 = list1.map(x => x * 2);

console.log('MAP ---------------------------')
console.log(m1);
console.log(m2);
console.log(m3);


// -----------------------------------------------------------------------------------------------------------
// filter: it will return a new collection that contains only those elements of the orginal collection 
//that satisfy a given condition

function isEven(x : number) : boolean {
    return x % 2 == 0;
}

let f1 = list1.filter(isEven);
let f2 = list1.filter(x => x > 2);
let f3 = list1.filter(x => x % 2 != 0);

console.log('FILTER ------------------------')
console.log(f1);
console.log(f2);
console.log(f3);


// -----------------------------------------------------------------------------------------------------------
// reduce: cumulatively applies a function to the elements of a collection, returning the final result

function sum(x : number, y : number) : number {
    return x + y;
}

function multiply(x : number, y : number) : number {
    return x * y;
}

let r1 = list1.reduce(sum);
let r2 = list1.reduce(multiply);
// let r3 = list2.reduce(sum);
let r4 = list2.reduce(sum, 0);

console.log('REDUCE ------------------------')
console.log(r1);
console.log(r2);
// console.log(r3);
console.log(r4);


// -----------------------------------------------------------------------------------------------------------
// sort: sorts the collection according to the comparison function informed as a parameter

function comparisonByName(s1 : string, s2 : string) : number {
    return s2.length - s1.length;
}

let s1 = names.sort(comparisonByName);

console.log('SORT --------------------------')
console.log(s1);
names.sort();
console.log(names);
names.sort((x, y) => x.length - y.length);
console.log(names);