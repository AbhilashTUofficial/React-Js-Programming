import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import NotFoundPage from './Pages/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:'/Page1',
    element:<Page1/>
  },
  {
    path:'/Page2/:id',
    element:<Page2/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
