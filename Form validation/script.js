var numberInput = document.getElementById("number");
var validationMessage = document.getElementById("validationMessage");

/*In this function, we verify that the number 
the user inputs is in the specified range.
 If it isn't, we display an error message and return false. 
 Returning false prevents the form from sending the data. 
 Otherwise, we return true and the form is submitted.*/
 
function verify(){
  if(numberInput.value < 40 || numberInput.value > 90){
    validationMessage.style.display = "block";
    return false;
  }
  else if(isNaN(numberInput.value)){
    nanMessage.style.display = "block";
  }
  else{
    validationMessage.style.display = "none";
    return true;
  }
}

numberInput.onchange = function(){
  if(isNaN(numberInput.value)){
    nanMessage.style.display = "block";
  }
  else{
    nanMessage.style.display = "none";
  }
}