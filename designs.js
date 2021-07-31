//Global Variables
let canvasTable = document.querySelector('#pixelCanvas');
// Select color input
let color ;
// Select size input
let numRow = 0 ;
let numCol = 0 ;

// When size is submitted by the user, call makeGrid()
const formId = document.querySelector('#sizePicker');
formId.addEventListener('submit', function makeGrid(evt) {
    evt.preventDefault();
    //Get number of columns and rows
    numRow = document.getElementById('inputHeight').value;
    numCol = document.getElementById('inputWidth').value;
    
    //Reset the canvas whenever user clicks the submit button
    canvasTable.innerHTML = (null);
    
    //create a canvas table with the given number of row and columns
    for(let i = 0 ; i < numRow ; i++){
        const newRow = document.createElement('tr');
        newRow.setAttribute('id',`row${i}`);
        canvasTable.appendChild(newRow);
        for(let j = 0 ; j < numCol ; j++){
            //const newCol = document.createElement('td');
            const targetRow = document.querySelector(`#row${i}`);
            const newCol = document.createElement('td');
            newCol.setAttribute('id',`col${j}`);
            targetRow.appendChild(newCol);        
        }
    }

});


//Fill the color into a pixel
canvasTable.addEventListener('click', function filler(evt){
    //Get the current color
    color = document.querySelector('#colorPicker').value;

    //Identify where has been clicked. 
    const currentClickedblank = evt.target;
    //paint the blank only if the user clicks on a pixel not a border.
    if(currentClickedblank.id.includes('col') === true ){
        evt.target.style.backgroundColor = color;
    }
    else{
        console.log('you misclicked!')
    }
    
});