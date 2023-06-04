let eraserClicked = false
const grid = document.getElementById('grid');    
const buttons = document.querySelectorAll('button')           //  getting the grid
const eraserButton = buttons[0]
const rainbowButton = buttons[1]
const clearButton = buttons[2]

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

 //  function for making divs 
const makeDivs = (numDivs) => {
for (let i = 0; i < numDivs; i++){
    let cells = document.createElement('div');
    grid.appendChild(cells)    
    }
}

// function for coloring black
const black = (target) => {
    target.classList.add('hover-effect')
}

//  function for clearing the grid
const remove = () => {
    grid.textContent=""
    makeDivs(256)
}

//  function for toggling values
const toggle = (booleanValue) => {
    return booleanValue = !booleanValue;
}

makeDivs(256);

const draw = () => {                                      
    grid.addEventListener('mousemove', (e) =>{
        if(e.target.id === "grid") return
        if(!eraserClicked && mouseDown){
            black(e.target)
        }else if(eraserClicked && mouseDown){
            e.target.classList.remove('hover-effect')
        }
    })
}

buttons.forEach(button => {
   button.addEventListener('mouseenter', () =>{
      button.classList.add('popup')
   })
   button.addEventListener('mouseleave', () =>{
      button.classList.remove('popup')
   })
})

clearButton.addEventListener('click',() =>{
    remove()
})

eraserButton.addEventListener('click',() => {
    eraserButton.classList.toggle('clicked')
    eraserClicked = toggle(eraserClicked)
})

rainbowButton.addEventListener('click',() =>{
    rainbowButton.classList.toggle('clicked')
})

draw()