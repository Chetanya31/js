const user={
    username:"chetan",
    id:31,
 welcomemsg: function(){
    console.log(`${this.username},welcome to website`)
    console.log(this);
}
 }
// user.welcomemsg()
// user.username="karan"
// user.welcomemsg()

const fuln= () => {
    let name="tarun"
    console.log(this);
}

// fuln()



const add2=(num1,num2)=>{   //  or    implicit const add2=(num1,num2) => (num1+num2) in 1 line
    return num1+num2
}


// console.log(add2(2,3));


