const usermail=[]    //for aray it will take truth
if (usermail){
    console.log("have mail");
    
}
else {
    console.log("no mail");   
}



// falsy values

//false,0,-0,BigInt 0n, "",null,undefined,NaN

//Truthy values
// ("0","false"," ") in str it takes as truthy,[],{},function(){}


const emtyob={}
if (Object.keys(emtyob).length === 0){
    console.log("object is empty");
}