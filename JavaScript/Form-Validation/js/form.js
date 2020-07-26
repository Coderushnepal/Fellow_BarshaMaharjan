var createform = document.getElementById("form");
//createform.setAttribute("onsubmit","myfun()");

// Heading of Form
var heading = document.createElement('h1'); 
heading.innerHTML = "Resigter with us ";
createform.appendChild(heading);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);


// Create Label for Name Field
var namelabel = document.createElement('label'); 
namelabel.innerHTML = "Username"; // Labels
createform.appendChild(namelabel);

// Create Input Field for Name
var inputelement  = document.createElement('input'); 
inputelement.setAttribute("id", "userName");
inputelement.setAttribute("type", "text");
inputelement.setAttribute("placeholder", "Username");
createform.appendChild(inputelement);

// Error msg for name
var errormsg = document.createElement("p");
errormsg.setAttribute("id", "errorUser");
    errormsg.style.display = "none";    
    errormsg.innerHTML = "Username must be at least 3 characters";      
    createform.appendChild(errormsg);


var linebreak = document.createElement('br');
createform.appendChild(linebreak);

// Create Label for E-mail 
var emaillabel = document.createElement('label'); 
emaillabel.innerHTML = "Email";
createform.appendChild(emaillabel);



// Create Input Field for E-mail
var emailelement = document.createElement('input'); 
emailelement.setAttribute("type", "email");
emailelement.setAttribute("id", "email");
emailelement.setAttribute("placeholder", "Enter Email");
createform.appendChild(emailelement);

// Error msg for email
var erroremail = document.createElement("p");  
    erroremail.style.display = "none"; 
    erroremail.setAttribute("id", "errorEmail"); 
    var txtEmail = document.createTextNode("Invalid Email");  
    erroremail.appendChild(txtEmail);
    createform.appendChild(erroremail); 

var linebreak = document.createElement('br');
createform.appendChild(linebreak);


// Create Label for password 
var passwordlabel = document.createElement('label'); 
passwordlabel.innerHTML = "Password";
createform.appendChild(passwordlabel);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

//input field
var passwordelement = document.createElement('input');
passwordelement.setAttribute("type", "password");
passwordelement.setAttribute("id", "pwd");
passwordelement.setAttribute("placeholder", "Enter Password");
createform.appendChild(passwordelement);

// Error msg for password
    var para = document.createElement("p");
    para.style.display = "none";
    para.setAttribute("id", "errorPwd"); 
    var txtPara = document.createTextNode("Password must be atleast 6 characters");  
    para.appendChild(txtPara);
    createform.appendChild(para); 

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

// label confirm password
var cpwdlabel = document.createElement('label'); 
cpwdlabel.innerHTML = "Confirm password";
createform.appendChild(cpwdlabel);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

// input confirm password
var passwordelement2 = document.createElement('input');
passwordelement2.setAttribute("type", "password");
passwordelement2.setAttribute("id", "cpwd");
passwordelement2.setAttribute("placeholder", "Confirm Password");
createform.appendChild(passwordelement2);

// error msg confrim password
    var error2 = document.createElement("p");    
    error2.style.display = "none"; 
    error2.setAttribute("id", "errorCpwd"); 
    var txtParaPass2 = document.createTextNode("Password is did not match");  
    error2.appendChild(txtParaPass2);
    createform.appendChild(error2); 

    
var linebreak = document.createElement('br');
createform.appendChild(linebreak);


var btn = document.createElement("button");
    btn.innerHTML = "Submit";
    btn.style.display = "block";
    btn.setAttribute("id", "btn-submit");
    btn.setAttribute("type", "submit");    
createform.appendChild(btn);