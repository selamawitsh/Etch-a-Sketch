const container=document.getElementById('container')

for(i=0;i<16*16;i++){
    const square=document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)

}
// Add mouseover event listeners to each grid square. 
// When the mouse enters a square, change its color. 

const squareGrid = document.getElementsByClassName('square');
for (let i=0;i<squareGrid.length;i++){
    squareGrid[i].addEventListener('mouseover',function(event){
        if(isMouseDown){
            event.target.style.backgroundColor='black';
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


