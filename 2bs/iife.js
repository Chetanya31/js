// Immediately invoked function Expression(IIFE)
// it is used for execute the function immedate + safe from global pollution
// here there is 2 paranthesis 1 for definition and 1 for declaration ()().
(
   function lname () {           //this is named IIFE        
        console.log("sharma");        
     }
)();                 // you need 2 put semicolon in end of this to end it process


//  in arrow we can write
(                               //This is unamed IIFE
    (name)=>{
        console.log(`name is : ${name}`);
    }
)("chetan");


