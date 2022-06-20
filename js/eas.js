const rowN = 16;
const colN = 16;

for(let i = 0; i<rowN; i++){
    addNewRow();
}

function addNewRow(){

    const grid = document.querySelector(".grid");

    const newRow = document.createElement('div');
    newRow.style.width = '100px';
    newRow.style.height = '100px';
    newRow.style.backgroundColor = 'blue';
    newRow.setAttribute('class', 'gridRow')

    grid.appendChild(newRow);
}

addColsToRows();

function addColsToRows(){
    const rowList = document.getElementsByClassName('gridRow');

    for(let row of rowList){
        addNewCol(row);
    }

}


