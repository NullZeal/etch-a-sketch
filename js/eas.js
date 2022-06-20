var rowN = 16;
var cellN = 16;
var mouseDown = 0;

document.body.onmousedown = function() { 
    mouseDown=1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}

drawBoard(rowN, cellN);

const button = document.querySelector('#button');

button.addEventListener('click', ()=>{
    let rowAmount = -1;
    while (isNaN(rowAmount) || rowAmount<1 || rowAmount>100){
        rowAmount = prompt('Amount of rows? (max 100)');
        Math.round(rowAmount) 
    }
        
    let columnAmount = -1;
    while(isNaN(columnAmount) || columnAmount<1 || columnAmount>100){
        columnAmount = prompt('Amount of cells per row? (max 100)');
        Math.round(rowAmount) 
    }

    rowN = rowAmount;
    cellN = columnAmount;
    eraseBoard();
    drawBoard(rowN, cellN);
})

function drawBoard(rowN, cellN){
    for(let i = 0; i<rowN; i++){
        addNewRow();
    }
    addColsToRows(cellN);
}

function eraseBoard(){
    let grid = document.getElementById('grid')
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild);
    }
    let newWidth = cellN * 15;
    grid.style.width = `${newWidth}px`;
}

function addNewRow(){

    const grid = document.querySelector(".grid");

    const newRow = document.createElement('div');
    newRow.setAttribute('class', 'gridRow');
    grid.appendChild(newRow);
}

function addColsToRows(cellN){
    const rowList = document.getElementsByClassName('gridRow');
    for(let row of rowList){
        for(i=0;i<cellN;i++){
            addNewCol(row);
        }
    }
}

function addNewCol(row){
    const newCol = document.createElement('div');
    newCol.setAttribute('class', 'gridCell');

    newCol.addEventListener('mouseenter', () => {
        if(mouseDown==1){
            newCol.style.backgroundColor = 'aliceblue';
        }
            
    })

    newCol.addEventListener('mousedown', ()=>{
        newCol.style.backgroundColor = 'aliceblue'
    })
    row.appendChild(newCol);
}

