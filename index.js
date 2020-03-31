
function isUpperCase(password, index){
  return password.charCodeAt(index) >= 65 && password.charCodeAt(index) <= 90
}
  
function isLowerCase(password, index){
  return password.charCodeAt(index) >= 97 && password.charCodeAt(index) <= 122
}

function isNumeric(password, index){ 
  return !isNaN(password[index])
}

function validatePassword(password) {
  if(password.length < 8) return false

  let upper = 0
  let lower = 0
  let numeric = 0
  let special = 0

  for(let i = 0; i < password.length; i++){
    if(isUpperCase(password, i)){
      upper++ 
    } else if(isLowerCase(password, i)) {
      lower++
    } else if (isNumeric(password, i)) {
      numeric++
    } else {
      special++
    }
  }
     
  return upper > 0 && lower > 0 && numeric > 0 && special > 0 
}
 


module.exports =  validatePassword 
 