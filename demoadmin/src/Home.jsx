import React from 'react'
import Button from './components/Button'
import Card from './components/Card'

const Home = () => {
  return (
    <>
      <Button className="btn btn-primary m-2" text="Click Me" onClick={() => alert('Button Clicked!')} />
      <Card className="text-danger" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s" title="Web | Dev" content="HTML , CSS , JS"/>
    </>
  )
}

export default Home
