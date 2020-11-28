let imagen = document.getElementById('imagen');
function isKeyPressed(event) {
  console.log('Funcion');
  console.log('event.altKey = ' + event.altKey);
  console.log('event.keyCode = ' + event.keyCode);
  if (event.altKey && event.keyCode == 123) {
    // alert('The f12 key was pressed!');
    imagen.style.backgroundImage = "url('https://source.unsplash.com/random')";
  }
}
console.log('Inicio');
elementH2 = document.getElementById('imagen');
document.addEventListener('keyup', isKeyPressed);
