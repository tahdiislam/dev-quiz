import React, { useContext } from 'react';
import { quizContext } from '../Layout/Main';
import QuizOption from '../QuizOption/QuizOption';

const Home = () => {
    const quizOptionsData = useContext(quizContext)
    const quizOptions = quizOptionsData.quiz.data;
    // console.log(quizOptions);
    return (
        <div>
          <h1 className='text-5xl font-bold my-7'>Start your Quiz</h1>
          <div>
            {
              quizOptions.map(quizOption => <QuizOption key={quizOption.id} quizOption={quizOption}/>)
            }
          </div>
        </div>
    );
};

export default Home;