import React from 'react'

function Spinner() {
  return (
    // <div>
    //   <div className='animate-ping w-16 h-16 m-8 rounded-full bg-sky-600'></div>
    // </div>
    <div className="flex justify-center items-center h-32">
        <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin border-blue-800"></div>
    </div>
  )
}

export default Spinner
