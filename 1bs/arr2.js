const he=["che","gar","man"]
const fr=["ish","vip","har"]
const gt=["blue","green","red"]

// he.push(fr)

// console.log(he)  // it will  add as list in a list.

//console.log(he.concat(fr))

// spread out operator

/*   can add more than 1 list at one time.

 const ne=[...he, ...fr, ...gt]
console.log(ne);
*/

//  flat operator used to dissolve  nested array into 1.


const nr=[1,3,5,[2,3],[8,[7,4]]]
rnr=nr.flat(Infinity)
console.log(rnr);



console.log(Array.isArray("chetan"))
console.log(Array.from("chetan"))
console.log(Array.from({name : "chetan"})) // interesting




