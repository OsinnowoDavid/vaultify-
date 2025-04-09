import React from 'react'
import { Link } from 'react-router-dom'
function LostAndFound() {
  return (
    <div className='mt-25'>

        <h1 className='ml-20 font-bold text-sky-950'>Lost & Found Management</h1>

        <div className='flex gap-5 ml-20 mt-10'>
            <Link to="/Lost">
            <div className='bg-sky-900 text-white shadow-sky-900 shadow-lg rounded-xl hover:bg-white hover:text-sky-950   p-5 ' > 

<h1 className=' justify-center pl-10 pr-10'>
Lost Items
    
    </h1>            </div>
    </Link>


<Link to="/Found">

            <div  className='bg-sky-900 text-white shadow-sky-900 shadow-lg rounded-xl  hover:bg-white hover:text-sky-950'>

<h1 className='p-5 w-50 justify-center ml-10'>
found Items

    </h1>            </div>
    </Link>


        </div>
    </div>
  )
}

export default LostAndFound 