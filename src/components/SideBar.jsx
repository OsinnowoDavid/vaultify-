import React from 'react'
import images from "../assets/properties"
import { href, Link } from 'react-router-dom'
import {color, motion} from "framer-motion"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import Image from "react"
import sideBARicons from "../assets/images/sidebarIcons.png"

const SIDEBAR_ITEMS =[
    
    {name:"Dashboard", icon:sideBARicons, href:"/dashboard"},
    {name:"Manage Residents", icon:sideBARicons, href:"/residents"},
    {name:"Manage Security P.", icon:sideBARicons, href:"/securityPersonnel"},
    {name:"Manage Visitors", icon:sideBARicons, href:"/ManageVisitors"},
    {name:"Payment MGT.", icon:sideBARicons, href:"payment"},
    {name:"Service Bookings", icon:sideBARicons, href:"/service"},
    {name:"Lost & Found MGT.", icon:sideBARicons, href:"/dashboard"},
    {name:"Announcement", icon:sideBARicons, href:"/Announcement"},
    {name:"Export Details", icon:sideBARicons, href:"/dashboard"},
    {name:"Log Out", icon:sideBARicons, href:"/dashboard"},
]
function SideBar() {
const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  return (
    <motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSideBarOpen? "w-64": "w-20"}`}
animate={{width:isSideBarOpen? 256:80}}
    >

        <div className='h-full bg-sky-950 bg-opacity-500 p-5 flex flex-col border-r backdrop-blur-md border-black-700 ' >

          <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          onClick={() =>setIsSideBarOpen(!isSideBarOpen)}
          
          className='p-2 rounded-full hover:bg-white onfocus:bg-black text-amber-50 transition-colors max-w-fit justify-center pr-2'
          >
            <h1 className='text-white items-center'>Vaultify</h1>

          </motion.button>
          <nav className='mt-8 flex-grow '>
            {
              SIDEBAR_ITEMS.map((item) => (
                <NavLink 
                activeClassName="active-link"
                key={item.href} to={item.href} className=''>
                  <motion.div
                   whileHover={{scale:1.2}}
                   whileTap={{scale:0.9}}
                  className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-sky-900 transition-colors mb-2 flex-wrap'>
                    
                    <img src={item.icon}  className={`w-6 h-6 p-2 hover:bg-white-700 ${isSideBarOpen? "block": "hidden"}`} />
{isSideBarOpen && <span className='text-white'>{item.name}</span>}
                  </motion.div>

                </NavLink>
              ))
            }

          </nav>
        </div>
    </motion.div>
  )
}

export default SideBar