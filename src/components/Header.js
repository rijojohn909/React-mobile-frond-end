import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczg5LXBvbS0xMDkxLTA1LnBuZw.png?s=DnkRHI9suuuYo8Se6Y9SplFEuJB7EC67McOEgBmVDNA"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Mobile World <h6>9947665544</h6>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header