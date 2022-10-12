import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

export const quizContext = createContext({})

const QuizArea = () => {
    const [answer, setAnswer] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);

    // quiz select handler
    const handleSetAnswer = (id, value) => {
        const alreadyAdded = answer.find(a => a === id)
        if(alreadyAdded){
            return;
        }else{
            const newAnswer = [...answer, id]
            setAnswer(newAnswer)
            if(!!value){
                setCorrectAnswer(p => p + 1)
            }else{
                setWrongAnswer(p => p + 1)
            }
        }
    }
    // add correct handle
    const quizData = useLoaderData()
    const allQuiz = quizData.data.questions
    // console.log(allQuiz[0]);

    return (
        <quizContext.Provider value={{handleSetAnswer, answer}}>
        <div>
            <h1 className='text-4xl font-semibold my-4 text-green-500'>Good Luck</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6 md:my-6 mx-2 md:mx-6'>
            <div className='md:col-span-1 border md:sticky md:top-16 h-40 p-4 rounded-xl bg-indigo-100 shadow-lg'>
                <h1 className="text-3xl font-semibold">Your Result</h1>
                <div>
                    <h3 className='text-xl font-semibold text-green-500'>Correct: {correctAnswer}</h3>
                    <h3 className='text-xl font-semibold text-fuchsia-500'>Wrong: {wrongAnswer}</h3>
                </div>
            </div>
            <div className='w-full md:col-span-2 mx-auto'>
                {
                    allQuiz.map(quiz => <Quiz key={quiz.id} quiz={quiz} setAnswer={setAnswer}/>)
                }
            </div>
            </div>
        </div>
        </quizContext.Provider>
    );
};

export default QuizArea;