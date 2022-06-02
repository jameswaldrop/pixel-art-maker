const colorPicker = document.getElementById('colorPicker');
const rowNum = document.getElementById('inputHeight');
const cellNum = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');

form.addEventListener('submit', function (e) {
    pixelCanvas.innerHTML = '';
    e.preventDefault();
    makeGrid();
})

pixelCanvas.addEventListener('click', function (e) {
    if (e.target.nodeName === 'TD') {
        e.target.style.backgroundColor = colorPicker.value;
    }
});

function makeGrid() {
    for (let i = 0; i < rowNum.value; i++) {
        const row = pixelCanvas.insertRow(0);
        for (let j = 0; j < cellNum.value; j++) {
            row.insertCell(0);
        }
    }
  }

  document.querySelector('#sizePicker').addEventListener('submit', function(){
    let width = document.querySelector("#inputWidth").value;
    let height = document.querySelector("#inputHeight").value;
    makeGrid(width, height);
  });
  
function makeGrid(width, height){
    let table = document.querySelector('table');
    for(let x of table.children) table.removeChild(x);
    for(let i=0;i<height;i++){
      let row = document.createElement('tr');
      for(let j=0; j< width;j++){
        let cell = makeCell();
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  }

function makeCell(){
    let cell= document.createElement('td');
    let colorPicker = document.createElement('input');
    colorPicker.setAttribute('type', 'color');
    colorPicker.style.visibility = 'hidden';
    cell.appendChild(colorPicker);
    colorPicker.addEventListener('change', function(e){
      cell.style.background = e.target.value;
    });

cell.addEventListener('click', function(e){
      colorPicker.click();  
    });
    return cell;
}