import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github from './Components/Github/Github.jsx'
import Home from './Components/Home/Home.jsx'
import User from './Components/User/User.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }, {
        path: '/user/:id',
        element: <User />,
      },
      {
        path: '/github',
        element: <Github />,
      }

    ]
  }
])

//loader action is means you can write the full api call here and then it will be called when the page is loaded like fetch and all . so like mouse moves on elemnets the api call is made 
//useLoaderData hook 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
