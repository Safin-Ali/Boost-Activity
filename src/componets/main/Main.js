import React from 'react';
import GameList from './game-list/GameList';

const Main = () => {
    return (
        <main>
            <section className='container'>
            <div className='row gx-3'>
                <div className="col-12 col-lg-8">
                    <GameList></GameList>
                </div>
            </div>
            </section>
        </main>
    );
};

export default Main;