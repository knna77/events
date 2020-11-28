const draggable = document.getElementById('drag');
const dropable = document.getElementById('drop');
draggable.addEventListener('dragstart', () => {
  console.log('drag start');
  draggable.classList.add('dragging');
});
draggable.addEventListener('dragend', () => {
  console.log('drag end');
  draggable.classList.remove('dragging');
});
dropable.addEventListener('dragover', () => {
  dropable.style.backgroundColor = 'red';
  console.log('drag over');
  draggable.addEventListener('dragend', () => {
    console.log('drag dins');
    document.getElementById('drop').innerHTML = 'Lo has logrado';
    dropable.style.marginLeft = '205px';
    draggable.remove('.draggable');
  });
});
