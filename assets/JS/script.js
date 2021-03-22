// Assignment code here
let userLength = "";
let confirmLC = "";
let confirmUC = "";
let confirmNum = "";
let confirmSpecial = "";



// Button is clicked which activates a prompt window
  
  // User must choose how many characters, 8 to 128
    // prompt to input only numbers 8 to 128
    // app records user input
  
  // User must choose to include/exclude lowercase letters
    // confirm: include lowercase letters
    // app records user's choice
  
  // User must choose to include/exclude uppercase letters
    // confirm: include uppercase letters
    // app records user's choice

  // User must choose to include/exclude numbers
    // confirm: include numbers
    // app records user's choice

  // User must choose to include/special characters
    // confirm: include special characters
    // app records user's choice
  
// EDITORIAL: I'm pretty solid up to this point.  Now this is guess work as to the steps involved in generating a password
// /EDITORIAL

// `Math.Random` to choose the following characters, if confirmed by user:
  // lowercase letters
  // uppercase letters
  // numbers
  // special characters

//  App must grab the chosen characters, include them in a password, and make sure the length is what the user specified
// App prints that info to the page so the user can copy/pasta

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Given starting code `generateBtn.addEventListener("click", writePassword);`
document.getElementById("generate").addEventListener("click", writePassword);

function writePassword() {
  alert("Yo!");
}
