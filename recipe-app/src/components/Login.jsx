import React from 'react'
import {Button, Form, Input} from 'reactstrap'
import {SiCodechef} from 'react-icons/si'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate= useNavigate()
    const handleSubmit = e =>{
        e.preventDefault();
        navigate('/home')
    }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <SiCodechef />
        <h2>Penny's Recipes</h2>
        <Input type="text" placeholder="Username" required />
        <Input type="password" placeholder="Password" required />
        <Button type='submit' >Log In</Button>
      </Form>
    </div>
  )
}

export default Login
