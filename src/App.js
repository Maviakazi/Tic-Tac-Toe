// App.js

import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';

function App() {
    const WIN_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xPlaying, setXPlaying] = useState(true);
    const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);

    const handleBoxClick = (boxi) => {
        if (gameOver || board[boxi]) {
            return;
        }

        const updatedBoard = board.map((value, i) =>
            i === boxi ? (xPlaying ? 'X' : 'O') : value
        );

        const winningPlayer = checkWinner(updatedBoard);

        if (winningPlayer) {
            setWinner(winningPlayer);
            updateScores(winningPlayer);
        }

        setBoard(updatedBoard);
        setXPlaying(!xPlaying);
    };

    const checkWinner = (board) => {
        for (let i = 0; i < WIN_CONDITIONS.length; i++) {
            const [x, y, z] = WIN_CONDITIONS[i];
            if (board[x] && board[x] === board[y] && board[y] === board[z]) {
                setGameOver(true);
                return board[x];
            }
        }
        return null;
    };

    const updateScores = (winningPlayer) => {
        if (winningPlayer === 'O') {
            setScores((prevScores) => ({
                ...prevScores,
                oScore: prevScores.oScore + 1,
            }));
        } else {
            setScores((prevScores) => ({
                ...prevScores,
                xScore: prevScores.xScore + 1,
            }));
        }
    };

    const resetBoard = () => {
        setWinner(null);
        setGameOver(false);
        setBoard(Array(9).fill(null));
    };

    return (
        <div className='App'>
            <ScoreBoard scores={scores} xPlaying={xPlaying} winner={winner} />
            <Board
                board={board}
                onClick={gameOver ? resetBoard : handleBoxClick}
            />
            <ResetButton resetBoard={resetBoard} />
        </div>
    );
}

export default App;
