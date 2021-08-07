import React,{ Component } from "react";
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

class Mynavbar extends Component{
  render(){
    const dogLinks = this.props.dogs.map(d =>(
      <Nav.Item key={d.name}>
        <NavLink exact to={`/dogs/${d.name}`} className='nav-link'>
          {d.name}
        </NavLink>
      </Nav.Item>
    ));
    return(
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
        
          <Navbar.Brand href='/dogs'> Dog App!! </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse>
            <Nav className='me-auto'>
              {dogLinks}
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    );
  }
}

export default Mynavbar;