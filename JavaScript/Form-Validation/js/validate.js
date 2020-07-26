var btnSubmit = document.getElementById("btn-submit");
var username = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("pwd");
var password2 = document.getElementById("cpwd");

var errorUser = document.getElementById("errorUser");
var errorEmail = document.getElementById("errorEmail");
var errorPass = document.getElementById("errorPwd");
var errorPass2 = document.getElementById("errorCpwd");

btnSubmit.addEventListener('click', function(e) {	

	const userValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

  
		if(userValue === '' || userValue.length <= 3) 
		{
           
			userName.style.border = "1px solid #e74c3c";				  
			errorUser.style.display = "block";	
			errorUser.style.color = "#e74c3c";				
		} 
		else 
		{
			userName.style.border = "1px solid #2ecc71";							
			errorUser.style.visibility = "hidden";	
			errorUser.style.color = "#2ecc71";			
		}


		if(emailValue === '') 
		{
			email.style.border = "1px solid #e74c3c";				  
			errorEmail.style.display = "block";	
			errorEmail.style.color = "#e74c3c";	
		} 
		else if(!isEmail(emailValue)) {
			email.style.border = "1px solid #e74c3c";				  
			errorEmail.style.display = "block";	
			errorEmail.style.color = "#e74c3c";	
		}
		else 
		{
			email.style.border = "1px solid #2ecc71";							
			errorEmail.style.display = "none";
			errorEmail.style.color = "#2ecc71";	
		}

		function isEmail(email) 
		{
			return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
		}



		if(passwordValue === '' || passwordValue.length <= 6) 
		{
			password.style.border = "1px solid #e74c3c";				  
			errorPass.style.display = "block";
			errorPass.style.color = "#e74c3c";	
		} 
		else 
		{
			password.style.border = "1px solid #2ecc71";				  
			errorPass.style.display = "none";	
			errorPass.style.color = "#2ecc71";	
		}
			
		if(password2Value === '' || password2Value.length <= 6) 
		{
			password2.style.border = "1px solid #e74c3c";				  
			errorPass2.style.display = "block";	
			errorPass2.style.color = "#e74c3c";
		} 
		else if(passwordValue !== password2Value) 
		{
			password2.style.border = "1px solid #e74c3c";				  
			errorPass2.style.display = "block";	
			errorPass2.style.color = "#e74c3c";
		} 
		else {
			password2.style.border = "1px solid #2ecc71";				  
			errorPass2.style.display = "none";	
			errorPass2.style.color = "#2ecc71";
		}
});