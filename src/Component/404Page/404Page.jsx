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
        </div>
    );
};

export default PageNotFound;