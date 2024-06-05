let currentPlayer="X"
let board=[``,``,``,``,``,``,``,``,``]
const winningCombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function makeMove(index){
    if(!board[index]){
        board[index]=currentPlayer;
    document.getElementById("board").children[index].innerHTML=currentPlayer;
    if(checkWinner()){

        document.getElementById("result").innerText=`${currentPlayer} won !!`
        disableBoard();
    }
    else if(board.every(cell=>cell!==``)){
        document.getElementById(`result`).innerText="It's a draw !!"
    } 
    else{
        currentPlayer=currentPlayer===`X`?`O`:`X`;
    }
    }
}

function checkWinner(){
    return winningCombo.some(combo=>{
        return combo.every(index=>board[index]===currentPlayer)
    })
}
function resetGame(){
    currentPlayer=`X`
    board=[``,``,``,``,``,``,``,``,``]
    document.getElementById(`result`).innerText=``;
    document.querySelectorAll(`.cell`).forEach(cell=>cell.innerText=``);
    enableBoard;
}
function disableBoard(){
    document.querySelectorAll(`.cell`).forEach(cell=>cell.onclick=null)
}
function enableBoard(){
    document.querySelectorAll(`.cell`).forEach((cell,index)=>cell.onclick=()=>makeMove(index))
}