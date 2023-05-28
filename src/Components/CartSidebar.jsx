import { useContext } from 'react'
import { CartContext } from '../context/Context'

/* eslint-disable react/prop-types */
export function Sidebar({ isExpanded }) {
  const cart = useContext(CartContext)
  console.log(cart)
  return (
    <aside
      className={
        isExpanded
          ? 'fixed right-0 md:top-8 duration-300 h-full bg-slate-800 w-72'
          : 'bg-slate-400 fixed md:top-8 -right-full h-screen duration-500 '
      }>
      <div className='overflow-y-scroll h-screen'>
        {cart.cart.map(item => {
          return (
            <div
              className='text-white flex justify-center flex-col items-center m-2 '
              key={item.id}>
              <img src={item.img} />
              <h2>{item.title}</h2>
              <strong>{item.price}</strong>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
