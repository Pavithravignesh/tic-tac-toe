import React from 'react'

function RenderSquare() {
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

export default RenderSquare
