let prompt = require("prompt-sync")();

//checking with multiple email address 

let emialRegex = new RegExp("^abc[-.+]*[0-9]*@[a-z]*[.a-z][.a-z]*")
let userInput = prompt("enter email id here = ");
if (emialRegex.test(userInput)){
    console.log("You Email added Successfully ");
}else{
    console.log("you entered  invalid email id ");
}