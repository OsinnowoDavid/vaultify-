import React from 'react'
import {motion} from "framer-motion"
function Announcement() {
  return (
    <div className='mt-25 ml-5 pr-10 mb-20 '>
<h1 className='ml-5 mb-5 font-bold' >
  Community Announcement
</h1>
<motion.div className='bg-white pb-20 p-5  justify-center self-center rounded-2xl shadow-xl '
    initial={{ opacity:0,y:20}}
  
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
>
  
<form>
  <h1 className='m-5 font-semibold'> 
  
  <label>Announcement Title </label>
  <p>
<input   className='bg-gray-50 border-0.2 rounded-x w-lg p-1' placeholder='Descriptive title'></input >

</p>
  
  </h1 >


<h1 className='m-5 font-semibold'>
  <label>Category</label>
  <p><input className='bg-gray-50 border-0.2 rounded-x w-lg p-1'  type="text" placeholder='Maintenance Updates' /></p>
</h1>

<h1 className='m-5 font-semibold'>
  <label>
    Announcement Body
  </label>
  <p>
    <input  className='bg-gray-50 border-0.2 rounded-x w-lg p-1 h-20' placeholder='box'></input>
  </p>
</h1>
<h1 className='m-5 font-semibold'>
  <label>Public Date and Time</label>
  <p >
  <input  className='bg-gray-50 border-0.2 rounded-x w-lg p-1' placeholder='date'></input> 

    </p>
</h1>
<h1 className='m-5 font-semibold'>
  <label>Visibility Option</label>
  <p  >
  <input className='bg-gray-50 border-0.2 rounded-x w-lg p-1' placeholder=' All Residents'></input>

  </p>

</h1>
<div children="item-center justify-center ">
  <button className='bg-sky-800 rounded-2xl p-2 text-white' type='submit'> Publish</button >
</div>
</form>
</motion.div>
    </div>
  )
}

export default Announcement