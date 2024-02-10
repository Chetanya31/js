// array
const arr=[1,2,35,"ee",true]

const arr2=new Array(1,23,4)

// Array method

//push add
arr2.push(9)

// pop

arr2.pop()
console.log(arr2)

arr2.pop()
console.log(arr2)
const newarr=arr2.join("")
console.log(newarr)

// slice spice

let nu=[1,23,45,5,6]
console.log("A ",nu)
const na=nu.slice(1,3)

console.log(na)

console.log("B ",nu)

const ng=nu.splice(1,3)
console.log("C ",nu)
console.log(ng);
