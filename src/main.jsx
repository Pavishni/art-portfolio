import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import CategoryDetails from './components/CategoryDetails.jsx';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />, 
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      // Category details route
      {
        path: "/category/:categoryId",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <CategoryDetails />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />, 
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
