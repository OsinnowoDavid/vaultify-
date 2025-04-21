import React, { useState, useEffect } from 'react'
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
  const { data, isLoading, error } = useQuery("admin", () =>
    axios.get(backendUrl + "/api/admin/getAllAdmin",{
       withCredentials: true
    })
  )
  if (data) {
    console.log(data)
  }
  // const [searchItems, setSearchItems] = useState("")
  // const [filterProducts, setFilterProducts] = useState([])
  // const [selectedAdmins, setSelectedAdmins] = useState([])

  // Handle errors and show toasts
  useEffect(() => {
    if (error) {
      toast.error(error.message, {
        theme: "colored",
        style: { backgroundColor: "#ef4444", color: "#fff", fontWeight: "bold" }
      })
    }
  }, [error])

  // Update filterProducts when data changes
  // useEffect(() => {
  //   if (data?.data?.admins) {
  //     setFilterProducts(data.data.admins)
  //   }
  // }, [data])

  // Debounced search handler
  // useEffect(() => {
  //   const debounceTimer = setTimeout(() => {
  //     const filtered = data?.data?.admins.filter((admin) =>
  //       admin.adminName.toLowerCase().includes(searchItems.toLowerCase())
  //     )
  //     setFilterProducts(filtered)
  //   }, 500) // debounce delay (500ms)

  //   return () => clearTimeout(debounceTimer)
  // }, [searchItems, data?.data?.admins])

  // const handleSearch = (e) => {
  //   const value = e.target.value
  //   setSearchItems(value)
  // }

  // Single select admin for deletion
  const handleSingleSelect = (id) => {
    setSelectedAdmins((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((adminId) => adminId !== id)
        : [...prevSelected, id]
    )
  }

  // Handle deleting a single admin
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/admin/deleteAdmin/${id}`)
      toast.success("Admin Deleted Successfully", {
        theme: "colored",
        style: { backgroundColor: "#22c55e", color: "#fff", fontWeight: "bold" }
      })
      window.location.reload()
    } catch (error) {
      toast.error(error.message, {
        theme: "colored",
        style: { backgroundColor: "#ef4444", color: "#fff", fontWeight: "bold" }
      })
    }
  }

  // Handle bulk delete
  const handleBulkDelete = async () => {
    try {
      await Promise.all(
        selectedAdmins.map((id) =>
          axios.delete(`${backendUrl}/api/admin/deleteAdmin/${id}`)
        )
      )
      toast.success("Selected Admins Deleted", {
        theme: "colored",
        style: { backgroundColor: "#22c55e", color: "#fff", fontWeight: "bold" }
      })
      window.location.reload()
    } catch (error) {
      toast.error("Failed to delete selected admins", {
        theme: "colored",
        style: { backgroundColor: "#ef4444", color: "#fff", fontWeight: "bold" }
      })
    }
  }

  // Loading and error UI
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading admins: {error.message}</p>

  return (
    <motion.div className='bg-gray-200 backdrop-blur-md shadow-lg rounded-xl p-6 border-black mt-10'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className='text-xl font-semibold text-sky-950'>Manage Admin</h1>

      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-sky-950'>All Admin</h2>

        <div className='relative flex items-center'>
          <input
            type='text'
            placeholder='Search Admin'
            // onChange={handleSearch}
            // value={searchItems}
            className='rounded-lg placeholder-sky-900 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-sky-800'
          />
          <img src={search} alt="search" className='absolute left-2 w-5' />
        </div>

        <div className='flex gap-4'>
          {/* <button
            onClick={handleBulkDelete}
            // disabled={selectedAdmins.length === 0}
            className={`p-2 rounded-xl ${selectedAdmins.length === 0
              ? 'bg-gray-400 text-white'
              : 'bg-red-700 hover:bg-red-800 text-white'
              }`}
          >
            Delete Selected
          </button> */}

          <Link to={"/AddAdmin"} className='p-2 rounded-xl bg-sky-950 text-white hover:bg-white hover:text-sky-900'>
            + Add Admin
          </Link>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr className='text-sky-950'>
              <th className='px-4 py-3'></th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide'>Image</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide'>Admin Name</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide'>Admin Role</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide'>Delete</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide'>Edit</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-700'>
            {

              data?.data.admins.map((admin) => (
                <motion.tr key={admin._id} className='bg-white hover:bg-gray-100'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <td className='px-4 py-4'>
                    {/* <input
                      type='checkbox'
                      checked={selectedAdmins.includes(admin._id)}
                      onChange={() => handleSingleSelect(admin._id)}
                    /> */}
                  </td>

                  <td className='px-6 py-4 whitespace-nowrap'>
                    <img src={person} alt="admin" className='w-10 h-10 rounded-full' />
                  </td>

                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    {admin.adminName}
                    <p className='text-gray-500 text-xs'>{admin.adminEmail}</p>
                  </td>

                  <td className='px-6 py-4 whitespace-nowrap'>{admin.adminRole}</td>

                  <td className='px-6 py-4 whitespace-nowrap'>
                    <button
                      onClick={() => handleDelete(admin._id)}
                      className='text-red-600 hover:bg-red-700 hover:text-white px-3 py-1 rounded'
                    >
                      Delete
                    </button>
                  </td>

                  <td className='px-6 py-4 whitespace-nowrap'>
                    <button className='text-green-600 hover:bg-green-700 hover:text-white px-3 py-1 rounded'>
                      Edit
                    </button>
                  </td>
                </motion.tr>
              
              ))
            }
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default Administration
