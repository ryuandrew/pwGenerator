function generatePassword(){
    //TODO: your code goes here
    var numChar = "0123456789"
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowerChar = "abcdefghijklmnopqrstuvwxyz"
    var specialChar = "!@#$%&*-_~"
    var allPossible = ""
    var chosenPW = ""
    var pwLength = prompt("how long would you like your password to be?");
    
    if (pwLength < 8 || pwLength > 128) {
      alert("must be greater than 7 and less than 129")
      return "error"
    } 

    var upperConfirm = confirm("do you want upper case?")
    var lowerConfirm = confirm("do you want lower case?")
    var numericConfirm = confirm("do you want to include numbers?")
    var specialConfirm = confirm("do you want to include special characters?")

    if (upperConfirm === false && lowerConfirm === false && numericConfirm === false && specialConfirm === false) {
      alert("must select ok on one criteria")
      return "error"
    }
    if (upperConfirm) {
      allPossible = allPossible + upperChar
    }
    if (lowerConfirm) {
      allPossible = allPossible + lowerChar
    }
    if (numericConfirm) {
      allPossible = allPossible + numChar
    }
    if (specialConfirm) {
      allPossible = allPossible + specialChar
    }

    for (var i = 0; i < pwLength; i++) {
      var randomIndex = Math.floor(Math.random() * allPossible.length)
      var randomChar = allPossible[randomIndex]
      chosenPW = chosenPW + randomChar 
    }
  
    return chosenPW
  }

  // "2" string
  // 2 number
  // [] array
  // {} object
  

  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  


  //alert(show info) confirm(true, false), prompt(box to input)