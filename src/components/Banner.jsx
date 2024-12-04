import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[70vh] bg-cover bg-center border border-8 m-2 p-2 ' style={{backgroundImage: 'url(https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/02/marvel-2.jpg?fit=1200%2C630&ssl=1)'}}>

      <div className="text-white text-opacity-85 text-xl bg-black-500/60 flex justify-center my-[28rem] text-center p-1 font-bold w-full ">Avenger</div>
        
    </div>
  )
}

export default Banner