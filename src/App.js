import React from 'react';
import ReactDom from 'react-dom';
import { RouterProvider, Outlet, createBrowserRouter, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ThankYou from './Pages/ThankYou/ThankYou';
import Header from './Components/Header/Header';
import { createRoot } from 'react-dom/client';
import Companies from './Pages/Companies/Companies';

const AppComponent = () => {
  const location = useLocation();
  const excludeHeader = ['/login', '/signup', '/otp'];
  const renderHeader = !excludeHeader.includes(location.pathname);
  return (
    <>
      {renderHeader && <Header />}
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    errorElement: '404',
    // TODO : 404 page
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/thank-you',
        element: <ThankYou />,
      },
      {
        path: '/companies',
        element: <Companies />,
      }
    
    
    ],
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
// root.render(<AppComponent />);
