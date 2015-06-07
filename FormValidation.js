window.onload = init;

function init(){
	document.getElementsByTagName("form")[0].onsubmit = function(){return checkEverything();};
}

function check(){
	var response = checkText("nameinput");

	if (!response){
		document.getElementsByClassName("errormsg")[0].innerHTML = "Name cannot be empty";
		document.getElementsByClassName("errormsg")[0].style.display = "block";
	} else {
		document.getElementsByClassName("errormsg")[0].style.display = "none";
	}

	return response;

}

function checkEmail(){
	var response = checkText("emailinput");

	if (!response){
		document.getElementsByClassName("errormsg")[1].innerHTML = "Email cannot be empty";
		document.getElementsByClassName("errormsg")[1].style.display = "block";
	} else {
		document.getElementsByClassName("errormsg")[1].style.display = "none";
	}

	if (response){
		var emailText = document.getElementById("emailinput");
		var forChecking = emailText.value;
		var position = forChecking.indexOf("@");
		var positionTwo = forChecking.indexOf(".");
		if (position == -1 || positionTwo == -1){
			document.getElementById("emailinput").style.background = "#ff6666";
			response = false;
			if (!response){
				document.getElementsByClassName("errormsg")[1].innerHTML = "Invalid Email";
				document.getElementsByClassName("errormsg")[1].style.display = "block";
			} else {
				document.getElementsByClassName("errormsg")[1].style.display = "none";
			}
		} 
	}
	return response;
}

function checkMessage(){
	var response = checkText("messageinput");
	if (!response){
		document.getElementsByClassName("errormsg")[2].innerHTML = "Message cannot be empty";
		document.getElementsByClassName("errormsg")[2].style.display = "block";
	} else {
		document.getElementsByClassName("errormsg")[2].style.display = "none";
	}
	
	return checkText("messageinput");
}

function checkText(inputId){
	var inputText = document.getElementById(inputId);
	var forChecking = inputText.value.trim();
	var checkResponse = (forChecking.length !== 0);
	if (checkResponse){
		document.getElementById(inputId).style.background = "white";
		return true;
	} else {
		document.getElementById(inputId).style.background = "#ff6666";
		return false;
	}
}

function restore(inputIdTwo){
	document.getElementById(inputIdTwo).style.background = "white";
}

function checkEverything(){
	var nameResponse = check();
	var emailResponse = checkEmail();
	var messageResponse = checkMessage();

	if (nameResponse && emailResponse && messageResponse){
		return true;
	} else {
		return false;
	}
}