# password-generator

## Description
A JavaScript powered password generator, capable of making passwords from 8 to 128 characters long.  The password can contain lowercase letters, uppercase letters, numbers, and special characters.  The user has the option to include or exclude character types using prompts.

### User Story
> AS AN employee with access to sensitive data  
> I WANT to randomly generate a password that meets certain criteria  
> SO THAT I can create a strong password that provides greater security  
  
### Acceptance Criteria
> GIVEN I need a new, secure password  
> WHEN I click the button to generate a password  
> THEN I am presented with a series of prompts for password criteria  
> WHEN prompted for password criteria  
> THEN I select which criteria to include in the password  
> WHEN prompted for the length of the password  
> THEN I choose a length of at least 8 characters and no more than 128 characters  
> WHEN prompted for character types to include in the password  
> THEN I choose lowercase, uppercase, numeric, and/or special characters  
> WHEN I answer each prompt  
> THEN my input should be validated and at least one character type should be selected  
> WHEN all prompts are answered  
> THEN a password is generated that matches the selected criteria  
> WHEN the password is generated  
> THEN the password is either displayed in an alert or written to the page  

## Technologies
!["HTML5 logo"](./assets/images/HTML.png) !["CSS logo"](./assets/images/css.png) !["Javascript logo"](./assets/images/js.png)
  
## Application
Please visit my deployed application by clicking [zg&&e8EeM!](https://pablodlc.github.io/password-generator/).  
password-generator was a fun project to make.  It was a great lesson in practicing the fine art of Google-Fu. There was a lot of staring off into space watching `for loops` on the ceiling like a chess game with a worried girlfriend by my side.  
Below you'll find a .gif of my deployed application in action. Please note the red/orange circle around the `Generate Password` button is an artifact of Screencastify, my screen recording app, and is not present on the actual application:
!["password-generator in action!"](./assets/images/app.gif)  
  
### Error Handling
The following .gif demonstrates the error handling I wrote into the application.  When promted to choose their password's length, the user must enter a number between 8 and 128.  If the number is too high or too low, if they enter a letter, or if their entry is empty (`null`), an alert is triggered and the user is told to try again.  If, after the user enters a valid number for the password's length, they choose to not include any character types in their passowrd through the prompts, an alert is triggered and they are told to try again.  Again, the red/orange circle around the `Generate Password` button is an artifact of my screen recording app.
!["A gif demonstrating the error handling in the application requiring a valid number for the length of the password and requiring the user to include at least one type of characters in their password"](./assets/images/errorHandling.gif)

## Future Developments
There are two bugs to address.
1. In the case where a user has gone through the process of making a password then clicks the `Generate Password` button again, the password hasn't been cleared.  The first password's character set is still inlucded on the second click, even if the user answers in the negative to include one of the character sets already present.  Perhaps a function to clear the password character set array at the click event will solve this.  
1. On passwords with shorter lengths, sometimes there are missing characters even if the user chose to include them.  As demonstrated in the following .gif, the user confirms the use of numbers but there are no numbers included in the resulting password.  I believe the problem is that even though numbers are in the array for the password generator to use, they are not selected when `Math.floor(Math.random() * userCharSet.length)` function is running.  Numbers have the fewest characters to choose from, so I think they sometimes get missed by the `for loop`. I'm not sure how to ensure all character types can be included every time.
!["A bug in password generator that doesn't include numbers even though the user chose to include them"](./assets/images/bug.gif)


## Resources
- *Robot Gladiators*
- prework assignment, *Watch That Box* for `onclick` event listener in index.html
- [W3Schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_number) to verify user input is a number and that number has a value of 8 through 128.

