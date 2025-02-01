import RenderSquare from "./RenderSquare";
import { useGame } from "../context/index";

export default function TicTacToe() {
    const { board, xIsNext, calculateWinner, resetGame } = useGame();

    const winner = calculateWinner(board);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "YOU" : "ME"}`;

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
            <div className="text-xl mb-4">{status}</div>
            <div className="grid grid-cols-3 gap-1">
                {board.map((_, i) => (
                    <RenderSquare key={i} index={i} />
                ))}
            </div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={resetGame}
            >
                Reset Game
            </button>
        </div>
    );
}
