import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import PageNotFound from './Component/404Page/404Page'
import Home from './Component/Home/Home'
import Main from './Component/Layout/Main'
import QuizArea from './Component/QuizArea/QuizArea'

const router = createBrowserRouter([
  {path: '/', element: <Main/>, loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),children: [
    {path: '/', element: <Home/>},
    {path: '/home', element: <Home/>},
    {path: '*', element: <PageNotFound/>},
    {path: '/quiz/:quizName/:quizId', element: <QuizArea/>}
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
