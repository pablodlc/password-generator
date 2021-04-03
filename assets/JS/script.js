// This matches var `display` to #password in textarea in the HTML code, which will display the generated password on the page
var display = document.querySelector("#password");

// The following varaibles contain arrays of their namesake characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "<", ">", "?", "/", "[", "]", "{", "}"];

var passwordLength = "";
var userCharSet = "";


// function to get length of password
function getLength() {
    let userLength = prompt("How many characters are to be included in the password?\n8 minimum characters, 128 maximum.", "8");

    // If the silly user inputs an empty value, or if the value wasn't a number between 8 and 128, they have to start again.
    if (isNaN(userLength) || userLength < 8 || userLength > 128) {
    alert("Not too good with directions, are ya, Bucko?\nLet's try again, this time use a number between 8 and 128");
    location.reload();
    }

    else {
        console.log("User wants their password to have " + userLength + " characters");
        writePassword(lowercase, uppercase, numbers, special);
    }
    passwordLength = userLength;
    return passwordLength;
}        


function writePassword(lowercase, uppercase, numbers, special) {
    // User chooses on the inclusion of lowercase letters      
    let confirmLower = window.confirm("Would you like us to sprinkle some lowercase letters in your password?");

    // User chooses on the inclusion of uppercase letters
    let confirmUpper = window.confirm("Wanna spice it up with some uppercase letters?");
    
    // User chooses on the inclusion of numbers
    let confirmNumbers = window.confirm("How about numbers? Hackers hate it when you use numbers.");
    
    // User chooses on the inclusion of special characters
    let confirmSpecial = window.confirm("Know what's harder to guess? Special characters! Want some?");
    
    
    // If our silly user chooses a password with no characters, they get a snarky reply and have to start over
        // EDITORIAL: I know the following line isn't DRY, but I couldn't figure out how to include all of the confirms once and set all of them to != true at once.  When I comma separated them, if I clicked to INCLUDE lowercase letters and EXCLUDE the rest, it gave me the snarky alert message
    if ((confirmLower != true) && (confirmUpper != true) && (confirmNumbers != true) && (confirmSpecial != true)) {
        // alert("So you want a password with no characters?\nTry again");
        alert("So you want a password with no characters?\nLet's try again.");
        location.reload();
    } else {
        // Here the script records the user's choices and adds the approppriate character sets to `userCharSet`
        if (confirmLower) {
            for (var i = 0; i < lowercase.length; i++) {
                userCharSet = userCharSet +  lowercase[i];
            }
            console.log("User wants lowercase letters included");
        };
    
        if (confirmUpper) {
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
        // Here we tell the browser to run generator()
        generator();
    }
    return userCharSet;
}

function generator(passwordLength) {
    // Declaring `passowrd` variable with an empty array to hold the generated password
    var password = [];
    // Here the script repeats the for loop as many times as the amount of characters chosen by the user (passwordLength), while accessing the userCharSet and randomly choosing characters for the password
    for (var i = 0; i < passwordLength; i++) {
        console.log("The user's character set array contains: " + userCharSet);
        var randomIndex = Math.floor(Math.random() * userCharSet.length);
        password.push(userCharSet[randomIndex]);
    }
    // .join("") returns an array as a string. The `""` joins the string together 
    return password.join("");
}

// Generator starts here when button is clicked
function generatePassword() {
    
    getLength();
    var password = generator(passwordLength);
    displayPassword(password);
}

// Function to print the password to the page using `displat.textContent` and on an alert
function displayPassword(password) {
    display.textContent = password;
    if (password === "") {
        location.reload();
    } else {
    alert("Your password is:\n" + password);
    }
}

// Adding an EventListener to listen for the "click" when a user clicks the #generate button
document.getElementById("generate").addEventListener("click", generatePassword);
