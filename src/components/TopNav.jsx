import React from 'react'
import  search from "../assets/images/search.png"
import blackIcon from "../assets/images/blackIcon.png"
import person from "../assets/images/person.png"
function TopNav() {
  const overlay =() =>{
    <h1>
      hello
    </h1>
  }
  return (
    <div className='flex justify-between items-center bg-white shadow-md p-2 fixed top-0 left-0 right-0 z-5 flex'>
<div className='flex items-center '>
    <input type="text" placeholder="Search..." className='border border-gray-300 rounded-md p-2 color-black ml-64' />

    <img src={search} alt="search" onClick={overlay} className='-ml-6'/>

    <img src={blackIcon} alt="sidebarIcon" className='justify-items-end ml-96'/>
    <h1 className='ml-5'>Manage widgets</h1>

    <img src={person} alt="sidebarIcon" className='justify-items-end ml-5'/>
</div>
    </div>
  )
}

export default  TopNav
