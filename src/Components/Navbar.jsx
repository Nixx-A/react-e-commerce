import { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Sidebar } from './CartSidebar'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  return (
    <>
      <header className='w-screen bg-slate-400 h-12 shadow-sm p-1.5'>
        <nav className='flex justify-between flex-row'>
          <div className='flex flex-row'>
            <RxHamburgerMenu
              onClick={() => setIsExpanded(!isExpanded)}
              className='text-xl cursor-pointer md:hidden'
            />
            <Link to={'/'} className='font-6xl md:block z-20'>Home</Link>
          </div>
          <div
            className={
              isExpanded
                ? 'duration-200 md:top-0 absolute w-screen left-0 top-8 bg-slate-400 md:duration-0 '
                : 'fixed -top-full w-screen  md:top-0 left-0 bg-slate-400 md:duration-0 duration-1000'
            }>
            <ul className='flex md:flex-row items-center justify-center flex-col p-1'>
              <li className='mr-4 dropdown'>
                <button className='dropbtn'>Technology</button>
                <div className='dropdown-content'>
                  <Link to={'/category/smartphones'}>smartphones</Link>
                  <Link to={'category/laptops'}>laptops</Link>
                </div>
              </li>
              <li className='mr-4 dropdown'>
                <button>Men</button>
                <div className='dropdown-content'>
                  <Link to={'category/mens-shirts'}>men shirts</Link>
                  <Link to={'category/mens-shoes'}>men-shoes</Link>
                  <Link to={'category/mens-watches'}>men-watches</Link>
                </div>
              </li>
              <li className='mr-4 dropdown'>
                <button>Women</button>
                <div className='dropdown-content'>
                  <Link to={'category/tops'}>Tops</Link>
                  <Link to={'category/womens-dresses'}>Women dresses</Link>
                  <Link to={'category/womens-bags'}>Women bags</Link>
                  <Link to={'category/womens-jewellery'}>Womens jewellery</Link>
                  <Link to={'category/womens-shoes'}>Women shoes</Link>
                  <Link to={'category/womens-watches'}>Women watches</Link>
                </div>
              </li>
              <li className='mr-4 dropdown'>
                <button>Vehicles</button>
                <div className='dropdown-content'>
                  <Link to={'category/automotive'}>automotive</Link>
                  <Link to={'category/motorcycle'}>motorcycle</Link>
                </div>
              </li>
              <li className='mr-4 dropdown'>
                <button>Variety</button>
                <div className='dropdown-content'>
                  <Link to={'category/sunglasses'}>sunglasses</Link>
                  <Link to={'category/groceries'}>groceries</Link>
                  <Link to={'category/fragrances'}>fragrances</Link>
                  <Link to={'category/skincare'}>skincare</Link>
                </div>
              </li>
              <li className='mr-4 dropdown'>
                <button>Home Decoration</button>
                <div className='dropdown-content'>
                  <Link to={'category/lighting'}>lighting</Link>
                  <Link to={'category/home-decoration'}>home decoration</Link>
                  <Link to={'category/furniture'}>furniture</Link>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <AiOutlineShoppingCart
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
              className='text-xl cursor-pointer md:fixed md:right-0 md:mt-1.5 md:mr-1  md:top-0'
            />
          </div>
        </nav>
      </header>
      <Sidebar isExpanded={sidebarExpanded} />
      <Outlet />
    </>
  )
}
