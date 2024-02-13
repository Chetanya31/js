//  for loop


// ["","",""]
// [{},{},{}]


const ar=[1,23,4,5]
const b=[]

//  for of loop 

// for (const num of ar) {
//     if (num<23){
//         b.push(num);
//     }
//     console.log(num);
// }
// console.log(b);    

//  Maps

const map =new Map()
map.set("IN","INDIA")
map.set("USA","United States of America")

// console.log(map);


// for (const [key,value] of map) {
//     console.log(key,":",value);
    
//}



// for (const [key,value] of map) {
//     console.log(key,":",value);
    
//}

//  for loop in object   it uses for in loop



const myob={

    name:"chetan",
    age:22,
    byear:2001
}
for (const key in myob) {
   console.log(myob[key]);
    }






