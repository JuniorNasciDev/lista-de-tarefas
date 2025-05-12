import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


import Adiciona from './components/Adiciona/index.jsx'
import Lista from './components/Lista/index.jsx'

const router = createBrowserRouter([  
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path: "/",
        element:<Adiciona/>
      },
      {
        path: "/list",
        element:<Lista/>
      },
    ]
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
