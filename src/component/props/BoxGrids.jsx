import React from 'react'

function BoxGrids({ index, elements, hanldeClick }) {
    return (
        <div
            className='w-20 h-20 bg-white border border-gray-500 text-2xl font-bold'
            // what if it got clicked?
            onClick={() => hanldeClick(index)}
        >
            {elements[index]}
        </div>
    )
}

export default BoxGrids