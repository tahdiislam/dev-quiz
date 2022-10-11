import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizArea = () => {
    const [quizAnswer, setQuizAnswer] = useState('')
    const quizData = useLoaderData()
    const allQuiz = quizData.data.questions
    console.log(allQuiz[0]);
    return (
        <div>
            <h1 className='text-3xl font-semibold my-4'>Good Luck ✅</h1>
            <div className='w-2/4 mx-auto my-6'>
                {
                    allQuiz.map(quiz => <Quiz key={quiz.id} quiz={quiz} setQuizAnswer={setQuizAnswer} quizAnswer={quizAnswer}/>)
                }
            </div>
        </div>
    );
};

export default QuizArea;