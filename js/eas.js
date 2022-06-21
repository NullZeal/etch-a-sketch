var cellN = 10
var cellSize = 1;

var mouseDown = 0;

document.body.onmousedown = function() { 
    mouseDown=1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}

drawGrid(cellN);

const button = document.querySelector('#button');

button.addEventListener('click', ()=>{
    let cellAmount = -1;
    while (isNaN(cellAmount) || cellAmount<1 || cellAmount>100){
        cellAmount = prompt('X by X ? (max 100)');
        Math.round(cellAmount);
    }
    cellN = cellAmount;
    const grid = document.getElementById("grid");
    grid.style.gridTemplateRows = null;
    grid.style.gridTemplateColumns = null;
    drawGrid(cellN);
})

function drawGrid(cellN){
    const addRow = document.getElementById("grid");

    for(let i = 0; i<cellN; i++){
        addRow.style.gridTemplateRows += ` ${1}fr`;
        addRow.style.gridTemplateColumns += ` ${1}fr`;
        
    }
    for(let i = 0; i<(cellN*cellN); i++){
        addNewCell();
    }
}

function eraseGrid(){
    let grid = document.getElementById('grid')
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild);
    }
}

function addNewCell(){
    const grid = document.querySelector("#grid");
    const newCell = document.createElement('div');
    newCell.setAttribute('class', 'gridCell');

    newCell.addEventListener('mouseenter', () => {
        if(mouseDown==1){
            newCell.style.backgroundColor = 'red';
        }
    })
    newCell.addEventListener('mousedown', ()=>{
        newCell.style.backgroundColor = 'red'
    })
    grid.appendChild(newCell);
}

function addNewCol(row){
    const newCol = document.createElement('div');

    newCell.setAttribute('class', 'gridCell');

    newCell.addEventListener('mouseenter', () => {
        if(mouseDown==1){
            newCell.style.backgroundColor = 'red';
        }
            
    })

    newCell.addEventListener('mousedown', ()=>{
        newCell.style.backgroundColor = 'red'
    })


}

