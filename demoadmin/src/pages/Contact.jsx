import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

const Contact = () => {
  return (
    <>
      <Button
        className='btn btn-primary m-2'
        text='Contact Us'
        onClick={() => alert('Button Clicked!')}
      />
      <Card className="text-success" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s"
        title="Contact | Dev" content="Email:"
      />
    </>
  )
}

export default Contact
