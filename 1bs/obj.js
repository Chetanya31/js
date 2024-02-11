// singleton object made  if object is made using constructor.







//  not singleton if made using literal

// objedcts  are basically key value pairs 

// symbol is in itialised as key

const mysym=Symbol("key1")

const jid = {
    name:"chetan",
    age:23,
    [mysym]:"key1",// need to use square brackets for keys 
    city:"Jalandhar",
    hobby:["chess","video game"]

}  //   or Object.create

// console.log(jid.name) or jid["name"]

console.log(jid[mysym])// print like this symbol
console.log(jid.name)
jid.name="chetanya"
Object.freeze(jid.name)
jid.name="karan"

console.log(jid.name)

jid.greet=function(){
    console.log("hello user")
}

console.log(jid.greet())
