const grid = document.getElementById('grid');

const makeDivs = (numDivs) => {
for (let i = 0; i < numDivs; i++){
    let cells = document.createElement('div');
    grid.appendChild(cells)    
    }
}

const black = (target) => {
    target.classList.add('hover-effect')
}

const remove = () => {

}


makeDivs(256);
grid.addEventListener('mousemove', (e) =>{
    if(e.target.id === "grid") return
    console.log(e.target)
    black(e.target)
})