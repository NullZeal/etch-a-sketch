const rowN = 16;
const cellN = 16;

for(let i = 0; i<rowN; i++){
    addNewRow();
}

addColsToRows();

function addNewRow(){

    const grid = document.querySelector(".grid");

    const newRow = document.createElement('div');
    newRow.setAttribute('class', 'gridRow');
    grid.appendChild(newRow);
}

function addColsToRows(){
    const rowList = document.getElementsByClassName('gridRow');

    for(let row of rowList){
        for(i=0;i<cellN;i++){
            addNewCol(row);
        }
    }

}

function addNewCol(row){
    const newCol = document.createElement('div');
    newCol.setAttribute('class', 'gridCell')
    row.appendChild(newCol);
}


