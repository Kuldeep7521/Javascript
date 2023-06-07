
function checkName() {
    let name = document.getElementById('name').value;
    let name_error = document.getElementById('name_error');

    if (name == "") {
        name_error.innerHTML = "Please enter the name"
    }
    else {
        name_error.innerHTML = ""
    }

}

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
localStorage.setItem("email",email)
function checkMobile() {
    let mobile = document.getElementById('mobile').value;
    let mobile_error = document.getElementById('mobile_error');

    if (mobile == "") {
        mobile_error.innerHTML = "Please enter the Mobile No"
    }
    else {
        mobile_error.innerHTML = ""
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


// // function checkuserEmail(){
// //     let email =document.getElementById('email').value;
// //     let email_error = document.getElementById('email_error');
// //     const users = window.localStorage.getItem('users');
// //     let prevUsers = JSON.parse('users');

// //     if(email.value == user.email){
// //         email_error.innerHTML = "Please Enter a Diffirent Email"
// //         return false
// //     }
// //     else{
// //         email_error.innerHTML =""
// //         return true
// //     }
// }

// function confirmPsssword() {
//     let password = document.getElementById('password').value;
//     let confirmPassword = document.getElementById('confirm_Password').value;
//     let confirmPassword_error = document.getElementById('confirmPassword_error');
//     if (confirmPassword == "") {
//         confirmPassword_error.innerHTML == "Enter Password Again"

//     }
//     else if (!confirmPassword == password) {
//         confirmPassword_error.innerHTML = "Password dont Match"

//     }
//     else if (confirmPassword == password) {
//         confirmPassword_error = ""
//     }
// }


function validate() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile =document.getElementById('mobile').value;
    let password = document.getElementById('Password').value;
    // let confirmPsssword = document.getElementById('confirm_Password').value;

    let name_error = document.getElementById('name_error');
    let email_error = document.getElementById('email_error');
    let mobile_error = document.getElementById('mobile_error');
    let password_error = document.getElementById('Password_error')
    const user ={
        name:name,
        email:email,
        mobile:mobile,
        password:password
    }
    const users = window.localStorage.getItem('users');

    const prevUsers = JSON.parse(users)
    localStorage.setItem("email",email.value)
    
   
  
    // let confirmPassword_error = document.getElementById('confirmPassword_error')
  
    

    if (name == "" && email == "" && password == "" && mobile == "") {
        name_error.innerHTML = "Please enter the name"
        email_error.innerHTML = "Please enter the email"
        mobile_error.innerHTML = "Please enter the Mobile No"
        password_error.innerHTML = "Please enter the password"
        

        // confirmPassword_error.innerHTML = "Confirm your Password"
        return false
    }
    else if (name == "") {
        name_error.innerHTML = "Please enter the name"
        email_error.innerHTML = ""
        mobile_error.innerHTML = ""
        password_error.innerHTML = ""
        return false
    }
    else if (email == "") {
        name_error.innerHTML = ""
        email_error.innerHTML = "Please enter the email"
        mobile_error.innerHTML = ""
        password_error.innerHTML = ""
        
        return false
    }

    
    else if (mobile == "") {
        name_error.innerHTML = ""
        email_error.innerHTML = ""
        mobile_error.innerHTML = "Please enter the Mobile No"
        password_error.innerHTML = ""


        return false
    }
    else if (password == "") {
        name_error.innerHTML = ""
        email_error.innerHTML = ""
        mobile_error.innerHTML = ""
        password_error.innerHTML = "Please enter the password"
        return false
    }
     else if (users == null) {
        const arr = [user]
        window.location.href = "/Login.html"
        window.localStorage.setItem('users', JSON.stringify(arr))
        
        
    return true
            
    }
    
 
    else {
        const arr = [...prevUsers, user]
        
        window.localStorage.setItem('users', JSON.stringify(arr))
        // verifyEmail(`${email}`)
        window.location.href = "/Login.html"
       
    
        return true
    }
    
}



// function findName(){
//     let email = document.getElementById('email').value;
//     let email_error = document.getElementById('email_error');
//     localStorage.setItem("email",email)
//     for (var index = 0; index < users.length; index++) {
//         if (users[index].email === `${email}`) {
//             email_error.innerHTML ="email is already registered"
//             }
//             else{
//                 email_error.innerHTML = ""
//             }
//      }

// }
// function verifyEmail(email){
//     for (var index = 0; index < users.length; index++) {
//         if (users[index].email === `${email}`) {
//            let login_name = document.getElementById("email_error").innerHTML = `Email Already Registerd`
//            return false
//         }
//      }

// }


 




// function register(){
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let mobile =document.getElementById('mobile').value;
//     let password = document.getElementById('Password').value;

//     // localStorage.setItem("name",name)
//     // localStorage.setItem("email",email)
//     // localStorage.setItem("mobile",mobile)
//     // localStorage.setItem("Password",password)
//     const user ={
//         name:name,
//         email:email,
//         mobile:mobile,
//         password:password
//     }
//     const users = window.localStorage.getItem('users');

//     const prevUsers = JSON.parse(users)

//     if (users == null) {
//         const arr = [user]

//         window.localStorage.setItem('users', JSON.stringify(arr))
//         // window.location.href = '/login.html'

//     }
//     else {
//         const arr = [...prevUsers, user]
//         window.localStorage.setItem('users', JSON.stringify(arr))
//         return false
//     }

// }



   

    

//     // window.localStorage.setItem('name', name);
//     // window.localStorage.setItem('password', password)




