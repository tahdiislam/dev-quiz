import React from 'react';

const Quiz = ({quiz}) => {
    const {options, question: initialQuestons, correctAnswer} = quiz;
    const questionModify01 = initialQuestons.split('<p>');
    const questionModify02 = questionModify01.join(' ');
    const questionModify03 = questionModify02.split('</p>')
    const question = questionModify03.join(' ')
    console.log(question);
    return (
        <div>
              <h2>{question}</h2>
        </div>
    );
};

export default Quiz;