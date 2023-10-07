let registerPop = document.querySelector("#regi-pop");
let loginPop = document.querySelector("#log-pop");
let form1 = document.querySelector("#form-1");
let form2 = document.querySelector("#form-2");
let form = document.querySelector("form");
let submit = document.querySelector("submit");

function formAnimation() {
  registerPop.addEventListener("click", function () {
    form2.style.opacity = 1;
    form2.style.zIndex = 1;
    form2.style.transform = "translateX(0vw)";
    form1.style.transform = "translateX(-10vw)";
    form1.style.opacity = 0;
  });
  loginPop.addEventListener("click", function () {
    form2.style.opacity = 0;
    form2.style.zIndex = -1;
    form2.style.transform = "translateX(5vw)";
    form1.style.transform = "translateX(0vw)";
    form1.style.opacity = 1;
  });
}

formAnimation();

// form1.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var email = document.querySelector("#email");
//   console.log(email.value);
//   var password = document.querySelector("#password");
//   console.log(password.value);
//   // console.log(form1.querySelector("#form-1>.input>input").value);
//   form1.reset();
// });

// form2.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var username = document.querySelector("#username");
//   console.log(username.value);
//   var email = document.querySelector("#emai");
//   console.log(email.value);
//   var password = document.querySelector("#pass");
//   console.log(password.value);
//   var confirmpassword = document.querySelector("#confirmpassword");
//   console.log(confirmpassword.value);

//   function validatePassword() {
//     if (password.value != confirmpassword.value) {
//       confirmpassword.setCustomValidity("Passwords Don't Match");
//     } else {
//       confirmpassword.setCustomValidity("");
//     }
//   }
//   password.onchange = validatePassword;
//   confirmpassword.onkeyup = validatePassword;
//   // console.log(form2.querySelector("#form-2>.input>input").value);
//   form2.reset();
// });


