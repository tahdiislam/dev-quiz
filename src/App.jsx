import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Component/Home/Home'
import Main from './Component/Layout/Main'

const router = createBrowserRouter([
  {path: '/', element: <Main/>, children: [
    {path: '/', element: <Home/>},
    {path: '/home', element: <Home/>}
  ]}
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
