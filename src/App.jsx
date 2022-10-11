import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import PageNotFound from './Component/404Page/404Page'
import Blog from './Component/Blog/Blog'
import Home from './Component/Home/Home'
import Main from './Component/Layout/Main'
import QuizArea from './Component/QuizArea/QuizArea'
import Statistics from './Component/Statistics/Statistics'

const router = createBrowserRouter([
  {path: '/', element: <Main/>, loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),children: [
    {path: '/', element: <Home/>},
    {path: '/home', element: <Home/>},
    {path: '*', element: <PageNotFound/>},
    {path: '/home/quiz/:quizName/:quizId', element: <QuizArea/>, loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)},
    {path: '/statistics', element: <Statistics/>},
    
  ]}
])

function App() {
  return (
    <div className="bg-gray-50 h-screen">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
