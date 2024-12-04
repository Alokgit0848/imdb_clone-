import React from 'react'
import Logo from '../MovieLogo.png'

import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex border space-x-8 items-center pl-5 px-4  '>
      
      <img className='w-[50px] bg-blue-700/60 rounded-full  ' src={Logo} alt="" />

      <Link className='text-blue-700/60 text-[18px] font-bold ' to="/">Movies</Link>

      <Link className='text-blue-700/60 text-[18px] font-bold' to="/watchlist">WatchList</Link>
    </div>
  )
}
export default Nav