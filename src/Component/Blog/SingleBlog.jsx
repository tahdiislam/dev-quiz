import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleBlog = ({blog}) => {
    const {question, ans} = blog;
    return (
        <div className='border border-indigo-600 shadow-md hover:shadow-xl p-4'>
            <h3 className='text-2xl font-semibold'>{question}</h3>
            <p className='text-xl text-justify'>{ans}</p>
        </div>
    );
};

export default SingleBlog;