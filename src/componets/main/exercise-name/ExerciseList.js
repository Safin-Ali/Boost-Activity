import React from 'react';

function ExerciseList (props) {
    const {name,description,time,exerciseThum} = props.data;
    console.log(name)
    return(
    <div className="col-12 col-md-6 col-lg-4">
        <div className='border border-1 p-2 rounded-2'>
            <div className='mb-2'>
                <div className='rounded-2' style={{background:`url(${exerciseThum}) no-repeat`,backgroundSize:'cover',width:'100%',height:'150px'}}>
                </div>
            </div>
            <div>
                <h2>{name}</h2>
                <p>{description.slice(0,81)}</p>
                <h4>{time}</h4>
            </div>
            <div>
                <button>Select Exercise</button>
            </div>
        </div>   
    </div>
    )
}

export default ExerciseList;