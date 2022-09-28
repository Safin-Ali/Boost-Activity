import React from 'react';
import './aside.css';
import userAvatar from './user-pic.jpg'

const Aside = () => {
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
                    <h6>Weight</h6>
                </div>
                <div className='py-1'>
                    <h5>18<sub>yrs</sub></h5>
                    <h6>Age</h6>
                </div>
            </div>
            {/* Break Times Selection Code */}
            <h5 className='mx-3'>Add A Break</h5>
            <div className='break-list d-flex justify-content-around align-items-center m-3 rounded-2'>
                <div className='time-number'>
                    <b>15s</b>
                </div>
                <div className='time-number'>
                    <b>20s</b>
                </div>
                <div className='time-number'>
                    <b>30s</b>
                </div>
                <div className='time-number'>
                    <b>35s</b>
                </div>
            </div>
            {/* Exercise Details Area */}
            <h5 className='mx-3 mt-5'>Exercise Details</h5>
            {/* Input feild of Timer And Complete Button */}
            <div className='exercise-time mx-3 my-3 rounded-3'>
                <b className='px-2'>Exercise Time</b>
                <input type="text" className='text-center w-50 bg-transparent border-0' placeholder='0.00sec'/>
            </div>
            <div className='break-time mx-3 my-3 rounded-3'>
                <b className='px-2'>Break time</b>
                <input type="text" className='text-center w-50 bg-transparent border-0' placeholder='0.00sec'/>
            </div>
            <div className='text-center mx-3 mt-5'>
                <button className='complete-btn rounded-3'>Complete Mission</button>
            </div>

        </aside>
    );
};

export default Aside;