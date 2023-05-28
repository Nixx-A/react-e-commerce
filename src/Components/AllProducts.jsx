import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../Services/getProducts'
import { Link } from 'react-router-dom'
import './AllProducts.css'
import { Sidebar } from './CartSidebar'
import { useContext } from 'react'
import { CartContext } from '../context/Context'

export function AllProducts() {
  const { cart, setCart } = useContext(CartContext)
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  if (isLoading) {
    return <p className='text-red-500 bottom-0 left-0 absolute'>Loading...</p>
  }

  if (isError) {
    return <span className='absolute bottom-0'>{error.message}</span>
  }

  return (
    <div className='grid-products'>
      {data.products.map(product => {
        return (
          <div
            className='shadow-box flex justify-center flex-col items-center mt-4 h-70 m-6 p-2 w-auto'
            key={product.id}>
            <Link
              to={`/product/${product.id}`}
              className='  flex justify-center flex-col align-middle items-center mt-4 h-60 m-6 p-2 w-auto'>
              <img
                src={product?.thumbnail}
                alt={product.title}
                className='h-5/6 px-6'
              />
              <h2>{product.title}</h2>
              <strong>{`$${product.price}`}</strong>
            </Link>
            <button
              onClick={() => {
                setCart([
                  ...cart,
                  {
                    id: product.id,
                    img: product.thumbnail,
                    title: product.title,
                    price: product.price
                  }
                ])
              }}
              className='bg-black text-white p-2 hover:bg-gray-700 duration-200 rounded-md mt-4'>
              Add to cart
            </button>
          </div>
        )
      })}
    </div>
  )
}
