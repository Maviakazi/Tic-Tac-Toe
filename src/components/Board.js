// Board.js

import React from 'react';
import './Board.css';
import Box from './Box';

export default function Board({ board, onClick }) {
    return (
        <div className='board'>
            {board.map((value, i) => {
                return <Box value={value} onClick={() => onClick(i)} />;
            })}
        </div>
    );
}
