buttons = document.querySelectorAll('.col');


let arr = ['', '', '', '', '', '', '', '', ''];


let currentPlayer = '0';





function handleClick(button) {
    // console.log(button.id)
    if(arr[button.id] === '') {
        // console.log('cell is empty...')
        arr[button.id] = currentPlayer;
        button.innerText = currentPlayer;   
        
        checkforWinner(currentPlayer);
        isGameOver();

        currentPlayer = currentPlayer==='0'? 'X': '0';
    }
    else {
        
        // changeCurrentPlayer as well
        console.log('already clicked...')
    }
}


buttons.forEach((button) => {
    // console.log(button.id)
    button.addEventListener('click', () => {
        // console.log('clicked on button no.', button.id)

        handleClick(button);

    })

})




function resetGame() {
    console.log('reseting the game...');
    arr = ['', '', '', '', '', '', '', '', ''];
    buttons.forEach((button) => {
        button.innerText = '';
    })
}



function checkforWinner(player) {
    // check rows cols and diagonals
    if(player===arr[0] && player===arr[1] && player===arr[2] ||
        player===arr[3] && player===arr[4] && player===arr[5] ||
        player===arr[6] && player===arr[7] && player===arr[8] ||

        player===arr[0] && player===arr[3] && player===arr[6] ||
        player===arr[1] && player===arr[4] && player===arr[7] ||
        player===arr[2] && player===arr[5] && player===arr[8] ||

    
        player===arr[0] && player===arr[4] && player===arr[8] ||
        player===arr[2] && player===arr[4] && player===arr[6]
        ) {
        alert(`${player} won the game...`);
        resetGame();
    }
    
}

function isGameOver() {
    
    let emptyCount = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i]==='') {
            emptyCount++;
        }
    }

    if(emptyCount === 0) {
        // // game draw
        // let div = document.createElement('div')
        // div.innerText = 'Game draw...';
        // document.body.appendChild(div)
        alert('game over...')
        resetGame();
    }
}