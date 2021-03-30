// This matches var `display` to #password in textarea in the HTML code, which will display the generated password on the page
var display = document.querySelector("#password");

// The following varaibles contain arrays of their namesake characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "<", ">", "?", "/", "[", "]", "{", "}"];

var passwordLength = "";
var userCharSet = "";
// var password = "";


// Write password to the #password input
function getLength() {

    let userLength = prompt("How many characters are to be included in the password?\n8 minimum characters, 128 maximum.", "8");

    if (isNaN(userLength) || userLength < 8 || userLength > 128) {
    alert("Not too good with directions, are ya, Bucko?\nLet's try again, this time use a number between 8 and 128");
    writePassword();
    }

    else {
        console.log("User wants their password to have " + userLength + " characters");
        writePassword(lowercase, uppercase, numbers, special);
    }
    passwordLength = userLength;
}        


function writePassword(lowercase, uppercase, numbers, special) {

    // User chooses on the inclusion of lowercase letters      
    let confirmLower = window.confirm("Got it, " + passwordLength + " characters.\nWould you like us to sprinkle some lowercase letters in your password?");
    console.log(confirmLower);
    // User chooses on the inclusion of uppercase letters
    let confirmUpper = window.confirm("Wanna spice it up with some uppercase letters?");
    
    // User chooses on the inclusion of numbers
    let confirmNumbers = window.confirm("How about numbers? Hackers hate it when you use numbers.");
    
    // User chooses on the inclusion of special characters
    let confirmSpecial = window.confirm("Know what's harder to guess? Special characters! Want some?");
    
    
    // If our silly user chooses a password with no characters, they get a snarky reply and have to start over
        // EDITORIAL: I know the following line isn't DRY, but I couldn't figure out how to include all of the confirms once and set all of them to != true at once.  When I comma separated them, if I clicked to INCLUDE lowercase letters and EXCLUDE the rest, it gave me the snarky alert message
    if ((confirmLower != true) && (confirmUpper != true) && (confirmNumbers != true) && (confirmSpecial != true)) {
        alert("So you want a password with no characters?\nTry again");
        getLength();
    }

    else {
    
        if (confirmLower) {
            console.log("lowercase")
            console.log(lowercase.length);
            for (var i = 0; i < lowercase.length; i++) {
                userCharSet = userCharSet +  lowercase[i];
            }
            console.log("User wants lowercase letters included");
        };
    
        if (confirmUpper); {
        for (var i = 0; i < uppercase.length; i++) {
                userCharSet = userCharSet + uppercase[i];
            }
            console.log("User wants uppercase letters included");
        };

        if (confirmNumbers) {
            for (var i = 0; i < numbers.length; i++) {
                userCharSet = userCharSet + numbers[i];
            }
            console.log("User wants numbers included");
        }

        if (confirmSpecial) {
            for (var i = 0; i < special.length; i++) {
                userCharSet = userCharSet + special[i];
            }
            console.log("User wants special characters included");
        }
        generator();
    }
    return userCharSet;
}

function generator(passwordLength) {
   
    console.log("generator running...");
    console.log("usercharset")
    console.log(userCharSet);
    console.log("userlength")
    console.log(passwordLength);
    var password = [];
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * userCharSet.length);
        password.push(userCharSet[randomIndex]);
    }
    return password.join("");
}


function generatePassword() {
    // var getUserInput = getLength();
    //var password =getLength(); 
    getLength();
    var password = generator(passwordLength);
    console.log("password")
    console.log(password)
    displayPassword(password);
    console.log(password.length);
}

function displayPassword(password) {
    display.textContent = password;
}

// Adding an EventListener to listen for the "click" when a user clicks the #generate button
document.getElementById("generate").addEventListener("click", generatePassword);