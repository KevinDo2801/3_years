var real_password = "01BC0FC6";
var password = document.forms['form']['password'];

var pass_error = document.getElementById('pass_error');

password.addEventListener('textInput', pass_Verify);

function pass_Verify(){
	if (password.value === real_password) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}else 
	{
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
}

