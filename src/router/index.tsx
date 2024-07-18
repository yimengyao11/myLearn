import { Login } from '../page/login'
import { Index } from '../page/index'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])
