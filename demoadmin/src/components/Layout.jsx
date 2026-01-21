import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='container-fluid'>
      <div className='row align-items-center py-3 border-bottom'>
        <div className='col-2'>
          <h4 className='fw-bold'>MDIDM INFOWAY</h4>
        </div>
        <div className='col text-end'>
          <span className='me-3'>Welcome, Admin</span>
          <button className='btn btn-outline-secondary btn-sm'>Logout</button>
        </div>
      </div>

      <div className='row'>
        <div className='col-2'>
          <Sidebar />
        </div>

        <div className='col'>
          <Outlet />
        </div>
      </div>

      <div className='row'>
        <div className='col text-center py-3'></div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
