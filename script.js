// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericChar = [1,2,3,4,5,6,7,8,9,0]
var alphaChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specialChar = ['!','@','#','$','%','^','&','*']
var capitalChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Length of password with criteria if too long/short
  var length = window.prompt("Enter your password length, 8 - 128 Characters");
  if (length > 128) {
    window.alert("Password is too long");
    return;
  } else if (length < 8) {
    window.alert("Password is too short");
    return;
  }

  // Boolean prompts for each unique character in password
  var hasNumbers = window.confirm("Do you want numbers in your password?");

  var hasSymbols = window.confirm("Do you want symbols in your password?");

  var hasLowercase = window.confirm("Do you want lowercase letters in your password?");

  var hasUppercase = window.confirm("Do you want uppercase letters in your password?");

  // Testing answer validation
  // console.log(length + " numbers: " + hasNumbers + " symbols: " + hasSymbols + " lowercase: " + hasLowercase + " uppercase: " + hasUppercase);

  // If no characters are selected the password cannot generate
  if (!hasNumbers && !hasLowercase && !hasSymbols && !hasUppercase) {
    window.alert("You password will have no characters!")
    return
  }

  // Create the array based off answered questions
  var usedChars = [
    ...(hasNumbers ? numericChar : []),
    ...(hasLowercase ? alphaChar : []),
    ...(hasSymbols ? specialChar : []),
    ...(hasUppercase ? capitalChar : []),
  ];
  // Testing new array
  // console.log(usedChars);

  // Setting variable to nothing
  var password = ""

  for(let i = 0; i <length; i++) {
    var generated = Math.floor(Math.random() * usedChars.length);
    password += usedChars[generated]
  }
  // Returning proper variable
  return password
}
