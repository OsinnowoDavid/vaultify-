import React, { useEffect, useState } from 'react'
import search from "../assets/images/search.png"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import person from "../assets/images/person.png"
import { useQuery } from "react-query"
import axios from "axios"
import { useShopContext } from '../context'
import { toast } from "react-toastify"

function Administration() {
  const { backendUrl } = useShopContext()

  const { data, isLoading, isError, error } = useQuery("admin", () => {
    return axios.get(backendUrl + "/api/admin/getAllAdmin")
  })

  const [searchItems, setSearchItems] = useState("")
  const [filterProducts, setFilterProducts] = useState([])

  // Handle loading and error
  useEffect(() => {
    if (isError) toast.error(error.message)
    if (isLoading) toast.loading("Processing...")
  }, [isLoading, isError, error])

  // Update filtered admins when data is available
  useEffect(() => {
    if (data?.data?.admins) {
      setFilterProducts(data.data.admins)
    }
  }, [data])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/admin/deleteAdmin/${id}`)
      toast.success("Admin Deleted Successfully")
      setFilterProducts(prev => prev.filter(admin => admin._id !== id))
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchItems(term)
    const filtered = data?.data?.admins?.filter(admin =>
      admin.adminName.toLowerCase().includes(term) ||
      admin.adminRole.toLowerCase().includes(term) ||
      admin.adminEmail.toLowerCase().includes(term)
    )
    setFilterProducts(filtered)
  }

  const selection = (e) => {
    console.log("Selected:", e.target.checked)
  }

  return (
    <motion.div className='bg-gray-200 backdrop-blur-md shadow-lg rounded-xl p-6 border-black mt-10'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className='text-xl font-semibold text-sky-950 mb-6'>Manage Admin</h1>

      <div className='flex justify-between items-center mb-6 relative'>
        <h2 className='text-xl font-semibold text-sky-950'>All Admin</h2>

        <div className='relative'>
          <input
            type='text'
            placeholder='Search...'
            onChange={handleSearch}
            value={searchItems}
            className='rounded-lg px-4 py-2 placeholder-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-800'
          />
          <img src={search} alt="Search Icon" className='absolute right-3 top-2 w-5 h-5' />
        </div>

        <Link to="/AddAdmin" className='p-2 rounded-xl bg-sky-950 text-white hover:bg-white hover:text-sky-900'>
          + Add Admin
        </Link>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr className='text-sky-950'>
              <th></th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Image</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Admin Name</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Admin Role</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Delete</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Edit</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-300'>
            {filterProducts?.map((admin) => (
              <motion.tr key={admin._id} className='bg-white hover:bg-gray-100'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <td className='px-6 py-4'>
                  <input type='checkbox' onClick={selection} />
                </td>
                <td className='px-6 py-4'>
                  <img src={person} alt="Admin" className='w-10 h-10 rounded-full' />
                </td>
                <td className='px-6 py-4'>
                  <div>{admin.adminName}</div>
                  <p className='text-gray-500 text-sm'>{admin.adminEmail}</p>
                </td>
                <td className='px-6 py-4'>{admin.adminRole}</td>
                <td className='px-6 py-4'>
                  <button
                    onClick={() => handleDelete(admin._id)}
                    className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800'>
                    Delete
                  </button>
                </td>
                <td className='px-6 py-4'>
                  <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800'>
                    Edit
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default Administration
