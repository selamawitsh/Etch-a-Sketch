const container=document.getElementById('container')

for(i=0;i<16*16;i++){
    const square=document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)

}
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
const clear=document.getElementById('clear')
clear.addEventListener('click',function(){
    container.innerHTML='';
})



// Add mouseover event listeners to each grid square. 
// When the mouse enters a square, change its color. 
const squareGrid =(document.getElementsByClassName('square'));
for (let i=0;i<squareGrid.length;i++){
    squareGrid[i].addEventListener('mouseover',function(event){
        if(isMouseDown){
         if (currentMode === 'color') {
            event.target.style.backgroundColor = currentColor
          } else if (currentMode === 'eraser') {
            event.target.style.backgroundColor = '#fefefe'
          }
        }
    })
}
let isMouseDown=false
document.addEventListener('mousedown',function(){
    isMouseDown=true;
})

document.addEventListener('mouseup',function(){
    isMouseDown=false;
})















// for (let i = 0; i < squareGrid.length; i++) {
//     squareGrid[i].addEventListener('mouseover', function(event) {
//         if (isMouseDown) {
//             event.target.style.backgroundColor = 'blue'; 
//         }
//     });
// }
// let isMouseDown = false;
// document.addEventListener('mousedown', function() {
//     isMouseDown = true;
// });

// document.addEventListener('mouseup', function() {
//     isMouseDown = false;
// });


