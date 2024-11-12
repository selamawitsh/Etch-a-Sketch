const container=document.getElementById('container')

for(i=0;i<16*16;i++){
    const square=document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)

}
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




// Add mouseover event listeners to each grid square. 
// When the mouse enters a square, change its color. 

const squareGrid = document.getElementsByClassName('square');
for (let i=0;i<squareGrid.length;i++){
    squareGrid[i].addEventListener('mouseover',function(event){
        if(isMouseDown){
            event.target.style.backgroundColor=currentColor;
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


