import React from 'react'
import { Form, Input } from 'reactstrap'
import Navigation from './Navigation'

const Home = () => {

    const handleSearch =''

  return (
    <div className='home-wrapper'>
        <Navigation/>
        <div>
            <h1 className='text-center mt-4 pb-5'>Heirloom Recipes</h1>
            <Form className='search' onSubmit={handleSearch}>
                <Input type='text' className='search-input'  placeholder='Search...' required />
            </Form>

        </div>
    </div>
  )
}

export default Home
