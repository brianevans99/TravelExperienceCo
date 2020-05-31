import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/Images/logo.png'

const Styles = styled.div`
  .navbar {
    background: var(--black);
    border-bottom: 4px solid var(--secondary);
  }
  #brand {
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    color: var(--green);
  }
  a {
    color: var(--offWhite);
  }
`

const NavigationBar = () => (
  <Styles>
    <Navbar expand='lg'>
      <Navbar.Brand href='/'>
        <img src={logo} alt='Travel Experience Co.' height='50' />{' '}
        <span id='brand'>Travel Experience Co.</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
          <Nav.Item>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>[phone]</Nav.Item>
          <Nav.Item>[Saved]</Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar
