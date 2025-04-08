import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Dashboard from "./pages/Dashboard.jsx"
import ManageSecurityP from "./pages/AddManageSecurityP.jsx"
import ManageVisitors from "./pages/ManageVisitors.jsx"
import SideBar from './components/SideBar.jsx'
import TopNav from './components/TopNav.jsx'
import Announcement from "./pages/Announcement.jsx"
import ManageResidents from './pages/ManageResidents.jsx'
import ServiceBooking from './pages/ServiceBooking.jsx'
import SecurityPersonnel from './pages/SecurityPersonnel.jsx'
import Payment from './pages/Payment.jsx'
import Residents from './pages/residents.jsx'
function App() {


  return (
  
    <div className='flex  overflow-hidden '>
      {/* bg */}

      <div className='fixed inset-0 -z-10'>
        <div className='absolute inset-0 '/>
        <div className='absolute inset-0 backdrop-blur-sm bg-gray-50 '/>


      </div>
<SideBar/>
<TopNav/>

  <Routes>
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/AddManageSecurityP" element={<ManageSecurityP/>} />
    <Route path="/ManageVisitors" element={<ManageVisitors/>} />
    <Route path="/Announcement" element={<Announcement/>} />
    <Route path="/AddManageResidents" element={<ManageResidents/>} />
    <Route path="/payment" element={<Payment/>} />
    <Route path="/residents" element={<Residents/>} />
    <Route path="/securityPersonnel" element={<SecurityPersonnel/>} />
    <Route path="/service" element={<ServiceBooking/>} />
    
    </Routes>      
  
    </div>

  )
}

export default App
