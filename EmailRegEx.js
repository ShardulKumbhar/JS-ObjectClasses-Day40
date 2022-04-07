let prompt = require("prompt-sync")();

//created @ bridgelabz after co as mandatory part 
let emailRegex = new RegExp("^abc[._+-]?[a-zA-Z]*@bridgelabz[.]co[.]*[a-z]*$");
let userInput = prompt("Enter Your email = ");

if (emailRegex.test(userInput)){
    console.log("You Entered SuccessFully");
}else{
    console.log("You entered  wrong email id ");
}