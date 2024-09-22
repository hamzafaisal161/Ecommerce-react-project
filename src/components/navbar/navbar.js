import { Link } from 'react-router-dom'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import React from 'react'

const Mynavbar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Link className='navbar-brand text-primary' to='/'>
        Ecommerce App
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />

      <Nav className='mr-auto'>
        <Link className='nav-link' to='/products'>
          View All Products
        </Link>
        <Link className='nav-link' to='/'>
          View Cart
        </Link>
        <Link className='nav-link' to='/'>
          Edit Profile
        </Link>
        <Link className='nav-link' to='/'>
          Add Products
        </Link>
        <Link className='nav-link' to='/users/1/products'>
          View Your Products
        </Link>
        <Link className='nav-link' to='/'>
          Logout
        </Link>
      </Nav>
      <Form className='d-flex'>
        <FormControl type='text' placeholder='Search...' className='mr-3' />
        <Button variant='outline-success'>Search</Button>
      </Form>
    </Navbar>
  )
}

export default Mynavbar
