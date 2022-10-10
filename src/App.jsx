import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import PageNotFound from './Component/404Page/404Page'
import Home from './Component/Home/Home'
import Main from './Component/Layout/Main'

const router = createBrowserRouter([
  {path: '/', element: <Main/>, loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),children: [
    {path: '/', element: <Home/>},
    {path: '/home', element: <Home/>},
    {path: '*', element: <PageNotFound/>}
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
