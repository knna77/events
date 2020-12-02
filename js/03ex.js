//Guardem en la variable email el element que te  com a id mail
let email = document.getElementById('mail');
//ens assegurem que quan carreguem la pàgina el cursor del ratolí
//Estiga dins del input
email.focus();
//Guardem en la variable passw el element que te  com a id pass
let passw = document.getElementById('pass');
let mensaje1 = document.getElementById('mensaje1');
let mensaje2 = document.getElementById('mensaje2');

email.addEventListener('blur', function (ev) {
  let exp = /^[^@]+@[^@]+\.[a-zA-Z0-9_]{2,}$/;
  if (exp.test(email.value) == false) {
    ev.preventDefault();
    mensaje1.innerHTML = '<p>Error: Correo no válido</p>';
    email.addEventListener('click', function (ev) {
      mensaje1.innerHTML = '';
      ev.preventDefault();
    });
  }
});
passw.addEventListener('blur', function (ev) {
  let exp = /^[A-Za-z0-9_!@#$%^&*()_+]{8,10}$/;
  if (exp.test(passw.value) == false) {
    ev.preventDefault();
    mensaje2.innerHTML =
      '<p>La contraseña debe tener entre  8 y 10 carácteres</p>';
    passw.addEventListener('click', function (ev) {
      mensaje2.innerHTML = '';
    });
  }
});
