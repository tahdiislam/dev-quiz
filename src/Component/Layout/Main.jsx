import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export const quizContext = createContext({})

const Main = () => {
  const quiz = useLoaderData()
  return (
        <quizContext.Provider value={{quiz}}>
          <div className='relative h-screen container mx-auto'>
            <Header/>
            <Outlet/>
            <Footer/>
          </div>
        </quizContext.Provider>
    );
};

export default Main;