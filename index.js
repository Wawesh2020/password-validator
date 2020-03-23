// eslint-disable-next-line no-unused-vars 
function validatePassword(password) { 

  function length(password) {
    if(password.length < 8) {
      return false
    }
    else {
      return true 
    }
  }
  function upperCase(password){ 
    if (password.toUpperCase() != password) {
  
      return true
    }
    else {
      return false
    }
  }
  function LowerCase(password){
    if (password.toLowerCase() != password) 
    {
      return true
    }
    else
    {
      return false
    }
  }

  function character (password){
    if (password.includes('!', '#', '$', '@')){
      return true
    }
    else {
      return false 
    }
    
  }

  function integer (password){
    if (password.includes('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')){
      return true
    }
    else {
      return false
    }
  }

  if (integer(password) && character(password) && LowerCase(password) && upperCase(password) && length(password)){
    return true
  }
  else {
    return false 
  }

}


module.exports = validatePassword 