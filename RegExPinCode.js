let prompt = require("prompt-sync")();

/*
Taking User Input and creating regEx Patter
Ristrictin the user to not take alhapets in fist or last
if there is any Empty space between 3 digt the code will also run ex-412 321 ex-412321
*/
let pincodeRegex =  new RegExp("^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$");
let pincode =  parseInt(prompt("Enter the PinCode = "));


//Validate user input with RegEx pattern 
if (pincodeRegex.test(pincode)){
    console.log("Enterd Successfully");
}else{
    console.log("please enter Valid pincode")
}