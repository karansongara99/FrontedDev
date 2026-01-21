import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserView = () => {
  const [data, setData] = useState({})
  const {id} = useParams()

  useEffect(() => {
    fetch('https://67c851b10acf98d070860387.mockapi.io/api/student/' + id)
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
  }, [])

  return (
    <>
      <h1>User View Page</h1>
      <div className='p-3 bg-info'>
        <h3>ID: {data.id}</h3>
        <h3>Name: {data.name}</h3>
        <h3>Rollno : {data.rollno}</h3>
        <h3>Age: {data.age}</h3>
      </div>
    </>
  )
}

export default UserView
