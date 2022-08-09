import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import {SearchAndSortContext} from "../../../context"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
 

const Navbar_ = () => {

 const {filter, setFilter} = useContext(SearchAndSortContext);
 console.log(filter.sort);
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Item>
                <Link className="nav-link sm" to="/posts">
                  Posts
                </Link>
              </Nav.Item>
              
              <NavDropdown
                title="Sort by"
                id="basic-nav-dropdown">
                <NavDropdown.Item 
                title="title"
                 onClick={(e) =>
                    setFilter({ ...filter, sort: e.target.title })}
                >
                Title
                </NavDropdown.Item>
                <NavDropdown.Item 
                    title = "body"
                    onClick={(e) =>
                        setFilter({ ...filter, sort: e.target.title })}
                >Description</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={filter.query}
              onChange={(e) => setFilter({ ...filter, query: e.target.value })}
            />
          </form>
        </Container>
      </Navbar>
    );
};

export default Navbar_;

{/* <li className="nav-item">
<
</li>
<li className="nav-item">
<Link to="/about">About</Link>
</li> */}