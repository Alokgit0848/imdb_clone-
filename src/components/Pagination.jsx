import React from 'react'


function Pagination({ pageNo, handleNext, handlePrev }) {
  return (
    <div className='bg-gray-400 text-center p-2 mt-5  flex justify-center font-bold '> 

      <div onClick={handlePrev} className='px-8 cursor-pointer'><i className="fa-solid fa-arrow-left"></i></div>
      <div className='text-xl'>{pageNo}</div>
      <div  className='px-8 cursor-pointer' onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></div>

     </div>
  );
}

export default Pagination