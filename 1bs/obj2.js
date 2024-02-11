const user={}
user.id="ch123"
user.name="chetan"
user.isLoggedin=false

// console.log(user)
const ruser={
    email:"kt@.co:m",
    fullname:{
        username:{
            firstname:"karan",
            lastname:"sharma"
        }
    }
}

console.log(ruser.fullname.username);


const j1={1:"a",2:"C"}
const j2={3:"z",4:"x"}

const j3=Object.assign({},j1,j2)
// const j3={...j1,...j2}   // or this structure both for adding object
console.log(j3)
