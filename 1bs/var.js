const accountId = 1331
let accountEmail = "c22@g.com"
var accountPassword = "12"
city = "Chandigarh"

// accountId = 31 not allowed to change constant`
accountEmail = "d1@e.com"
accountPassword = "444"
city="ludhiana"
console.log(accountId);
// it is your wish to put semicolon(;) in the end in javascript.
/*
prefer not to use var  because of issue in block scope and functional scope*/

console.table([accountEmail,accountPassword,city])