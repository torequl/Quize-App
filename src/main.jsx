import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import route from './router/Route'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </StrictMode>,
)
