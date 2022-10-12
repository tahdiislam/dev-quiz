import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizOption = ({quizOption}) => {
    const {name, logo, total, id} = quizOption;
    const navigate = useNavigate()
    const handleStartQuiz = () => {
        navigate(`/home/quiz/${name.toLowerCase()}/${id}`)
    }
    return (
        <div className='bg-indigo-200 rounded-lg border-indigo-600 relative shadow-sm hover:shadow-lg shadow-indigo-600 hover:shadow-indigo-600'>
            <h2 className='absolute top-1 left-1 text-3xl font-medium text-indigo-600'>{name}</h2>
            <img src={logo} alt="quiz logo" />
            <div className='flex justify-between items-center m-2'>
                <h2 className='text-2xl font-medium text-indigo-600'>{total} Quiz</h2>
                <button onClick={handleStartQuiz} className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 py-3 px-8 rounded-lg text-white text-lg'>Start Quiz</button>
            </div>
        </div>
    );
};

export default QuizOption;