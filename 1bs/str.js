let aname="yellq"
let bname=aname
bname="kilt"
console.log(aname) // here only value copy has been passed
console.log(bname)

let myn={
    accountEmail:"h@g.com"
}
let bt=myn
bt.accountEmail="gt@.com"//refrence copy


console.log(bt)

console.log(myn)

console.log(`first word is of aname : ${aname[0]}`)



// string interpolation

console.log(`hello my name ${aname} . how about you ${bname} `)
aname="yellq"
let d=33

console.log(aname.length)
console.log(aname.charAt(3));
console.log(aname.indexOf("q"));
console.log(d.toString())
console.log(typeof d)
c=aname.slice(2)
g=aname.slice(2,4)

console.log(c);
console.log(g);

let name="  chetan  "
console.log(name.trim());// it is used to remove white spaces

let vid="bl1123"
console.log(vid.replace("1","d",1))


const uid="bl11213"
console.log(uid.replace("1","d"));


