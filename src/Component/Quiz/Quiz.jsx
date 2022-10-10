import React from 'react';

const Quiz = ({quiz}) => {
    const {options, question: initialQuestons, correctAnswer, id} = quiz;
    const questionModify01 = initialQuestons.split('<p>');
    const questionModify02 = questionModify01.join(' ');
    const questionModify03 = questionModify02.split('</p>')
    const question = questionModify03.join(' ')
    console.log(question);
    return (
        <div className='border'>
              <h2 className='text-3xl font-medium'>{question}</h2>
              <div >
                {
                    options.map(option => <QuizOption option={option} id={id} key={id}/>)
                }
              </div>
        </div>
    );
};

const QuizOption = ({option, id}) =>{
    return(
        <label className='text-2xl'><input className='h-6 w-6' type="radio" name={id} id={id} value={option}/>{option}</label>
    )
}

export default Quiz;