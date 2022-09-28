import React, { useEffect, useState } from 'react';
import ExerciseList from './exercise-name/ExerciseList';
import Header from '../header/Header';
import Aside from '../aside/Aside';
import "./main.css";

const Main = () => {
    const [datas,setData] = useState([]);
    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <main>
            <section className='row gx-5'>
                <div className="col-12 col-lg-9 card-area">
                <Header></Header>
                <div className='row gx-3'>
                <div className="col-12 col-lg-9">
                    <ExerciseList></ExerciseList>
                </div>
            </div>
                </div>
            <div className='col-12 col-lg-3'>
                <Aside></Aside>
            </div>
            </section>
        </main>
    );
};

export default Main;