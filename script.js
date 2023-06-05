let eraseMode = false
let rainbowMode = false
let mouseDown = false
const grid = document.getElementById('grid');    
const colorPicked = document.querySelector('input')
const buttons = document.querySelectorAll('button')
const eraserButton = buttons[0]
const rainbowButton = buttons[1]
const clearButton = buttons[2]

// for checking if the mouse is clicked or not inside the grid
grid.onmousedown = () => (mouseDown = true)
grid.onmouseup = () => (mouseDown = false)

 //  function for making divs of specified numbers inside the grid
const makeDivs = (numDivs) => {
for (let i = 0; i < numDivs; i++){
    let cells = document.createElement('div');
    grid.appendChild(cells)    
    }
}

//  function for clearing the grid and repopulating it with divs
const remove = () => {
    grid.textContent=""
    makeDivs(256)
}

//  function for toggling values
const toggle = (booleanValue) => {
    return booleanValue = !booleanValue;
}

// Adding popup animation for the buttons
colorPicked.addEventListener('mouseenter', () =>{
    colorPicked.classList.add('popup')
})
colorPicked.addEventListener('mouseleave', () =>{
    colorPicked.classList.remove('popup')
})

buttons.forEach(button => {
   button.addEventListener('mouseenter', () =>{
      button.classList.add('popup')
   })
   button.addEventListener('mouseleave', () =>{
      button.classList.remove('popup')
   })
})

// Checking if the buttons are clicked or not
eraserButton.addEventListener('click',() => {
    eraserButton.classList.toggle('clicked')
    eraseMode = toggle(eraseMode)
})
rainbowButton.addEventListener('click',() =>{
    rainbowButton.classList.toggle('clicked')
    rainbowMode = toggle(rainbowMode)
})
clearButton.addEventListener('click',() => remove())

//Main function
const draw = () => {                                      
    grid.addEventListener('mouseover', (e) =>{
        if(e.target.id === "grid") return
        if(!eraseMode && mouseDown){
            if(rainbowMode){
                const color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
                e.target.style.background = color
            }else {
                e.target.style.background = colorPicked.value
            }
        }else if(eraseMode && mouseDown){
            e.target.style.background = ""
        }
    })
}

//Populating the grid and calling the main function
makeDivs(256);
draw()