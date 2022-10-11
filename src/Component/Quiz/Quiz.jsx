import React, { useState } from 'react';
import QuizOption from '../QuizSingleOption/QuizSingleOption';

const Quiz = ({quiz, setQuizAnswer}) => {
    const {options, question: initialQuestons, correctAnswer, id} = quiz;
    const questionModify01 = initialQuestons.split('<p>');
    const questionModify02 = questionModify01.join(' ');
    const questionModify03 = questionModify02.split('</p>')
    const question = questionModify03.join(' ')
    // console.log(question);
    return (
        <div className='border rounded-xl my-3 bg-indigo-100 shadow-md'>
              <h2 className='text-3xl font-medium py-4'>{question}</h2>
              <div className='flex flex-col items-start px-5 text-start'>
                {
                    options.map(option => <QuizOption option={option} id={id} key={id} setQuizAnswer={setQuizAnswer}/>)
                }
              </div>
        </div>
    );
};


export default Quiz;