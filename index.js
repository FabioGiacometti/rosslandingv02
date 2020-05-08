function hidenav() {
  // if(screen.width <= 820px) {
  let navToggle = document.getElementById("nav-toggle");
  // }
  navToggle.click();
}

function submitForm(event) {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    if (validation()) {
        // document.getElementById("contact_form").submit().preventDefault()
        document.getElementById("contact_form").addEventListener("click", function(event){
            event.preventDefault()
        })
        console.log(nombre)
        alert(
        "Thankyou, " + nombre + ", your message will be replied ASAP!"
    );
  }
}

function submitFormEs(event) {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    if (validationEs()) {
        // document.getElementById("contact_form").submit().preventDefault()
        document.getElementById("contact_form").addEventListener("click", function(event){
            event.preventDefault()
        })
        console.log(nombre)
        alert(
        "Gracias, " + nombre + ", tu mensaje ha sido enviado y sera respondido a la brevedad!"
    );
  }
}


function validation() {
  var name = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (name === "" || email === "") {
    alert("Please fill all fields...!!!!!!");
    return false;
  } else if (!email.match(emailReg)) {
    alert("Invalid Email...!!!!!!");
    return false;
  } else {
    return true;
  }
}

function validationEs() {
    var name = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name === "" || email === "") {
      alert("Por favor, rellene todos los campos");
      return false;
    } else if (!email.match(emailReg)) {
      alert("Email Invalido!");
      return false;
    } else {
      return true;
    }
  }

// Email.send({
//     Host : "smtp.yourisp.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );

//slider

const slider = document.querySelector('.timeline')
let isDown = false;
let startX
let scrollLeft

slider.addEventListener('mousedown', (e)=>{
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
})
slider.addEventListener('mouseleave', ()=>{
  isDown = false;
  slider.classList.remove('active');
})
slider.addEventListener('mouseup', ()=>{
  isDown = false;
  slider.classList.remove('active');
})
slider.addEventListener('mousemove', (e)=>{
  if(!isDown) return
  e.preventDefault()
  const x = e.pageX - slider.offsetLeft
  // console.log({x, startX})
  const walk = (x - startX) * 1.3
  // console.log(walk)
  slider.scrollLeft = scrollLeft - walk
  console.log(scrollLeft)
})

function navigateRight(){
  slider.scrollLeft += 500 
}
function navigateLeft(){
  slider.scrollLeft = 0 
}

