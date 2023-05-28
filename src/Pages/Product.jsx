import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProduct } from '../Services/getProducts'

export function Product() {
  const { id } = useParams()

  const { data, isLoading, error, isError } = useQuery({
    queryKey: [id],
    queryFn: () => getProduct(id)
  })

  if (isLoading) {
    return <p className='text-red-500 bottom-0 left-0 absolute'>Loading...</p>
  }

  if (isError) {
    return <span className='absolute bottom-0'>{error.message}</span>
  }

  /* const imagesUrl = []
  data.images.map(img => imagesUrl.push(img)) */

  return (
    <article className='flex flex-col  justify-center items-center'>
      <img src={data.thumbnail} alt='' />
      <h2 className='ml-2 font-semibold'>{data.title}</h2>
      <strong className='font-semibold'>{`$${data.price}`}</strong>
      <strong className='font-semibold'>{data.description}</strong>
      <button className='bg-black text-white p-2 hover:bg-gray-700 duration-200 rounded-md mt-4'>
        Add to cart
      </button>
    </article>
  )
}
