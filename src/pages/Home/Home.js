import React from 'react';
import css from './Home.module.css';

const Home = () => {
    return (
        <div className={css.container}>
            <div className={css.header}>
                <h1>Sometimes a bad record is better</h1>
                <h1>than a good memory</h1>
            </div>
        </div>
    );
};

export default Home;
