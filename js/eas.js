var cellN = 3

var mouseDown = 0;

document.body.onmousedown = function() { 
    mouseDown=1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}

drawGrid(cellN);

const eraseButton = document.getElementById("eraseButton");
eraseButton.addEventListener('click', ()=>{
    eraseGrid();
});

const button = document.querySelector('#inputButton');

button.addEventListener('click', ()=>{
    let cellAmount = -1;
    let keepCellN = false;
    while (isNaN(cellAmount) || cellAmount<1 || cellAmount>100){
        cellAmount = prompt('Please set the Grid size : X by X ? (max 100)');
        if(cellAmount == null) {
            keepCellN = true;
            break;
        }
        Math.round(cellAmount);
    }
    if(!keepCellN){
        cellN = cellAmount;
    }
    eraseGrid();
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
    let grid = document.getElementById('grid');
    grid.style.gridTemplateRows = null;
    grid.style.gridTemplateColumns = null;

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    };
    drawGrid(cellN);
}

function addNewCell(){
    const grid = document.querySelector("#grid");
    const newCell = document.createElement('div');
    newCell.setAttribute('class', 'gridCell');

    newCell.addEventListener('mouseenter', () => {
        if(mouseDown==1){
            newCell.style.backgroundColor = 'coral';
        }
    })
    newCell.addEventListener('mousedown', ()=>{
        newCell.style.backgroundColor = 'coral'
    })
    grid.appendChild(newCell);
}