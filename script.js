const myForm = document.querySelector(".myform");
const name = document.getElementById("name-input");
const lastname = document.getElementById("last-name-input");
const adress = document.getElementById("address-input");
const email = document.getElementById("email-input");
const password = document.getElementById("password-input");
const regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexPassword = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{8,}$/
//getElementById return the element
//querySelector return first element with quert(id or class )
//getElmentByClassName , ... return nodelist

myForm.addEventListener("submit", e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // console.log("name" , name.value)
  // console.log("lastname" , lastname.value)
  // console.log("adress" , adress.value)
  // console.log("email" , email.value)
  // console.log("password" , name.value)

  if (
    name.value === "" ||
    lastname.value === "" ||
    adress.value === "" ||
    email.value === "" ||
    password.value === ""
  )
    alert("infos are required");
 
  //Email validation
    if(!regexEmail.test(email.value))
    alert("E-mail is not valid")
  //Password Validation (min lengtg : 8 , char , number , at least one uppercase letter)
    if(!regexPassword.test(password.value))
    alert("Password is not valid")
  else alert("Success");
}
