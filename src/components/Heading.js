import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
import{
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';
export const Heading = () => {
    return (
        <Navbar className="bg-primary">
       <Container>
           <NavbarBrand className="text-light" href="/">My Todo List</NavbarBrand>
          <Nav>
           <NavItem>
               <Link className="btn btn-light text-primary " to="/add">Add task</Link>
           </NavItem>
           </Nav>
       </Container>
        </Navbar>
    )
}
