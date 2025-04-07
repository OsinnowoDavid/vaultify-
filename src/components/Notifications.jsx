import React from 'react'
import {motion} from "framer-motion"
const ALARM=[
    { name:"fire Alarm", location:"Road 5, Block 8"},
    { name:"Flood", location:"Road 10, Block 8"},
    { name:"No water ", location:"Road 5, Block 8"},
    { name:"No water ", location:"Road 5, Block 8"},
    { name:"No water ", location:"Road 5, Block 8"},
    { name:"No water ", location:"Road 5, Block 8"},
    { name:"No water ", location:"Road 5, Block 8"},
    { name:"No water ", location:"Road 5, Block 8"},
]
const limitDate = ALARM.slice(0,3)
function Notifications() {
  return (
    <>
    <div className='bg-gray-200 w-96 backdrop-blur-md shadow-2xl shadow-x h-96 p-5 rounded-xl border-grey-700'>
        <h1>
            Recent Notifications
        </h1>
        <h2 className='text-xl'>General</h2>
    
    {
        limitDate.map((items) =>(

<motion.div key={items} 
    initial={{ opacity:0,y:20}}
  
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
>

    <div className='p-2 rounded-xl bg-white m-2 flex '>
        <div className='m-5'>
        <h1>asfdf</h1>

        </div>
<div>
<h2>{items.name}</h2>
<h2>{items.location}</h2>
    
</div>
    </div>

</motion.div>
        )

        )
    }
    </div>
    </>


  )
}

export default Notifications
