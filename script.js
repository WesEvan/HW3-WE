// Assignment Code
var generateBtn = document.querySelector("#generate");

//var aUpperCase = charAt(1) - 96;
// Is it possible to utilize ASCII or Unicode?

var aUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
                  "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                  "S", "T", "U", "V", "W", "X", "Y", "Z"]
var aLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
                  "j", "k", "l", "m", "n", "o", "p", "q", "r",
                  "s", "t", "u", "v", "w", "x", "y", "z"];
var aNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var aSpecial = [" ", "!", "\"", "#", "$", "%", "&", 
               "'", "(", ")", "*", "+", ",", "-", 
               ".", "/", ":", ";", "<", "=", ">",
               "?", "@", "[", "\\", "]", "^", "_",
               "`", "{", "|", "}", "~"]
var input, cUpper, cLower, 
    cNum, cNonNum, gPassword; 



function createPassword()
{
  input = window.prompt("Choose a password length "
  + "\nPlease enter a number between 8 and 125.");

  var length = Number(input)
  if(!input)
  {
    alert("Please enter a number.");
    return;
  }
  else if (isNaN(length)){
    alert("Please enter a valid number. "
    + "\nNo letters or special characters allowed.");
    return;
  }
  else if (length < 8 || length > 128)
  {
    alert("Please enter a number value between 8 and 128.");
    return;
  }
  else {
    cUpper = window.confirm("Include uppercase letters?");
    cLower = window.confirm("Include lowercase letters?");
    cNum = window.confirm("Include numbers?");
    cNonNum = window.confirm("Include special characters?");

    if(!cUpper && !cLower
        && !cNum && !cNonNum)
    {
      alert("At least one area is required.");
      return;
    }
  }

  input = [];
  if(cUpper)
  {
    input = input.concat(aUppercase);
  }
  if(cLower)
  {
    input = input.concat(aLowercase);
  }
  if(cNum)
  {
    input = input.concat(aNum);
  }
  if(cNonNum)
  {
    input = input.concat(aSpecial);
  }

  gPassword = [];
  for (var i = 0; i < length; i++)
  {
    gPassword.push(input[Math.floor(Math.random() * input.length)]);
  }
  return gPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
