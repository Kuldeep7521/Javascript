// let users = window.localStorage.getItem('users')
// users = JSON.parse(users)
// // const userData = users.filter(data => data.email == email && data.password == password)




// // let html = "";

// // users.map((users) => {
// //     return html += `<div class=" bg-white  flex justify-center flex-col items-center w-fit m-2 p-2">

// //     <div class="bg-blue-100 p-4">
        

// //         <div class="text-center">
// //             <h2 id="user_name"class="text-2xl">${users.name}</h2>

// //             <p id="user_email"class="px-5">${users.email}</p>
           
// //         </div>
// //     </div>`;
// // })

// //     document.getElementById('main').innerHTML = html;
// let Uname = window.localStorage.getItem('email');
// document.getElementById("user").innerHTML = `Welcome ${email.value}`
// console.log(email);
let email = window.localStorage.getItem(`email`)
let users = window.localStorage.getItem('users')
users = JSON.parse(users)

// const userData = users.filter(data => data.email == email && data.password == password)

let login_email = document.getElementById('h2').innerHTML =`Email: ${email}`;

// let login_mobile = document.getElementById("h3").innerHTML = `Mobile No:${users[0].mobile}`


function findName(email){
    for (var index = 0; index < users.length; index++) {
        if (users[index].email === `${email}`) {
           let login_name = document.getElementById("h1").innerHTML = `Welcome:${users[index].name}`
           console.log(`${users[index].name}`)
           let login_mobile = document.getElementById("h3").innerHTML = `Mobile No:${users[index].mobile}`
        }
     }

}
findName(`${email}`)


// function findMobile(email){
//     for (var index = 0; index < users.length; index++) {
//         if (users[index].email === `${email}`) {
           
//         }
//      }

// }
// findName(`${email}`)

// const user ={
//     name:name,
//     email:email,
//     mobile:mobile,
//     password:password
// }
// const users = window.localStorage.getItem('users');

//     const prevUsers = JSON.parse(users)
//     const arr = [user]

//     window.localStorage.setItem('users', JSON.stringify(arr))
//     console.log(arr);
  
    
    // let users = window.localStorage.getItem('users')
    // users = JSON.parse(users)

    
