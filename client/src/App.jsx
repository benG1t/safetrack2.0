import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  AddProduct,
  AllProducts,
  Cart,
  DashboardLayout,
  Error,
  Home,
  HomeLayout,
  Landing,
  Products,
  Profile,
  SingleProduct,
  Stats,
  Register,
  Login,
  EditProduct,
  CheckoutPage,
} from './pages'

// import { loader as homeLoader } from './pages/HomeLayout'
import { loader as statsLoader } from './pages/Stats'
import { loader as dashboardLoader } from './pages/DashboardLayout'
import { loader as allProductsLoader } from './pages/AllProducts'
import { loader as editProductLoader } from './pages/EditProduct'
import { action as editProductAction } from './pages/EditProduct'
import { action as registerAction } from './pages/Register'
// import { action as loginAction } from './pages/Login'
import { action as profileAction } from './pages/Profile'
import { action as addProductAction } from './pages/AddProductPage'
import { action as deleteProductAction } from './pages/DeleteProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    // loader: homeLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddProduct />,
            action: addProductAction,
          },
          {
            path: 'stats',
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: 'all-products',
            element: <AllProducts />,
            loader: allProductsLoader,
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction,
          },
          {
            path: 'edit-product/:id',
            element: <EditProduct />,
            loader: editProductLoader,
            action: editProductAction,
          },
          { path: 'delete-product/:id', action: deleteProductAction },
        ],
      },
    ],
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
    // action: loginAction,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
