import React from "react";
import { useGame } from "../context/index";

function RenderSquare({ index }) {
    const { board, handleClick } = useGame();

    return (
        <button
            className="w-20 h-20 bg-white border border-gray-400 text-2xl font-bold"
            onClick={() => handleClick(index)}
        >
            {board[index]}
        </button>
    );
}

export default RenderSquare;
