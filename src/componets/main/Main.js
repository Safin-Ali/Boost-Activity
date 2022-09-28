import React from 'react';
import ExerciseList from './exercise-name/ExerciseList';
import Header from '../header/Header';
import Aside from '../aside/Aside';
import "./main.css";

const Main = () => {
    return (
        <main>
            <section className='row gx-5'>
                <div className="col-12 col-lg-9 card-area">
                <Header></Header>
                <div className='row gx-3'>
                <div className="col-12 col-lg-9">
                </div>
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