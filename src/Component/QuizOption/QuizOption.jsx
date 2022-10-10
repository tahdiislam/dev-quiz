import React from 'react';

const QuizOption = ({quizOption}) => {
    const {name, logo, total} = quizOption;
    return (
        <div className='border'>
            <h2 className='text-3xl font-medium'>{name}</h2>
            <img src={logo} alt="" />
        </div>
    );
};

export default QuizOption;