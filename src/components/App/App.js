import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import DetailsSerie from '../DetailsSerie/DetailsSerie';
import LesSeries from '../Series/LesSeries';
import Layout from '../Layout/Layout';
import './App.css';

const App = () => {
  const routes = [
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Navigate to='/series' replace/>
        },
        {
          path: 'series',
          element: <LesSeries/>,
          children: [
            {
              path: ':idSerie',
              element: <DetailsSerie/>,
            }
          ] 
        },
        {
            path: '*',
            element: <Navigate to='/series' replace/>
        }
      ]
    }
  ]
  return (
    <RouterProvider router={createBrowserRouter(routes)}/>
  );
}
export default App;