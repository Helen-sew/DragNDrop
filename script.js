const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

////+= to assign/add additional classname to the ele, if without += (instead = only) all other className will be wiped out.
//Multiple assigned classes have to be separated by space

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0); //use setTimeout, so that the assignment of 'hold' class name can be done first before set to invisible.
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty'; //to ensure the class name must be 'empty' before assign the 'fill' class name.
  this.append(fill);
}
