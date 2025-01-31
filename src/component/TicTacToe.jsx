import { useState } from "react";

export default function TicTacToe() {

    // there are only two state's
    const [board, setBoard] = useState(Array(9).fill(null)); // 9 elemnts of null valued, array
    const [xIsNext, setXIsNext] = useState(true);

    console.log(board);

    function handleClick(index) {

        // board[index] will be at the end of the game, means when no boxes to click!
        // calculateWinner(board) is for once someone wins!
        if (board[index] || calculateWinner(board)) return;
        // new of state board
        const newBoard = board.slice();
        // switching the user AS assigning into the array
        newBoard[index] = xIsNext ? "YOU" : "ME";
        // updating the state
        setBoard(newBoard);
        // updateing the state
        setXIsNext(!xIsNext);
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // x-axis
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // y-axis
            [0, 4, 8], [2, 4, 6] // diagonal
        ];
        for (let [a, b, c] of lines) {
            // any of three index value can't be empty to prove win,
            // lets first check that 1st index value is there - because we  can't have 1st index as empty to check feature,
            // the just compare, 1st index value as same as like 2nd and 3rd in the element!
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function renderSquare(index) {
        return (
            <button
                className="w-20 h-20 text-2xl font-bold border border-gray-500 flex items-center justify-center"
                key={index}
                onClick={() => handleClick(index)}
            >
                {/* element at the index of board */}
                {board[index]} 
            </button>
        );
    }

    const winner = calculateWinner(board);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "YOU" : "ME"}`;

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
            <div className="text-xl mb-4">{status}</div>
            <div
                className="grid grid-cols-3 gap-1"
            >
                {board.map((_, i) => renderSquare(i))}
            </div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={() => setBoard(Array(9).fill(null))}
            >
                Reset Game
            </button>
        </div>
    );
}