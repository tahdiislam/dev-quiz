import React, { useState } from 'react';

const Quiz = ({quiz}) => {
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
                    options.map(option => <QuizOption option={option} id={id} key={id}/>)
                }
              </div>
        </div>
    );
};

const QuizOption = ({option, id}) =>{
    return(
        <label className='text-2xl border rounded-xl py-2 px-3 my-1 hover:shadow-lg hover:bg-indigo-200'><input className='h-6 w-6 mr-3' type="radio" name={id} id={id} value={option}/>{option}</label>
    )
}

export default Quiz;