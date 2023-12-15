const accountId = 1448783
let accountEmail = "soham@google.com"
var accountPassword = "12645"
accountCity = "Nagpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sk@hc.com"
accountPassword = "21012121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])