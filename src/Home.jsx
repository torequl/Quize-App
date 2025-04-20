import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Link className='btn btn-primary' to='/quiz'>Start Quiz</Link>
        </div>
    );
};

export default Home;