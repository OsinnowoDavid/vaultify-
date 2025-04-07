import React from 'react'
import {motion} from "framer-motion"
const DASHBOARD =[
    { name:"Registered Residents",total :"70",red:"New Residents This Month"},
    { name:"Security Staff",total :"8",red:"Pending Access Approvals"},
    { name:"Pending Access Approvals",total :"5",red:"Pending Access Approvals"},
    { name:"Alerts Raised Today",total :"10",red:"Unresolved Alerts Count"},
  ]
function aggregation() {
  return (
    <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  flex-wrap mr-5'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    >
       {
        DASHBOARD.map((item) => (
          <motion.div key={item.name} className='bg-white rounded-lg shadow-cyan-100 shadow-md p-4 mb-4 w-60 '
    whileHover={{y:-5, boxShadow:"0 25px 50px -12px "}}
    >
            <h2 className='text-black font-semibold   '>{item.name}</h2>
            <p className='text-2xl font-bold'>{item.total}</p>

            <p className='text-gray-600 bg-gray-200 p-2 text-xs mr-5 '>{item.red}</p>
          </motion.div>
        ))
       }
    </motion.div>
  )
}

export default aggregation