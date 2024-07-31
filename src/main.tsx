import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

//Public
import { Home } from './Pages/Home/index.tsx';

//Private
import { Checkout } from './Pages/Checkout/index.tsx';
import { Success } from './Pages/Success/index.tsx';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/checkout',
      element: <Checkout />
    },
    {
      path: '/Success',
      element: <Success />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
