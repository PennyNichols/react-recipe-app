import React from 'react'
import {Button, Form, Input} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import {GiCupcake} from 'react-icons/gi'

const Login = () => {
    const navigate= useNavigate()
    const handleSubmit = e =>{
        e.preventDefault();
        navigate('/home')
    }
  return (
    <div>
      <Form className='login-form' onSubmit={handleSubmit}>
        <GiCupcake className='login-brand'/>
        <h2>Penny's Recipes</h2>
        <Input type="text" placeholder="Username" required />
        <Input type="password" placeholder="Password" required />
        <Button className='login-btn' type='submit' >Log In</Button>
      </Form>
    </div>
  )
}

export default Login
