import React, { useState } from 'react'
import BoxGrids from './BoxGrids';

function Props() {
    const [elements, setElements] = useState(Array(9).fill(null));
    const [value, setValue] = useState(true);

    const hanldeClick = (i) => {
        if (elements[i] || winningLogic()) return;
        const updatedElements = elements.slice();
        updatedElements[i] = value ? "YOU" : "ME";
        setElements(updatedElements);
        setValue((prev) => (!prev));
    };

    const winningLogic = () => {
        const logic = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let [a, b, c] of logic) {
            if (elements[a] && elements[a] === elements[b] && elements[a] === elements[c]) return elements[a];
        }

        return null;
    };

    const winner = winningLogic();

    const status = winner ? `Winner: ${winner}` : value ? `It's you're Turn` : `It's my turn`;

    return (
        <div className='flex flex-col items-center mt-10'>
            <h1 className="text-3xl font-bold my-2">Tic Tac Toe using Props</h1>
            <div className="text-xl font-bold my-4">{status}</div>
            <div className="grid grid-cols-3 gap-1">
                {elements.map((_, i) => (
                    <BoxGrids
                        key={i}
                        index={i}
                        elements={elements}
                        hanldeClick={hanldeClick}
                    />
                ))}
            </div>
            <button
                type="button"
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
                onClick={() => setElements(Array(9).fill(null))}
            >reset</button>
        </div>
    )
}

export default Props
