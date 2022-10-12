import React, { useContext } from 'react';
import { quizContext } from '../Layout/Main';
import QuizOption from '../QuizOption/QuizOption';
import Lottie from 'lottie-react';
import quiz from '../../assets/quiz.json';

const Home = () => {
    const quizOptionsData = useContext(quizContext)
    const quizOptions = quizOptionsData.quiz.data;
    // console.log(quizOptions);
    return (
        <div>
          <div className='flex items-center mx-5'>
            <h1 className='text-3xl font-semibold md:text-5xl md:font-bold text-indigo-600 md:mt-20'>Start your Quiz</h1>
            <div className='w-2/5 md:w-2/5 md:-ml-16'>
              <Lottie animationData={quiz} loop={true}/>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-3'>
            {
              quizOptions.map(quizOption => <QuizOption key={quizOption.id} quizOption={quizOption}/>)
            }
          </div>
        </div>
    );
};

export default Home;