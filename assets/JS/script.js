<<<<<<< HEAD

var generateBtn = document.querySelector("#generate");
=======
// This matches var `display` to #password in textarea in the HTML code, which will display the generated password on the page
var display = document.querySelector("#password");

// The following variables are declared and given empty arrays to work with
var lowercase = [];
var uppercase = [];
var numbers = [];
var special = [];

>>>>>>> feature/pseudocode

var display = document.querySelector("#password");
var lowercase = [];
var uppercase = [];
var numbers = [];
var special = [];


// Write password to the #password input
<<<<<<< HEAD
function writePassword() {

    let userLength = prompt("How many characters are to be included in the password?\n8 minimum characters, 128 maximum.", "8");

    if (isNaN(userLength) || userLength < 8 || userLength > 128) {
    alert("Not too good with directions, are ya, Bucko?\nLet's try again, this time use a number between 8 and 128");
    writePassword();
    }
    else {
    
        console.log("User wants their password to have " + userLength + " characters");
// User chooses on the inclusion of lowercase letters
        let confirmLower = window.confirm("Got it, " + userLength + " characters.\nWould you like us to sprinkle some lowercase letters in your password?");
        if (confirmLower) {
            userCharSet += "lower, ";
            console.log("User wants lowercase letters included");
        }

// User chooses on the inclusion of uppercase letters
        let confirmUpper = window.confirm("Wanna spice it up with some uppercase letters?");
        if (confirmUpper) {
            userCharSet += "upper, ";
            console.log("User wants uppercase letters included");
        }

// User chooses on the inclusion of numbers
        let confirmNumbers = window.confirm("How about numbers? Hackers hate it when you use numbers.");
        if (confirmNumbers) {
            userCharSet += "numbers, ";
            console.log("User wants numbers included");
        }

=======
function writePassword(lowercase, uppercase, numbers, special) {

    var userCharSet = [];

    let userLength = prompt("How many characters are to be included in the password?\n8 minimum characters, 128 maximum.", "8");

    if (isNaN(userLength) || userLength < 8 || userLength > 128) {
    alert("Not too good with directions, are ya, Bucko?\nLet's try again, this time use a number between 8 and 128");
    writePassword();
    }
    else {
    
        console.log("User wants their password to have " + userLength + " characters");
// User chooses on the inclusion of lowercase letters
        let confirmLower = window.confirm("Got it, " + userLength + " characters.\nWould you like us to sprinkle some lowercase letters in your password?");
        if (confirmLower) {
            userCharSet += "lower, ";
            console.log("User wants lowercase letters included");
        }

// User chooses on the inclusion of uppercase letters
        let confirmUpper = window.confirm("Wanna spice it up with some uppercase letters?");
        if (confirmUpper) {
            userCharSet += "upper, ";
            console.log("User wants uppercase letters included");
        }

// User chooses on the inclusion of numbers
        let confirmNumbers = window.confirm("How about numbers? Hackers hate it when you use numbers.");
        if (confirmNumbers) {
            userCharSet += "numbers, ";
            console.log("User wants numbers included");
        }

>>>>>>> feature/pseudocode
// User chooses on the inclusion of special characters
        let confirmSpecial = window.confirm("Know what's harder to guess? Special characters! Want some?");
        if (confirmSpecial) {
            userCharSet += "special";
            console.log("User wants special characters included");
        }

        if (confirmLower, confirmUpper, confirmNumbers, confirmSpecial === false) {
            alert("So, you want a password with no characters?\nTry again");
            btnGen();
        }
        
        
<<<<<<< HEAD
=======

        var password = generatePassword();
        // var passwordText = document.querySelector("#password");
    }

    return(userCharSet);
>>>>>>> feature/pseudocode

        var password = generatePassword();
        // var passwordText = document.querySelector("#password");
    }

    return(userCharSet);

}

function generatePassword() {
    console.log("yippie!");
}

<<<<<<< HEAD
=======
function generatePassword() {
    console.log("yippie!");
}

>>>>>>> feature/pseudocode
// Adding an EventListener to listen for the "click" when a user clicks the #generate button
document.getElementById("generate").addEventListener("click", writePassword);


