import React, { useEffect, useState } from 'react';
import ExerciseList from './exercise-name/ExerciseList';
import Header from '../header/Header';
import Aside from '../aside/Aside';
import "./main.css";

const Main = () => {
    // Get JSON Data

    const [datas,setData] = useState([]);
    const [exerMint,setExerMint] = useState(0);

    // Handle Exercise Time Function
    function handleExerciseTime (minutues) {
        setExerMint(exerMint+minutues)
    }
    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
    return (
        <main>
            <section className='row gx-5 justify-content-center mx-0'>
                <div className="col-12 col-lg-9 card-area">
                <Header></Header>
                <div className='row g-3'>
                    {datas.map(data => <ExerciseList data={data} key={data.id} selFunc={handleExerciseTime}></ExerciseList>)}                    
                </div>
                </div>
            <div className='col-12 col-lg-3' style={{background:'#e5f0fa'}}>
                <Aside exerciseTime={exerMint}></Aside>
            </div>
            </section>
        </main>
    );
};

export default Main;