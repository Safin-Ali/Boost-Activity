
import React from 'react';

const GameList = () => {
    return (
        <div className='row g-4'>
            <CardUI></CardUI>
        </div>
    );
};

function CardUI (props) {
    return(
    <div className="col-12 col-md-6 col-lg-4">
        <div>
            <div className='game-thumb'>
                <img src="" alt="Game Thumb" />
            </div>
            <div className="game-details">
                <h2>Game Name</h2>
                <p>Game Description</p>
                <h4>Age : 18</h4>
                <h4>Time Requirment</h4>
            </div>
            <div>
                <button>Select Game</button>
            </div>
        </div>   
    </div>
    )
}

export default GameList;