
var strErrorMsg;

function validate(){
        
  strErrorMsg="";
        
  notEmpty(document.getElementById('f_name'), 'Enter your first name.' );
  isAlphabet(document.getElementById('l_name'), 'Enter your last name.');
  isGenderSelected(document.getElementById('gender'), 'Select a gender.');

  isNumber(document.getElementById('s_num'), 'Street number must contain only numbers.');
  notEmpty(document.getElementById('s_name'), 'Enter your street name.');
  isAlphabet(document.getElementById('c_name'), 'Enter your city name.');
  isStateSelected(document.getElementById('state'), 'Please select a state.');
  isZipCode(document.getElementById('zip'), 'Zip code must be 5 digits.');
  isPhoneNumber(document.getElementById('a_code'), document.getElementById('m_num'), document.getElementById('num'), 'Telephone number format should be xxx-xxx-xxxx.');
  notEmpty(document.getElementById('suggest'), 'Enter your suggestion.');

  if (strErrorMsg !== "") {
    alert("Errors encountered:\n" + strErrorMsg);
    return false;
  } else {
    alert("Form is ready for submission.");
    return true;
  }
}
        
function notEmpty(elem , helperMsg){
  if(elem.value == ""){
    strErrorMsg += helperMsg+"\n";
  }
  else{
    return true;
  }
}

function isAlphabet(elem, helperMsg)
{
    var alphaExp = /^[a-zA-Z]+$/;
  if(!(elem.value.match(alphaExp))) {
    strErrorMsg+= helperMsg+"\n";
  }
  else{
    return true;
  }
  
}

function isGenderSelected(elem, helperMsg) {
    len=elem.length-1;
    chkvalue='';
    for(i=0; i<=len; i++)
    {
    if(elem[i].checked)chkvalue=elem[i].value;
    }
    if(chkvalue=='')
      {
      strErrorMsg += helperMsg + "\n";
      }
    else{
      return true;
      }
}

function isNumber(elem, helperMsg) {
  var numberExp = /^[0-9]+$/;
  if (!(elem.value.match(numberExp))) {
      strErrorMsg += helperMsg + "\n";
    }
    else{
      return true;
    }
}

function isStateSelected(stateElem, helperMsg) {
  if (stateElem.value == "de") { 
      strErrorMsg += helperMsg + "\n";
    }
    else{
      return true;
    }
}

function isZipCode(zipElem, helperMsg) {
  var zipExp = /^\d{5}$/;
  if (!(zipElem.value.match(zipExp))) {
      strErrorMsg += helperMsg + "\n";
    }
    else{
      return true;
    }
}

function isPhoneNumber(areaCodeElem, middleNumElem, lastNumElem, helperMsg) {
  var phoneExp = /^\d{3}$/;
  var lastPhoneExp = /^\d{4}$/;
  if (!(areaCodeElem.value.match(phoneExp) && middleNumElem.value.match(phoneExp) && lastNumElem.value.match(lastPhoneExp))) {
      strErrorMsg += helperMsg + "\n";
    }
    else{
      return true;
    }
}