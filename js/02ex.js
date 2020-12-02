//referències a elements del html per id
const draggable = document.getElementById('drag');
const dropable = document.getElementById('drop');
//quan arrastrenm el div 1
draggable.addEventListener('drag', () => {
  draggable.style.opacity = '50%';
});
//quan soltem el div 1
draggable.addEventListener('dragend', () => {
  draggable.style.opacity = '100%';
});
//quan arratrem el div 1 sobre el div 2
dropable.addEventListener('dragover', () => {
  dropable.style.backgroundColor = 'red';
  event.preventDefault();
});

dropable.addEventListener('dragleave', () => {
  console.log('fora');
  dropable.style.backgroundColor = 'white';
});

dropable.addEventListener('drop', () => {
  document.getElementById('drop').innerHTML = 'Lo has logrado';
  dropable.style.marginLeft = '205px';
  dropable.style.backgroundColor = 'yellow';
  draggable.remove();
});
