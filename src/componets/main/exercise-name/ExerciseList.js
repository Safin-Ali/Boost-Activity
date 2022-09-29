import React from 'react';
import { xx } from '../Main';
import './ExerciseList.css'

function selectedCard (card) {
    // const currentButton = event.target;
    card.innerText = 'Selected'
    card.setAttribute('disabled','');
    card.classList.add('selectedbtn')
}

function ExerciseList (props) {
    const {name,description,time,exerciseThum} = props.data;
    const selFunc = props.selFunc;
    return(
    <div className="col-12 col-lg-6 col-xl-4">
        <div className='border border-1 p-2 rounded-2 shadow'>
            <div className='mb-2'>
                <div className='rounded-2' style={{background:`url(${exerciseThum}) no-repeat`,backgroundSize:'cover',width:'100%',height:'150px'}}>
                </div>
            </div>
            <div>
                <h2>{name}</h2>
                <p>{description.slice(0,81)}</p>
                <p className='fw-semibold'>Exercise Time: <b>{time}</b> min</p>
            </div>
            <div className='text-center py-2'>
                <button onClick={ event => {
                    const currentButton = event.target;
                    selectedCard(currentButton)
                    selFunc(time);
                }} className='selectBtn'>Select Exercise</button>
            </div>
        </div>   
    </div>
    )
}

export default ExerciseList;