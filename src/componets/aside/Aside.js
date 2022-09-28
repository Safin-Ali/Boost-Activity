import React from 'react';
import './aside.css';

const Aside = ({exerciseTime,breakTimeFunc,breakTime}) => {
    return (
        <aside>
            {/* User Details Area */}
            <div className='user-profile'>
                <div className='user-avatar'></div>
                <p className='location-text'><i className="fa-duotone fa-location-dot"></i> Pabna,Bangladesh</p>
            </div>
            <div className='d-flex justify-content-around align-items-center user-info m-3 rounded-2'>
                <div className='py-1'>
                    <h5>50<sub>Kg</sub> </h5>
                </div>
                <div className='py-1'>
                    <h5>18<sub>yrs</sub></h5>
                </div>
            </div>

            {/* Break Times Selection Code */}
            <h5 className='mx-3'>Add A Break</h5>
            <div className='break-list d-flex justify-content-around align-items-center m-3 rounded-2'>
                <div className='time-number'>
                    <button onClick={breakTimeFunc}>15m</button>
                </div>
                <div className='time-number'>
                    <button onClick={breakTimeFunc}>20m</button>
                </div>
                <div className='time-number'>
                    <button onClick={breakTimeFunc}>30m</button>
                </div>
                <div className='time-number'>
                    <button onClick={breakTimeFunc}>35m</button>
                </div>
            </div>

            {/* Exercise Details Area */}
            <h5 className='mx-3 mt-5'>Exercise Details</h5>
            {/* Input feild of Timer And Complete Button */}
            <div className='exercise-time d-flex justify-content-between align-items-center h-100 mx-3 my-3 rounded-3'>
                <p className='mb-0'><b className='px-2'>Exercise Time</b></p>
                <p className='mb-0'><b className='px-2 fw-semibold'>{exerciseTime} Minutes</b></p>
            </div>
            <div className='exercise-time d-flex justify-content-between align-items-center h-100 mx-3 my-3 rounded-3'>
                <p className='mb-0'><b className='px-2'>Break Time</b></p>
                <p className='mb-0'><b className='px-2 fw-semibold'>{breakTime} Minutes</b></p>
            </div>
            <div className='text-center mx-3 mt-5'>
                <button className='complete-btn rounded-3'>Complete Mission</button>
            </div>

        </aside>
    );
};

export default Aside;