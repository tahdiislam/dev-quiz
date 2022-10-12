import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='fixed bottom-0 flex justify-center'>
            <h1 className='text-4xl font-medium rounded-t-lg py-2 px-8 bg-indigo-600 text-white hover:text-fuchsia-500'><Link to='/'><span className='text-fuchsia-500 hover:text-white'>dev</span>Quiz</Link></h1>
        </div>
    );
};

export default Footer;