function myname(){
    console.log(" name is chetanya")
}

// myname()

// function add2num(number1,number2){
//     console.log(number1+number2);
// }
// const result= add2num(2,4) in this result will be undefined

function add2num(number1,number2){

    // let result=number1+number2
    // return result
    return number1+number2
}

const result= add2num(2,4)
// console.log(`result is : ${result}`)

function login(username="htx") {
    if (username === undefined){   //or we can also say  if(!username){}
        console.log("enter entry please")
        return 
    }
    return `${username} just logged in`
}
// console.log(login("chetanya"))
// console.log(login("karan"));



// for unknown aguement


function calculationcartprice(...num1){
    
    return num1

}

// console.log(calculationcartprice(200,400,500))


const user={
    name:"mainsh",
    byr:"1968"
}

function handleobject(anyobject) {
      console.log(`user name is : ${anyobject.name} and byear is : ${anyobject.byr}`)
    
}
// handleobject(user)


handleobject(
    {
        name:"virat",
        lname:"kohli"
    }

)

const myarr=[22,44,55,66]

function return2value(getarr){
    return getarr[1]
}

 console.log(return2value(myarr));
// or  can write as
// console.log(return2value([200,330,5,6]));