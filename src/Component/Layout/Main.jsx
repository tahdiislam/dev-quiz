import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

export const quizContext = createContext({})

const Main = () => {
  const quiz = useLoaderData()
  return (
        <quizContext.Provider value={{quiz}}>
          <div>
            <Header/>
            <Outlet/>  
          </div>
        </quizContext.Provider>
    );
};

export default Main;