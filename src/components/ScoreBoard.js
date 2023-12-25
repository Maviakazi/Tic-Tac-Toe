// ScoreBoard.js

import React from 'react';
import './ScoreBoard.css';

export default function ScoreBoard({ scores, xPlaying, winner }) {
    const { xScore, oScore } = scores;

    return (
        <div className='scoreboard'>
            <div className='score-header'>Score:</div>
            <div className='score'>
                <span className={`x-score ${!xPlaying && 'inactive'}`}>
                    X - {xScore}
                </span>
                <span className={`o-score ${xPlaying && 'inactive'}`}>
                    O - {oScore}
                </span>
            </div>
            {winner && (
                <div
                    className={`winner ${
                        winner === 'X' ? 'x-score' : 'o-score'
                    }`}>
                    {winner} Wins!
                </div>
            )}
        </div>
    );
}
