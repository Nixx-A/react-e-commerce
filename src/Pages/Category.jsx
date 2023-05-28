import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../Services/getProducts'
import { Link, useParams } from 'react-router-dom'

export function Category() {
  const { category } = useParams()

  const { data, isLoading, error, isError } = useQuery({
    queryKey: [category],
    queryFn: () => getCategories(category)
  })

  if (isLoading) {
    return <p className='text-red-500 bottom-0 left-0 absolute'>Loading...</p>
  }

  if (isError) {
    return <span className='absolute bottom-0'>{error.message}</span>
  }

  return (
    <div className='grid-products mt-11'>
      {data.products.map(product => {
        return (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className=' shadow-box flex justify-center flex-col align-middle items-center mt-8 h-60 m-6 p-2 w-auto'>
            <img
              src={product?.thumbnail}
              alt={product.title}
              className='h-5/6 px-6'
            />
            <h2>{product.title}</h2>
            <strong>{`$${product.price}`}</strong>
          </Link>
        )
      })}
    </div>
  )
}
