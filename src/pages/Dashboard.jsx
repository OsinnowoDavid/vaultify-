import React from 'react'

import Aggregation from '../components/aggregation'
import Chart from '../components/Chart'
import ToDoList from '../components/ToDoList'
function Dashboard() {
  return (
    <div className='mt-25 ml-5 pr-10 mb-20'>
      <h1 className='text-3xl font-bold pt-6'>Dashboard</h1>

{/* the dashboard calculations */}
<Aggregation/>
<Chart/>
{/* <ToDoList/> */}
    </div>
  )
}

export default Dashboard