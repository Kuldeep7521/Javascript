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

function checkCity() {
    let city = document.getElementById('city').value;
    let city_error = document.getElementById('city_error');

    if (city == "") {
        city_error.innerHTML = "Please Select the City "
    }
    else {
        city_error.innerHTML = ""
    }
}

function checkTech() {
    let technology = document.getElementById('technology').value;
    let technology_error = document.getElementById('technology_error');

    if (technology == "") {
        technology_error.innerHTML = "Please Select the Technology "
    }
    else {
        technology_error.innerHTML = ""
    }
}



function validate() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let city = document.getElementById('city').value;
    let technology = document.getElementById('technology').value;


    let name_error = document.getElementById('name_error');
    let email_error = document.getElementById('email_error');
    let mobile_error = document.getElementById('mobile_error');
    let city_error = document.getElementById('city_error');
    let technology_error = document.getElementById('technology_error');


    if (name == "" && email == "" && mobile == "" && city == "" && technology == "") {
        name_error.innerHTML = "Please enter the name"
        email_error.innerHTML = "Please enter the email"
        mobile_error.innerHTML = "Please enter the Mobile No"
        city_error.innerHTML = "Please Select the City "
        technology_error.innerHTML = "Please Select the Technology "
        return false
    }
    else if (name == "") {
        name_error.innerHTML = "Please enter the name"
        email_error.innerHTML = ""
        mobile_error.innerHTML = ""
        city_error.innerHTML = " "
        technology_error.innerHTML = ""


        return false
    }
    else if (email == "") {
        name_error.innerHTML = ""
        email_error.innerHTML = "Please enter the email"
        mobile_error.innerHTML = ""
        city_error.innerHTML = " "
        technology_error.innerHTML = ""

        return false
    }
    else if (mobile == "") {
        name_error.innerHTML = ""
        email_error.innerHTML = ""
        mobile_error.innerHTML = "Please enter the Mobile No"
        city_error.innerHTML = " "
        technology_error.innerHTML = ""

        return false
    }
    else if (city == "") {
        name_error.innerHTML = ""
        email_error.innerHTML = ""
        mobile_error.innerHTML = ""
        city_error.innerHTML = "Please Select the City"
        technology_error.innerHTML = ""
            return false

    }
    else if (technology == "") {
        name_error.innerHTML = ""
        email_error.innerHTML = ""
        mobile_error.innerHTML = ""
        city_error.innerHTML = " "
        technology_error.innerHTML = "Please Select the Technology"
return false
    }

    else {
        return true
    }

}