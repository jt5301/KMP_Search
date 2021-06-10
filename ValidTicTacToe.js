////794. Valid Tic - Tac - Toe State

////Given a Tic - Tac - Toe board as a string array board, return true if and only if it is possible to reach this board position during the course of a valid tic - tac - toe game.

////The board is a 3 x 3 array that consists of characters ' ', 'X', and 'O'.The ' ' character represents an empty square.

////Here are the rules of Tic - Tac - Toe:

////Players take turns placing characters into empty squares ' '.
////The first player always places 'X' characters, while the second player always places 'O' characters.
////'X' and 'O' characters are always placed into empty squares, never filled ones.
////The game ends when there are three of the same(non - empty) character filling any row, column, or diagonal.
////The game also ends if all squares are non - empty.
////No more moves can be played if the game is over.

var validTicTacToe = function (board) {
    let xCount = 0
    let oCount = 0
    let xWin = false
    let oWin = false
    let array = new Array(3)
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(3).fill(" ")
    }
    for (let i = 0; i < board.length; i++) {
        let row = board[i]
        for (let k = 0; k < row.length; k++) {
            if (row[k] === 'X') {
                xCount += 1
                array[i][k] = 'X'
            }
            if (row[k] === 'O') {
                oCount += 1
                array[i][k] = 'O'
            }
        }
    }
    //xcount needs to be larger / even w ocount
    if (xCount < oCount) return false

    //xcount can't be more than one larger
    if ((xCount - oCount) > 1) return false

    for (let i = 0; i < 3; i++) {
        //catch rows and columns
        if (array[0][i] + array[1][i] + array[2][i] === "XXX") xWin = true
        if (array[0][i] + array[1][i] + array[2][i] === "OOO") oWin = true
        if (array[i][0] + array[i][1] + array[i][2] === "XXX") xWin = true
        if (array[i][0] + array[i][1] + array[i][2] === "OOO") oWin = true
    }
    //catch diagonals
    if (array[0][0] + array[1][1] + array[2][2] === "XXX") xWin = true
    if (array[0][0] + array[1][1] + array[2][2] === "OOO") oWin = true
    if (array[0][2] + array[1][1] + array[2][0] === "XXX") xWin = true
    if (array[0][2] + array[1][1] + array[2][0] === "OOO") oWin = true

    if (xWin) {
        if (oCount + 1 === xCount) return true
        else return false
    }
    if (oWin) {
        if (oCount === xCount) return true
        else return false
    }
    return true
};