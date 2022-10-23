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
    <div className='login-page-wrapper'>
        <div className='login-wrapper'>
            <Form className='login-form m-auto mt-5 pt-5' onSubmit={handleSubmit}>
                <GiCupcake className='login-brand m-auto mb-3 d-flex'/>
                <h2 className='login-title text-center'>Penny's Recipes</h2>
                <Input className='login-input' type="text" placeholder="Username" required />
                <Input className='login-input' type="password" placeholder="Password" required />
                <Button className='login-btn' type='submit' >Log In</Button>
            </Form>
        </div>
    </div>
  )
}

export default Login
