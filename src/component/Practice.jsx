import React, { useState } from 'react'

function Practice() {

    // create array of 9 null valued element's
    const [board, setBoard] = useState(Array(9).fill(null));
    const [values, setValues] = useState(true);

    const handleClick = (i) => {
        // very first we have to check, two things:
        // 1. does the respective index value is non-falsey? - that means if it's non-null value already at the index then, we're over-writting which is out of games rule's
        // 2. at  this time anyone has not yet won the games? - then no need to progress further in the game we can get done and publish the result!
        if (board[i] || wonTheGame(board)) return;
        // having the previous state
        const newBoard = board.slice();
        newBoard[i] = values ? "YOU" : "ME";
        setBoard(newBoard);
        setValues((prev) => !prev);
        console.log(board);
    };

    const wonTheGame = (arr) => {
        const line = [
            // x-axis
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            // y-axiz
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            // diagonal
            [0, 4, 8], [2, 4, 6]
        ]
        for (let [a, b, c] of line) {
            // 1stly check - whether 1st element in the test case will be non-null,
            // 2ndly check - whether 2nd is as same as the 1st,
            // 3rdly check - whether 3rd is as same as the 1nd
            if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) return arr[a];
        }
        return null;
    };

    const haveBox = (i) => {
        return (
            <button
                className='w-20 h-20 font-bold border border-gray-500 flex items-center justify-center'
                key={i}
                onClick={() => handleClick(i)}
            >
                {board[i]}
            </button >
        )
    };

    const winner = wonTheGame(board);

    const status = winner ? `The winner: ${winner}` : `It's: ${values ? "YOU" : "ME"} turn`;

    return (
        <div className='flex flex-col items-center mt-10'>
            <h1 className="text-3xl font-bold mt-4">Hello world!</h1>
            <div className="text-xl mb-4">{status}</div>
            <div className="grid grid-cols-3 gap-1">
                {board.map((_, i) => haveBox(i))}
            </div>
            <button
                className='mt-4 px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
                type="button"
                onClick={() => setBoard(Array(9).fill(null))}
            >Reset</button>
        </div>
    )
}

export default Practice
