import { createContext, useState, useContext } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(index) {
        if (board[index] || calculateWinner(board)) return;
        const newBoard = [...board];
        newBoard[index] = xIsNext ? "YOU" : "ME";
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        for (let [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const resetGame = () => setBoard(Array(9).fill(null));

    return (
        <GameContext.Provider value={{
            board,
            xIsNext,
            handleClick,
            calculateWinner,
            resetGame
        }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    return useContext(GameContext);
};