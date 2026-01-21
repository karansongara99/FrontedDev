import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

const About = () => {
  return (
    <>
      <Button
        className='btn btn-primary m-2'
        text='About'
        onClick={() => alert('Button Clicked!')}
      />
      <Card className="text-info" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s"
        title="About | Dev" content="This is the about page of our company."
        />
    </>
  )
}

export default About
