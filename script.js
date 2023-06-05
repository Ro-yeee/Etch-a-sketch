let eraseMode = false
let rainbowMode = false
let mouseDown = false
let rows = 16
let cols = 16
const grid = document.getElementById('grid');    
const colorPicked = document.querySelector('input')
const buttons = document.querySelectorAll('button')
const sizePicked = document.getElementById("sizePicked")
const sizeDisplay = document.getElementById("size-display")
const eraserButton = buttons[0]
const rainbowButton = buttons[1]
const clearButton = buttons[2]

// for checking if the mouse is clicked or not inside the grid
grid.onmousedown = () => (mouseDown = true)
grid.onmouseup = () => (mouseDown = false)

 //  function for making divs of specified numbers inside the grid
const makeDivs = (rows,cols) => {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    grid.textContent=""
    for (let i = 0; i < (rows*cols); i++){
    let cells = document.createElement('div');
    grid.appendChild(cells)    
    }
}

//  function for clearing the grid and repopulating it with divs
const remove = () => {
    grid.textContent=""
    makeDivs(rows,cols)
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

//Getting input for the size selection slider and populating the grid accordingly along with diplaying the size
sizePicked.addEventListener('input', () =>{
    sizeDisplay.textContent = sizePicked.value+"x"+sizePicked.value
    rows = sizePicked.value
    cols = sizePicked.value
    makeDivs(rows,cols)
})

//Initialisation of the grid and calling the main function
makeDivs(rows,cols)
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
