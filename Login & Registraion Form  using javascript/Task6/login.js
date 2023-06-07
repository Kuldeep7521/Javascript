function checkEmail() {
    let email = document.getElementById('email').value;
    let email_error = document.getElementById('email_error');
    let p = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/

    if (email == "") {
        email_error.innerHTML = "Please enter the email"
    }
    else if (!email.match(p)) {
        email_error.innerHTML = "Please enter the email"
    }
    else {
        email_error.innerHTML = ""
    }

}

function checkPass() {
    let password = document.getElementById('Password').value;

    let password_error = document.getElementById('Password_error');
    let p = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    if (password == "") {
        password_error.innerHTML = "Please enter the password"
    }
    else if (!password.match(p)) {

        password_error.innerHTML = "Please enter the password"
    }
    else {
        password_error.innerHTML = ""
    }

}




function validate() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('Password').value;

    let email_error = document.getElementById('email_error');
    let password_error = document.getElementById('Password_error')
    let users = window.localStorage.getItem('users')
    users = JSON.parse(users)
    const userData = users.filter(data => data.email == email && data.password == password)

    localStorage.setItem("email",email)
    // localStorage.setItem("Password",password)
    // localStorage.setItem("name",name)
    // localStorage.setItem("mobile",mobile)

    if (email == "" && password == "") {

        email_error.innerHTML = "Please enter the email"
        password_error.innerHTML = "Please enter the password"
        return false
    }
    else if (email == "") {

        email_error.innerHTML = "Please enter the email"
        password_error.innerHTML = ""
        return false
    }
    else if (password == "") {

        email_error.innerHTML = ""
        password_error.innerHTML = "Please enter the password"
        return false
    }
    else if (userData.length > 0) {
       
        document.getElementById("heading").innerHTML = `Welcome ${userData[0].name}`
        
    
        window.location.href = '/Home.html'
    }
    else {
        document.getElementById("heading").innerHTML = `check email and password`
    }
    return false
 }


// let username = document.getElementById('email').value;

    
    // else if(users.email == email && users.password == password) {
    //     one();
    //      document.getElementById('heading').innerHTML = `Welcome ${user.name}`
    //      return true
          
    //     }
    //     else {
            
    //         document.getElementById('heading').innerHTML = `check name and password`
    //         return false
        
    //     }



// function chagePage(){
//     document.querySelector('submit')
//     .addEventListener('click',() =>{
//         window.location.href = '/Home.html'
//     })
// }

