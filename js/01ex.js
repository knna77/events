let imagen = document.getElementById('imagen');
//Aquesta funció captura un event de tecla o tecles(de teclat)polsada/es
function isKeyPressed(event) {
  //Concatene  en un and una polsació de la tecla alt i una polsació de la tecla F12 que equival al codi 123
  if (event.altKey && event.keyCode == 123) {
    //cridem mitjançant un ipervincle una image(aleatòria) que posem com fons del element h1 (html)
    imagen.style.backgroundImage = "url('https://source.unsplash.com/random')";
  }
}
//Cridem a la funció isKeyPressed quan soltem les tecles
document.addEventListener('keyup', isKeyPressed);
