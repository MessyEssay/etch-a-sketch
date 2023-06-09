let color = "black"

function populateBoard(size){
        let board = document.querySelector('.board');
        let squares = board.querySelectorAll("div")
        squares.forEach((div)=> div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount= size * size
    for(let i = 0; i < amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

function colorSquare(){
    this.style.backgroundColor = color
}

function changeSize(input){
    if(input >= 2&& input<=100){
        populateBoard(input)
    }
    else{
        console.log("ERROR: Only values between 2 and 100 are valid")
        alert("ERROR: Only values between 2 and 100 are valid")
    }
}

function resetBoard(){
        let board = document.querySelector('.board');
        let squares = board.querySelectorAll("div")
    squares.forEach((square)=> 
    square.style.backgroundColor ='white'
)}

function changeColor(choice){
    color = choice
}
populateBoard(16);