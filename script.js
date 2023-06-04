let eraseMode = false
let rainbowMode = false
const grid = document.getElementById('grid');    
const buttons = document.querySelectorAll('button')
const eraserButton = buttons[0]
const rainbowButton = buttons[1]
const clearButton = buttons[2]

let mouseDown = false
grid.onmousedown = () => (mouseDown = true)
grid.onmouseup = () => (mouseDown = false)

 //  function for making divs 
const makeDivs = (numDivs) => {
for (let i = 0; i < numDivs; i++){
    let cells = document.createElement('div');
    grid.appendChild(cells)    
    }
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
        if(!eraseMode && mouseDown){
            if(rainbowMode){
                const color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
                e.target.style.background = color
            }else e.target.style.background = "black"
        }else if(eraseMode && mouseDown){
            e.target.style.background = ""
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
    eraseMode = toggle(eraseMode)
})

rainbowButton.addEventListener('click',() =>{
    rainbowButton.classList.toggle('clicked')
    rainbowMode = toggle(rainbowMode)
})

draw()