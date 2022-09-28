
import React from 'react';

const ExerciseList = () => {
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
                <h2>Exercise Name</h2>
                <p>Exercise Description</p>
                <h4>Time Requirment</h4>
            </div>
            <div>
                <button>Select Exercise</button>
            </div>
        </div>   
    </div>
    )
}

export default ExerciseList;