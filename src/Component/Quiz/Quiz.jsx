import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import QuizOption from '../QuizSingleOption/QuizSingleOption';
import toast, { Toaster } from 'react-hot-toast';

const Quiz = ({quiz, setQuizAnswer, quizAnswer}) => {
    const {options, question: initialQuestons, correctAnswer, id} = quiz;
    const questionModify01 = initialQuestons.split('<p>');
    const questionModify02 = questionModify01.join(' ');
    const questionModify03 = questionModify02.split('</p>')
    const question = questionModify03.join(' ')
    // console.log(question);
    const notify = () => toast(correctAnswer, {duration:3000})
    return (
        <div className='border rounded-xl my-3 bg-indigo-100 shadow-md'>
              <div className='flex items-center justify-between mx-4'>
                <h2 className='text-3xl font-medium py-4'>{question}</h2>
                <div>
                    <EyeIcon onClick={notify} className='h-8 w-8 text-indigo-600 cursor-pointer'/>
                    <Toaster/>
                </div>
              </div>
              <div className='flex flex-col items-start px-5 text-start'>
                {
                    options.map(option => <QuizOption option={option} id={id} key={id} setQuizAnswer={setQuizAnswer} quizAnswer={quizAnswer} correctAnswer={correctAnswer}/>)
                }
              </div>
        </div>
    );
};


export default Quiz;