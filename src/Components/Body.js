import React from 'react'
import { createBrowserRouter,  } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import QueryBuilder from './QueryBuilder'

const Body = () => {

  const appRouter = createBrowserRouter([
      {
          path: "/",
          element: <Login />
      },
      {
          path: "/browse",
          element: <Browse />
      },
      {
        path: "/queryBuilder",
        element: <QueryBuilder />
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
