import React from 'react'
import Statistics from './Statistics'
import Notifications from "./Notifications"

function Chart() {
  return (
    <div className='flex gap-5 lg:flex-col-2 xl:flex-col-1'>
<Statistics/>
   <Notifications/>

    </div>
  )
}

export default Chart