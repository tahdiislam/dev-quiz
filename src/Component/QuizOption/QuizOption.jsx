import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizOption = ({quizOption}) => {
    const {name, logo, total, id} = quizOption;
    const navigate = useNavigate()
    const handleStartQuiz = () => {
        navigate(`/${name.toLowerCase()}/${id}`)
    }
    return (
        <div className='border border-dotted border-gray-500'>
            <h2 className='text-3xl font-medium'>{name}</h2>
            <img src={logo} alt="quiz logo" />
            <div className='flex justify-between items-center m-2'>
                <h2 className='text-2xl font-medium'>{total} Quiz</h2>
                <button onClick={handleStartQuiz} className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-8 rounded-lg text-white text-lg'>Start Quiz</button>
            </div>
        </div>
    );
};

export default QuizOption;