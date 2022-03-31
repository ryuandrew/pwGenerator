function generatePassword(){
    //TODO: your code goes here
    //assign variables
    var numChar = "0123456789"
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowerChar = "abcdefghijklmnopqrstuvwxyz"
    var specialChar = "!@#$%&*-_~"
    //set an empty string variable
    var allPossible = ""
    var chosenPW = ""
    //store the number entered to a variable
    var pwLength = prompt("how long would you like your password to be?");
    
    //a message pops up if the condition is not met
    if (pwLength < 8 || pwLength > 128) {
      alert("must be greater than 7 and less than 129")
      return "error"
    } 

    //create variables to ask the user to select the options yes or no to each question
    var upperConfirm = confirm("do you want upper case?")
    var lowerConfirm = confirm("do you want lower case?")
    var numericConfirm = confirm("do you want to include numbers?")
    var specialConfirm = confirm("do you want to include special characters?")

    //a message pops up if the condition is not met
    if (upperConfirm === false && lowerConfirm === false && numericConfirm === false && specialConfirm === false) {
      alert("must select ok on one criteria")
      return "error"
    }
    //if a user selects yes to include upper case, then concatenate the variable upperChar into allPossible which starts as an empty string. If no is selected, then move on to the next statement.
    if (upperConfirm) {
      allPossible = allPossible + upperChar
    }
    //if a user selects yes to include lower case, then concatenate the variable lowerChar into allPossible from the above statement. We are concatenating to the variable allPossible from the above statement. If no is selected, then move on to the next statement.
    if (lowerConfirm) {
      allPossible = allPossible + lowerChar
    }
    //if a user selects yes to include numbers, then concatenate the variable numChar into allPossible from the above statement. We are concatenating to the variable allPossible from the above statement. If no is selected, then move on to the next statement.
    if (numericConfirm) {
      allPossible = allPossible + numChar
    }
    //if a user selects yes to include spcial characters, then concatenate the variable specialChar into allPossible from the above statement. We are concatenating to the variable allPossible from the above statement. If no is selected, then move on to the next statement.
    if (specialConfirm) {
      allPossible = allPossible + specialChar
    }

    //create a new variable, randomIndex, to store a randomly generated number that is less than the length of our defined variable, allPossible. Then, create another variable, randomChar, to select a character of the index number generated from randomIndex variable. Then, from the initially defined empty string variable, chosenPW, we start concatenating the characters we get from randomChar variable. Repeat until we hit i < pwLength. Now, we have generated a password randomly chosen from the string of conditions selected in allPossible variable. 
    for (var i = 0; i < pwLength; i++) {
      var randomIndex = Math.floor(Math.random() * allPossible.length)
      var randomChar = allPossible[randomIndex]
      chosenPW = chosenPW + randomChar 
    }
  
    return chosenPW
  }

  //Case:
  //        pwLength = 10
  //        upperConfirm = yes
  //        lowerConfirm = yes
  //        numbericConfirm = yes
  //        specialConfirm = yes
  //        allPossible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*-_~"
  //        when i=0, randomIndex = rounddown(random integer generated between 0 and 1 * 72). 72 is the length of the variable allPossible
  //        if a random integer generated is 0.13, then 0.13 * 72 = 9.36. rounding down makes it 9.
  //        randomChar = the 9th index of the variable allPossible, which is 8.
  //        chosenPW = "" + 8. which is 8.
  //        repeat the steps in line 64 through 68 until i = 9.
  //        the value we get from each iteration will be added on to the variable chosenPW which starts at 8.
  //        when the forloop ends at i = 9, we will have a variable chosenPW with 10 indexes, such as 8@x7SWJG32.



  //alert(show info) confirm(true, false), prompt(box to input)
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
  


