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
}

function btnGen() {
  // User chooses the length of the password
  let userLength = prompt("How many characters are to be included in the password?\n8 minimum characters, 128 maximum.", "8");
    if (isNaN(userLength) || userLength < 8 || userLength > 128) {
      alert("Not too good with directions, are ya, Bucko?\nLet's try again, this time use a number between 8 and 128");
      btnGen();
    }
    else {
      
      console.log("User wants their password to have " + userLength + " characters");
      // User chooses on the inclusion of lowercase letters
      let confirmLower = window.confirm("Got it, " + userLength + " characters.\nWould you like us to sprinkle some lowercase letters in your password?");
      if (confirmLower) {
        console.log("User wants lowercase letters included");
      }
    
    // User chooses on the inclusion of uppercase letters
      let confirmUpper = window.confirm("Wanna spice it up with some uppercase letters?");
      if (confirmUpper) {
        console.log("User wants uppercase letters included");
      }

    // User chooses on the inclusion of numbers
      let confirmNumbers = window.confirm("How about numbers? Hackers hate it when you use numbers.");
      if (confirmNumbers) {
        console.log("User wants numbers included");
      }
 
    // User chooses on the inclusion of special characters
      let confirmSpecial = window.confirm("Know what's harder to guess? Special characters! Want some?");
      if (confirmSpecial) {
        console.log("User wants special characters included");
      }

      if (confirmLower, confirmUpper, confirmNumbers, confirmSpecial == false) {
        alert("So, you want a password with no characters?\nTry again");
        btnGen();
      }
     }
}