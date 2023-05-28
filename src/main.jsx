import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Product } from './Pages/Product.jsx'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from './Components/Navbar.jsx'
import { Category } from './Pages/Category.jsx'
import { CartProvider } from './context/Context.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <h1 className='text-2xl text-pink-300'>Error</h1>,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: 'category/:category',
        element: <Category />
      },
      {
        path: '/product/:id',
        element: <Product />
      }
    ]
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </CartProvider>
)
