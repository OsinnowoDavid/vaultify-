import React from 'react'
import search from "../assets/images/search.png"
import {motion} from "framer-motion"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import person from "../assets/images/person.png"
import {useQuery} from "react-query"
import axios from "axios"
import { useShopContext } from '../context'
import {toast} from "react-toastify"



function Administration () {
  const {backendUrl}= useShopContext()
  const {data,loading, error} = useQuery("admin",()=>{
 return   axios.get(backendUrl +"/api/admin/getAllAdmin")
    })
if(error){
  toast.error(error.message)
}
if(loading){
  toast.loading("processing....")

}
if (data)(
  console.log(data.data.admins)
)

  // const [searchItems , SetSearchItems] =useState("");
  // const [filterProducts ,SetFilterProducts] =useState(data?.data?.admins)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/admin/deleteAdmin/${id}`)
      toast.success("Admin Deleted Successfully")
     window.location.reload()
    } catch (error) {
      toast.error(error.message)
    }
  }




  // const handleSearch=(e)=>{
  //   const term =e.target.value.toLowerCase()
  //   SetSearchItems(term)
  //  const filter= data.filter(admin => admin.adminName.toLocaleLowerCase().includes(term )|| 
  //   admin.adminRole.toLocaleLowerCase().includes(term ) ||
  //    admin.adminEmail.toLocaleLowerCase().includes(term ) )
  //    SetFilterProducts(filter)

  // }
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
<h1 className='text-xl font-semibold text-sky-950'>Manage Admin</h1>
    
    <div className=' flex justify-between items-center mb-6'>

  <h2 className='text-xl font-semibold text-sky-950'> All Admin</h2>
{/*   
  <div className='relative'>
    <input type='text' placeholder='Search Engine'
    // onChange={handleSearch}
    // value={searchItems}
     className='rounded-lg placeholder-sky-900 placeholder:p-5 focus:outline-none focus:ring-2 focus:ring-sky-800'></input>
  </div>
  <img className='absolute  ' sizes={10} sur={search} /> */}
  <Link to={"/AddAmin"} className= 'mr-30 p-2 rounded-xl mt-1 bg-sky-950 text-white hover:bg-white hover:text-sky-900 '>
  <button > + Add Admin</button>
  
  </Link>
</div>

<div className='overflow-x-auto'>
  <table className='min-w-full divide-y divide-grey-700'
  >
    <thead >

      <tr className='text-sky-950'>
        <th>
          
        </th>

        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
image
        </th>

        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
Admin name
        </th>

        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
Admin Role
        </th>

        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
Delete Admin

        </th>

        
        
        
        
        <th className='px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide'>
Edit Admin
        </th>

      </tr>
    </thead>
    <tbody className='min-w-full max-w-full divide-y divide-grey-700 '>
      {data?.data?.admins.map((admin) => (
        <motion.tr key={admin.adminName} className='bg-white hover:bg-gray-100 '
        initial={{ opacity:0,y:20}}
  
        animate={{opacity:1,y:0}}
        transition={{delay:0.2}}
        >
          <button type='checkbox' className='p-2 m-5 whitespace-nowrap text-sm w-0.5 border-1 font-medium text-grey-900' onClick={selection}></button>

          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900'><img src={person}/></td>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900'>{admin.adminName}
            
          <p>{admin.adminEmail}</p>

          </td>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900'>{admin.adminRole}</td>
          <button   onClick={() => handleDelete(admin._id)}
className='px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900'>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900  hover:bg-red-700 hover:text-white'>Delete</td>

          </button>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-shadow-green-500  hover:bg-green-700 hover:text-white'>Edit</td>
        </motion.tr>
      ))}
      <pigination/>

    </tbody>
  </table>
</div>
</motion.div>  )
}

export default Administration 