import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizArea = () => {
    const quizData = useLoaderData()
    const allQuiz = quizData.data.questions
    console.log(allQuiz[0]);
    return (
        <div>
            <h1 className='text-3xl font-semibold my-4'>Good Luck ✅</h1>
            <div>
                {
                    allQuiz.map(quiz => <Quiz key={quiz.id} quiz={quiz}/>)
                }
            </div>
        </div>
    );
};

export default QuizArea;