import React from 'react'
import search from "../assets/images/search.png"
import {motion} from "framer-motion"
import { useState } from 'react'
const VISITORS =[
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Active",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Pending",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Active",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Pending ",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Pending ",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Pending ",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Active",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Pending ",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Pending ",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Active",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Active",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Pending ",paymentDate:"July 9, 2025"},
  {name:"Mark John", Transaction:"xy2982",Email:"john@gmail.com", UnitNumber:"x1234", paymentType:"Utility Bill", amountPaid:"$ 60,000", VisitStatus:"Pending ",paymentDate:"July 9, 2025"},
]

function Payment() {
  const [searchItems , SetSearchItems] =useState("");
  const [filterProducts ,SetFilterProducts] =useState(VISITORS)

  const handleSearch=(e)=>{
    const term =e.target.value.toLowerCase()
    SetSearchItems(term)
   const filter= VISITORS.filter(visitor => visitor.name.toLocaleLowerCase().includes(term )|| 
    visitor.ResidentHost.toLocaleLowerCase().includes(term ) ||
     visitor.AccessCode.toLocaleLowerCase().includes(term ) )
     SetFilterProducts(filter)

  }
  const selection =(e)=>{


    e.preventDefault()
    e.target.value =! e.target.value
    console.log(e.target.value)
    console.log("Selected")
  

  }

  return (
<motion.div className='bg-gray-200 backdrop-blur-md shadow-lg  rounded-xl p-6 border-black mt-10 '
  initial={{ opacity:0,y:20}}
  
  animate={{opacity:1,y:0}}
  transition={{delay:0.2}}

>
<h1  className='text-x font-semibold text-sky-950 mb-2'>
  Payment Management
</h1>
  <div className=' flex justify-between items-center mb-6'>

  <h2 className='text-x font-semibold text-sky-950'> All Users</h2>
  <div className='relative'>
    <input type='text' placeholder='Search Engine'
    onChange={handleSearch}
    value={searchItems}
     className='rounded-lg placeholder-sky-900 placeholder:p-5 focus:outline-none focus:ring-2 focus:ring-sky-800'></input>
  </div>
  <img className='absolute  ' sizes={10} sur={search} />
</div>
<div className='overflow-x-auto'>
  <table className='min-w-full divide-y divide-grey-700'
  >
    <thead >

      <tr className='text-sky-950'>
        <th>
          
        </th>
        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
 resident name
        </th>

        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
transaction id
        </th>

        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
        Unit Number

        </th>

        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
        payment type
        </th>
        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
        amount Paid
        </th>
        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
visit status
        </th>
        
        
        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
        payment Date
        </th>

      </tr>
    </thead>
    <tbody className='min-w-full max-w-full divide-y divide-grey-700 '>
      {filterProducts.map((visitor) => (
        <motion.tr key={visitor.name} className='bg-white hover:bg-gray-100 '
        initial={{ opacity:0,y:20}}
  
        animate={{opacity:1,y:0}}
        transition={{delay:0.2}}
        >
          <button type='checkbox' className='p-2 m-5 whitespace-nowrap text-sm w-0.5 border-1 font-medium text-grey-900' onClick={selection}></button>

          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900'>{visitor.name}
          <p>{visitor.Email}</p>

          </td>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900'>{visitor.Transaction}</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900'>{visitor.UnitNumber}</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900'>{visitor.paymentType}</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900'>{visitor.amountPaid}</td>
          <td className={`p-2 whitespace-nowrap text-sm font-medium text-grey-900 ${visitor.VisitStatus ==="Active" ? "bg-green-800 text-white":"bg-red-800 text-white"}`}>{visitor.VisitStatus}</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900'>{visitor.paymentDate}</td>
        </motion.tr>
      ))}

    </tbody>
  </table>
</div>
</motion.div>  )
}

export default Payment