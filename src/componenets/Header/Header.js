import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsHouseDoor } from 'react-icons/bs';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <BsHouseDoor className="me-2" />
          Netflix
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand> <Navbar.Brand as={Link} to="/FavList">
          Favourite List
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
