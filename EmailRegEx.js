let prompt = require("prompt-sync")();

let emailRegex = new RegExp("^abc[._+-]?[a-zA-Z]*@bridgelabz[.]co[.]*[a-z]*$");
let userInput = prompt("Enter Your email = ");

if (emailRegex.test(userInput)){
    console.log("You Entered SuccessFully");
}else{
    console.log("You entered  wrong email id ");
}