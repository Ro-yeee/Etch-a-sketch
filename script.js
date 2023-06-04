const container = document.getElementById('grid-container');

function makeDivs(numDivs) {
for (let i = 0; i < numDivs; i++){
    let cells = document.createElement('div');
    container.appendChild(cells)    
    }
}

makeDivs(256);