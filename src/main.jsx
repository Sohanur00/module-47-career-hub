import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componants/roots/Root';
import Home from './componants/Home/Home';
import ApplyedJobs from './componants/Applyed/ApplyedJobs';
import ErrorPage from './componants/ErrorPage/ErrorPage';
import JobDetails from './componants/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home> ,
      },
      {
        path:"/applyed",
        element: <ApplyedJobs></ApplyedJobs>,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path:'/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../public/jobs.json')
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
