import { useEffect, useState } from 'react'
import { getQuote } from '../Services/getQuote'
import './Quote.css'
import { useQuery } from '@tanstack/react-query'

export function Quote() {
  const { data, isError, error } = useQuery({
    queryKey: ['quote'],
    queryFn: getQuote
  })

  if (isError) {
    return <span>{error.message}</span>
  }

  return (
    <div className='flex h-64 flex-col w-full'>
      <div className='w-full h-full flex flex-col bg-gradient-to-b from-gray-700 via-gray-900 to-black  justify-center items-center text-white'>
        {data && (
          <span className='text-base font-mono md:text-lg lg:text-2xl w-5/6 text-center mb-2'>{`"${data.quote}"`}</span>
        )}
        {data && (
          <span className='text-base font-mono md:text-lg lg:text-2xl w-1/2 text-center font-semibold'>{`- ${data.author}`}</span>
        )}
      </div>
    </div>
  )
}
