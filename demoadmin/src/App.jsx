import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Home'
import About from './pages/About'
import Contact from './pages/Contact'
import UserList from './pages/UserList'
import UserView from './pages/UserView'
import UserAddEdit from './pages/UserAddEdit'
import FacultyForm from './pages/Faculty'


function App () {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user' element={<UserList />} />
          <Route path='/user/:id' element={<UserView />} />
          <Route path='/user/edit/:id' element={<UserAddEdit />} />
          <Route path='/user/add' element={<UserAddEdit />} />
          <Route path='/faculty' element={<FacultyForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
