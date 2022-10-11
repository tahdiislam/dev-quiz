import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate()
    const handleGoHome = () => {
        navigate('/home')
    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-red-500 my-8">404 | Page Not Found</h1>
            <button onClick={handleGoHome} className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 py-4 px-8 rounded-lg text-white text-xl'>Back Home Page</button>
        </div>
    );
};

export default PageNotFound;