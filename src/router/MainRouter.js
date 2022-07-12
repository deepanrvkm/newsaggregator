import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import NewsList from '../pages/NewsList'
import Photos from '../pages/Photos'
import PageNotFound from '../pages/PageNotFound'


function MainRouter () {
  const Router = useRoutes([
    { path: '/', 
      element: <Home/> 
    },
    {
      path: '/news',
      element: <NewsList/>
    },
    {
      path: '/photos/',
      element: <Photos/>
    },
    {
      path: '*',
      element: <PageNotFound/>
    }
  ])
  return Router
}

export default MainRouter;