import React, { useState } from 'react'

function Three() {

    const [game, setGame] = useState(Array(16).fill(null));
    const [nextWho, setNextWho] = useState(true);

    const handleClick = (i) => {
        if (game[i] || winningCondition(game)) return;
        const newGame = game.slice();
        newGame[i] = nextWho ? "MY" : "YOU";
        setGame(newGame);
        setNextWho((prev) => !prev);
    }

    const winningCondition = (arr) => {
        const logic = [
            // x-axis
            [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
            // y-axis
            [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
            // diagonal
            [0, 5, 10, 15], [3, 6, 9, 12]
        ];

        for (let [w, x, y, z] of logic) {
            if (arr[w] && arr[w] === arr[x] && arr[w] === arr[y] && arr[w] === arr[z]) return arr[w];
        }

        return null;
    }

    const createBoxes = (i) => {
        return (
            <div
                className="w-20 h-20 border font-bold border-gray-500 flex items-center justify-center"
                key={i}
                onClick={() => handleClick(i)}
            >
                {game[i]}
            </div>
        )
    }

    const winner = winningCondition(game);

    const status = winner ? `Winner: ${winner}` : `It's ${nextWho ? "MY" : "YOU"} turn`;

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold mt-4">
                Tic Tac toe
            </h1>
            <div className="text-xl my-5">{status}</div>
            <div className="grid grid-cols-4 gap-1">
                {game.map((_, i) => createBoxes(i))}
            </div>
            <button
                type="button"
                className='mt-4 px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
                onClick={() => setGame(Array(16).fill(null))}
            >Reset</button>
        </div>
    )
}

export default Three
