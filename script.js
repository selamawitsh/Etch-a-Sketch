//size slider
// Set a default grid size of 16 and store it in `currentSize`
// Function to update `currentSize` and recreate the grid
// Get the size slider element from the HTML
// Add an event listener to detect changes on the slider
// Update the current size of the grid to the new slider value
// Display the updated grid size as "value x value" in sizeValue
let default_size=16
let currentSize=default_size

function setCurrentSize(value){
    currentSize=value
    createGrid(currentSize)
}
const sizeSlider=document.getElementById('sizeSlider')

sizeSlider.addEventListener('change',function(e){
    setCurrentSize(e.target.value)
    sizeValue.innerHTML = `${e.target.value} x ${e.target.value}`
})

// Refactored createGrid function to make the grid resizable based on input size

// - Added `size` parameter to createGrid to allow dynamic grid dimensions
// - Set `container` to fixed 480px by 480px size, and calculated each square's size as `containerSize / size`
// - Used flexbox to layout squares in a wrapped grid structure
// - Updated event listener to apply color changes on mouseover

function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = ''; 

    const containerSize = 480; 
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';

    const squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', function(event) {
            if (isMouseDown) {
                event.target.style.backgroundColor = currentMode === 'color' ? currentColor : '#fefefe';
            }
        });

        container.appendChild(square);
    }
}


let isMouseDown=false
document.addEventListener('mousedown',function(){
    isMouseDown=true;
})

document.addEventListener('mouseup',function(){
    isMouseDown=false;
})
createGrid(currentSize)




//to choose the color
// Set the initial color to the default color value
// Define a function to update the current color
// This function takes a new color as a parameter and sets it as the current color
// Add an event listener to the color input element
// When the user selects a new color, the 'input' event is triggered
// The event handler calls setCurrentColor with the selected color's value, updating currentColor
const default_color = '#333333'
let currentColor = default_color
const colorChooser = document.getElementById('colorPicker')
function setCurrentColor(newColor) {
    currentColor = newColor
  }
colorChooser.addEventListener('input',function(e){
    setCurrentColor(e.target.value)
})
//to erase
//Set up the default mode to 'color' and the currnet mode start as color
//Get the color and eraser button elements from the DOM
//Add event listeners to each button to handle clicks
//When the color button is clicked, set the mode to 'color'
// When the eraser button is clicked, set the mode to 'eraser'
//Define the setCurrentMode function
    //Call activateButton to highlight the selected mode
    //Update 'currentMode' to the new mode (either 'color' or 'eraser')
//Define the activateButton function to manage active button classes
    // If the current mode is 'color', remove 'active' from colorBtn
    //Un-highlight the color button if it was active
    // If the current mode is 'eraser', remove 'active' from eraserBtn
     // Un-highlight the eraser button if it was active

    // Add 'active' class to the button corresponding to the new mode
    // Highlight the color button if the new mode is 'color' or 'erase'
const DEFAULT_MODE='color'
let currentMode = DEFAULT_MODE
const colorBtn=document.getElementById('color')
const eraserBtn=document.getElementById('erase')

colorBtn.addEventListener('click',function(){
    setCurrentMode('color'); 
})
eraserBtn.addEventListener('click',function(){
    setCurrentMode('eraser'); 
})
function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
  }
function activateButton(newMode) {
    colorBtn.classList.remove('active');
    eraserBtn.classList.remove('active');
    if (newMode === 'color') {
      colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
  }

// to clear
// after clearing to start drawing call the createGrid function and activateButton function
const clear=document.getElementById('clear')
clear.addEventListener('click',function(){
    container.innerHTML='';
    createGrid(currentSize)
    activateButton(DEFAULT_MODE)
})













