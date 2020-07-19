
var password = document.getElementById('password');
var eye = document.getElementById('eye');
function showHide() {
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        eye.classList.add('fa-eye-slash')
    }
    else {
        password.setAttribute('type', 'password');
        eye.classList.remove('fa-eye-slash')
    }
}

